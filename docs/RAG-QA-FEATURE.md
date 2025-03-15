# RAG-Powered Q&A Feature

This document provides information about the Retrieval-Augmented Generation (RAG) Q&A feature implemented in the portfolio.

## Overview

The RAG-Powered Q&A feature allows visitors to interact with an AI assistant that can answer questions about data engineering, AI implementations, and technical approaches. The feature uses a combination of pre-defined responses and OpenAI's API to generate contextually relevant answers.

## Implementation Details

### Components

1. **Frontend Component (`src/components/RagQA.jsx`)**
   - React component that provides a chat-like interface
   - Handles user input and displays responses
   - Manages chat history and loading states

2. **Backend API (`src/pages/api/openai.js`)**
   - Serverless function that interfaces with OpenAI's API
   - Processes user queries and returns AI-generated responses
   - Includes error handling and request validation

### Technologies Used

- **React**: For the interactive UI component
- **OpenAI API**: For generating contextually relevant responses
- **Astro**: For server-side rendering and API routes

## Configuration

To use this feature, you need to:

1. Obtain an OpenAI API key from [OpenAI's platform](https://platform.openai.com/api-keys)
2. Add the API key to your `.env` file:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key
   ```

## Fallback Mechanism

The component includes a fallback mechanism that uses predefined responses for common queries when:
- The OpenAI API is not configured
- The API request fails
- The user is in development mode without an API key

## Customization

You can customize the predefined responses by editing the `predefinedResponses` object in `src/components/RagQA.jsx`.

To modify the system prompt or other OpenAI parameters, edit the API route in `src/pages/api/openai.js`.

## Future Improvements

Potential enhancements for this feature include:

1. **True RAG Implementation**: Integrate with a vector database to store and retrieve relevant documents
2. **Conversation History**: Maintain context across multiple queries
3. **User Feedback**: Add thumbs up/down buttons for response quality
4. **Response Citations**: Include sources for information provided in responses
5. **Streaming Responses**: Implement streaming for a more interactive experience

## Troubleshooting

If you encounter issues with the Q&A feature:

1. Check that your OpenAI API key is correctly set in the `.env` file
2. Verify that the API key has sufficient quota and permissions
3. Check the browser console for any error messages
4. Ensure the component is properly imported and rendered in the portfolio

## Safeguards and Rate Limiting

To protect your OpenAI API usage and prevent abuse, the following safeguards have been implemented:

### Rate Limiting

The system implements several layers of rate limiting:

1. **IP-based rate limiting**: Each IP address is limited to a maximum number of requests per hour (default: 20 requests). Exceeding this limit will result in a temporary block.

2. **Global daily request limit**: A global limit on the total number of requests per day (default: 1000 requests) prevents excessive usage.

3. **Global daily token limit**: A global limit on the total number of tokens consumed per day (default: 100,000 tokens) prevents unexpected costs.

4. **Cooldown periods**: After hitting rate limits, users must wait for a specified cooldown period before making new requests.

### Content Validation and Moderation

1. **Content length limits**: User messages are limited to a maximum length (default: 1000 characters) to prevent token abuse.

2. **Spam detection**: Basic pattern matching is used to detect and block spam or promotional content.

3. **Content moderation**: Messages are checked for prohibited terms and potentially harmful content.

### Usage Monitoring

1. **Admin dashboard**: An admin dashboard is available at `/admin/usage` to monitor API usage statistics.

2. **Usage tracking**: The system tracks and displays token usage information to users, helping them understand their consumption.

3. **Detailed logging**: All API requests and rate limit events are logged for monitoring and debugging.

### Configuration

You can adjust the rate limiting parameters in `src/utils/rateLimiter.js`:

```javascript
// Configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX = 20; // Maximum requests per hour per IP
const DAILY_TOKEN_LIMIT = 100000; // Maximum tokens per day
const DAILY_REQUEST_LIMIT = 1000; // Maximum requests per day
const CONTENT_LENGTH_LIMIT = 1000; // Maximum content length in characters
```

Adjust these values based on your expected usage and budget constraints. 