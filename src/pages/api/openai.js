// OpenAI API integration for RAG-powered Q&A
// This is a serverless function that will be deployed to the edge

import {
  isRateLimited,
  moderateContent,
  recordRequest,
  validateContent,
} from '../../utils/rateLimiter.js'

export const prerender = false // Ensure this is not prerendered

export async function POST({ request }) {
  try {
    console.log('OpenAI API endpoint called')

    // Get client IP address
    const clientIP =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown-ip'

    console.log(`Request from IP: ${clientIP}`)

    // Check rate limiting
    const rateLimitCheck = isRateLimited(clientIP)
    if (rateLimitCheck.limited) {
      console.warn(
        `Rate limited request from ${clientIP}: ${rateLimitCheck.reason}`,
      )
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          details: rateLimitCheck.reason,
          retry_after: rateLimitCheck.timeRemaining || 60, // minutes
        }),
        {
          status: 429, // Too Many Requests
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': (rateLimitCheck.timeRemaining || 60) * 60, // seconds
          },
        },
      )
    }

    const body = await request.json()
    const { messages } = body

    // Validate the request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.error('Invalid request: Messages array is required')
      return new Response(
        JSON.stringify({
          error: 'Invalid request. Messages array is required.',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    // Validate and moderate content
    for (const message of messages) {
      if (message.role === 'user' && message.content) {
        // Validate content length and format
        const contentValidation = validateContent(message.content)
        if (!contentValidation.valid) {
          console.warn(`Content validation failed: ${contentValidation.reason}`)
          return new Response(
            JSON.stringify({
              error: 'Content validation failed',
              details: contentValidation.reason,
            }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
        }

        // Check content moderation
        const moderationResult = moderateContent(message.content)
        if (moderationResult.flagged) {
          console.warn(`Content moderation flagged: ${moderationResult.reason}`)
          return new Response(
            JSON.stringify({
              error: 'Content policy violation',
              details: 'Your message contains prohibited content.',
            }),
            {
              status: 403, // Forbidden
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
        }
      }
    }

    // Get the OpenAI API key from environment variables
    const OPENAI_API_KEY = import.meta.env.OPENAI_API_KEY

    if (!OPENAI_API_KEY) {
      console.error('OpenAI API key is not defined in environment variables')
      return new Response(
        JSON.stringify({
          error: 'OpenAI API key is not configured.',
          details:
            'The OPENAI_API_KEY environment variable is missing or empty.',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    // Log that we have an API key (without revealing it)
    console.log(
      `OpenAI API key found, first 5 chars: ${OPENAI_API_KEY.substring(0, 5)}...`,
    )

    try {
      console.log('Sending request to OpenAI API...')

      // Call the OpenAI API using the latest endpoint
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo', // You can also use 'gpt-4' if you have access
            messages: [
              {
                role: 'system',
                content:
                  'You are a helpful assistant with expertise in data engineering and AI. Provide concise, accurate responses about data pipelines, ETL processes, machine learning, and cloud technologies. Focus on practical implementations and best practices.',
              },
              ...messages,
            ],
            max_tokens: 500,
            temperature: 0.7,
          }),
        },
      )

      // Log the response status
      console.log('OpenAI API response status:', response.status)

      if (!response.ok) {
        let errorData
        try {
          const errorText = await response.text()
          console.error('OpenAI API error response text:', errorText)

          try {
            errorData = JSON.parse(errorText)
          } catch (e) {
            errorData = { raw: errorText }
          }
        } catch (e) {
          errorData = { message: 'Failed to read error response' }
        }

        console.error('OpenAI API error:', errorData)

        return new Response(
          JSON.stringify({
            error: 'Failed to get a response from OpenAI.',
            details: errorData,
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
      }

      const data = await response.json()
      console.log('OpenAI API response received successfully')

      // Extract the content from the response
      const content = data.choices[0].message.content
      console.log(`Response content length: ${content.length}`)

      // Record the successful request and token usage
      const totalTokens = data.usage?.total_tokens || 0
      const usageStats = recordRequest(clientIP, totalTokens)
      console.log(`Recorded usage: ${totalTokens} tokens for IP ${clientIP}`)

      // Add rate limit information to the response
      const rateLimit = {
        remaining_requests: usageStats.remainingRequests,
        daily_tokens_used: usageStats.dailyTokensUsed,
        daily_requests_used: usageStats.dailyRequestsUsed,
      }

      return new Response(
        JSON.stringify({
          content,
          model: data.model,
          usage: data.usage,
          rate_limit: rateLimit,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': String(usageStats.remainingRequests),
          },
        },
      )
    } catch (fetchError) {
      console.error('Error calling OpenAI API:', fetchError)
      return new Response(
        JSON.stringify({
          error: 'Error calling OpenAI API',
          details: fetchError.message,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }
  } catch (error) {
    console.error('Error in OpenAI API route:', error)
    return new Response(
      JSON.stringify({
        error: 'An unexpected error occurred.',
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
