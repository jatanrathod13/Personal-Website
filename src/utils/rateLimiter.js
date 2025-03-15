// Rate limiter utility for OpenAI API
// This implements a simple in-memory rate limiting system

// Store for rate limiting data
// In a production environment, this should be replaced with Redis or another persistent store
const ipLimitStore = new Map()
const globalUsageStore = {
  dailyTokens: 0,
  dailyRequests: 0,
  lastReset: Date.now(),
}

// Configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const RATE_LIMIT_MAX = 5 // Maximum requests per hour per IP
const DAILY_TOKEN_LIMIT = 1000 // Maximum tokens per day (adjust based on your budget)
const DAILY_REQUEST_LIMIT = 10 // Maximum requests per day
const CONTENT_LENGTH_LIMIT = 1000 // Maximum content length in characters

// Reset global counters daily
function resetDailyCountersIfNeeded() {
  const now = Date.now()
  const oneDayMs = 24 * 60 * 60 * 1000

  if (now - globalUsageStore.lastReset > oneDayMs) {
    globalUsageStore.dailyTokens = 0
    globalUsageStore.dailyRequests = 0
    globalUsageStore.lastReset = now
    console.log('Daily API usage counters reset')
  }
}

// Check if a request is allowed based on rate limiting rules
export function isRateLimited(ip) {
  resetDailyCountersIfNeeded()

  // Check global daily limits
  if (globalUsageStore.dailyRequests >= DAILY_REQUEST_LIMIT) {
    console.warn('Daily request limit reached')
    return {
      limited: true,
      reason: 'Daily request limit reached. Please try again tomorrow.',
      remainingRequests: 0,
    }
  }

  if (globalUsageStore.dailyTokens >= DAILY_TOKEN_LIMIT) {
    console.warn('Daily token limit reached')
    return {
      limited: true,
      reason: 'Daily token limit reached. Please try again tomorrow.',
      remainingTokens: 0,
    }
  }

  // Check IP-based rate limiting
  const now = Date.now()
  const ipData = ipLimitStore.get(ip) || {
    requests: [],
    blocked: false,
    blockUntil: 0,
  }

  // If IP is blocked, check if block period is over
  if (ipData.blocked && now < ipData.blockUntil) {
    const timeRemaining = Math.ceil((ipData.blockUntil - now) / 1000 / 60)
    return {
      limited: true,
      reason: `Too many requests. Please try again in ${timeRemaining} minutes.`,
      timeRemaining,
    }
  }

  // Block period is over, reset blocked status if needed
  if (ipData.blocked) {
    ipData.blocked = false
  }

  // Clean up old requests
  ipData.requests = ipData.requests.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW,
  )

  // Check if rate limit is exceeded
  if (ipData.requests.length >= RATE_LIMIT_MAX) {
    // Block this IP for the next hour
    ipData.blocked = true
    ipData.blockUntil = now + RATE_LIMIT_WINDOW
    ipLimitStore.set(ip, ipData)

    return {
      limited: true,
      reason: 'Rate limit exceeded. Please try again later.',
      timeRemaining: 60, // minutes
    }
  }

  // Request is allowed
  return {
    limited: false,
    remainingRequests: RATE_LIMIT_MAX - ipData.requests.length,
  }
}

// Record a successful request
export function recordRequest(ip, tokenUsage = 0) {
  resetDailyCountersIfNeeded()

  // Update IP-specific data
  const now = Date.now()
  const ipData = ipLimitStore.get(ip) || { requests: [], blocked: false }
  ipData.requests.push(now)
  ipLimitStore.set(ip, ipData)

  // Update global counters
  globalUsageStore.dailyRequests += 1
  globalUsageStore.dailyTokens += tokenUsage

  console.log(`Request recorded - IP: ${ip}, Tokens: ${tokenUsage}`)
  console.log(
    `Daily usage: ${globalUsageStore.dailyRequests} requests, ${globalUsageStore.dailyTokens} tokens`,
  )

  return {
    remainingRequests: RATE_LIMIT_MAX - ipData.requests.length,
    dailyTokensUsed: globalUsageStore.dailyTokens,
    dailyRequestsUsed: globalUsageStore.dailyRequests,
  }
}

// Validate content to prevent abuse
export function validateContent(content) {
  if (!content) {
    return {
      valid: false,
      reason: 'Content is required',
    }
  }

  if (typeof content !== 'string') {
    return {
      valid: false,
      reason: 'Content must be a string',
    }
  }

  if (content.length > CONTENT_LENGTH_LIMIT) {
    return {
      valid: false,
      reason: `Content exceeds maximum length of ${CONTENT_LENGTH_LIMIT} characters`,
    }
  }

  // Check for spam patterns (this is a simple example, you might want more sophisticated checks)
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|prize|winner)\b/i,
    /\b(free money|make money fast|get rich quick)\b/i,
  ]

  for (const pattern of spamPatterns) {
    if (pattern.test(content)) {
      return {
        valid: false,
        reason: 'Content contains prohibited terms',
      }
    }
  }

  return { valid: true }
}

// Get current usage statistics
export function getUsageStats() {
  resetDailyCountersIfNeeded()

  return {
    dailyTokensUsed: globalUsageStore.dailyTokens,
    dailyTokenLimit: DAILY_TOKEN_LIMIT,
    dailyRequestsUsed: globalUsageStore.dailyRequests,
    dailyRequestLimit: DAILY_REQUEST_LIMIT,
    activeIPs: ipLimitStore.size,
  }
}

// Content moderation function (basic implementation)
export function moderateContent(content) {
  if (!content) return { flagged: false }

  // List of terms to check for in moderation
  const moderationTerms = [
    /\b(hack|exploit|bypass|steal|illegal|bomb|terrorist)\b/i,
  ]

  for (const term of moderationTerms) {
    if (term.test(content)) {
      return {
        flagged: true,
        reason: 'Content contains prohibited terms',
      }
    }
  }

  return { flagged: false }
}
