// Test endpoint for OpenAI API integration
// Access at /api/test-openai

export const prerender = false

export async function GET() {
  console.log('Test OpenAI API endpoint called')

  try {
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
      console.log('Sending test request to OpenAI API...')

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
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content:
                  'You are a helpful assistant with expertise in data engineering and AI.',
              },
              {
                role: 'user',
                content:
                  'Say hello and confirm that the API connection is working.',
              },
            ],
            max_tokens: 100,
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

      return new Response(
        JSON.stringify({
          success: true,
          message: 'OpenAI API connection successful',
          content,
          model: data.model,
          usage: data.usage,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
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
    console.error('Error in test OpenAI API route:', error)
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
