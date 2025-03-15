// Test endpoint for environment variables
// Access at /api/env-test

export const prerender = false

export async function GET() {
  console.log('Environment variables test endpoint called')

  try {
    // Get the OpenAI API key from environment variables
    const OPENAI_API_KEY = import.meta.env.OPENAI_API_KEY

    // Check if we have an API key
    const apiKeyStatus = OPENAI_API_KEY
      ? `Found (first 5 chars: ${OPENAI_API_KEY.substring(0, 5)}...)`
      : 'Not found'

    // Get all environment variables with OPENAI_ prefix
    const openaiEnvVars = Object.keys(import.meta.env)
      .filter(key => key.startsWith('OPENAI_'))
      .map(key => ({
        key,
        status: import.meta.env[key] ? 'Set' : 'Empty',
      }))

    // Get all public environment variables
    const publicEnvVars = Object.keys(import.meta.env)
      .filter(key => key.startsWith('PUBLIC_'))
      .map(key => ({
        key,
        status: import.meta.env[key] ? 'Set' : 'Empty',
      }))

    console.log('Environment variables test results:')
    console.log(`OPENAI_API_KEY: ${apiKeyStatus}`)
    console.log('OpenAI environment variables:', openaiEnvVars)
    console.log('Public environment variables:', publicEnvVars)

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Environment variables test',
        openaiApiKey: apiKeyStatus,
        openaiEnvVars,
        publicEnvVars,
        envPrefix: import.meta.env.VITE_ENV_PREFIX || 'Not set',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error in environment variables test endpoint:', error)
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
