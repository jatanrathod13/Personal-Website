// API endpoint to view current OpenAI API usage statistics
// This is protected and should only be accessible to administrators

import { getUsageStats } from '../../utils/rateLimiter.js'

export const prerender = false

export async function GET({ request }) {
  try {
    // Basic authentication check - in a real app, use proper authentication
    const authHeader = request.headers.get('Authorization')
    const adminKey = import.meta.env.ADMIN_API_KEY || 'admin-key'

    // Simple authentication check
    if (
      !authHeader ||
      !authHeader.startsWith('Bearer ') ||
      authHeader.split(' ')[1] !== adminKey
    ) {
      return new Response(
        JSON.stringify({
          error: 'Unauthorized',
          details: 'You are not authorized to access this endpoint',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    // Get current usage statistics
    const stats = getUsageStats()

    return new Response(
      JSON.stringify({
        success: true,
        stats,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error in usage stats API route:', error)
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
