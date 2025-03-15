import { useEffect, useRef, useState } from 'react'

const RagQA = () => {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const [error, setError] = useState(null)
  const [modelInfo, setModelInfo] = useState(null)
  const [rateLimit, setRateLimit] = useState(null)
  const [cooldown, setCooldown] = useState(0)
  const chatContainerRef = useRef(null)
  const cooldownTimerRef = useRef(null)

  // Scroll to bottom of chat container when chat history updates
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  // Handle cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      cooldownTimerRef.current = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) {
            clearInterval(cooldownTimerRef.current)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (cooldownTimerRef.current) {
        clearInterval(cooldownTimerRef.current)
      }
    }
  }, [cooldown])

  // Sample predefined responses for demo purposes
  // In a real implementation, this would be replaced with actual API calls
  const predefinedResponses = {
    etl: 'My ETL process typically involves using Apache Airflow for orchestration, Apache NiFi for data ingestion, and Apache Spark for transformation. I design modular pipelines that can scale horizontally and handle both batch and streaming data.',
    'data quality':
      'I implement data quality checks using Great Expectations to validate data at each stage of the pipeline. This includes schema validation, completeness checks, and business rule validation to ensure data integrity.',
    'machine learning':
      'For ML pipelines, I use MLflow for experiment tracking, model versioning, and deployment. I typically implement feature stores using Feast to ensure consistent feature engineering across training and inference.',
    cloud:
      'I have experience with AWS, Azure, and GCP. On AWS, I frequently use S3, Glue, Redshift, and EMR. On Azure, I work with Data Factory, Synapse Analytics, and Databricks. On GCP, I utilize BigQuery, Dataflow, and Vertex AI.',
    'real-time':
      'For real-time data processing, I implement streaming architectures using Kafka or Kinesis for ingestion, process with Spark Streaming or Flink, and serve insights through real-time dashboards or APIs.',
  }

  // Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    if (!query.trim()) return

    // Check if we're in cooldown period
    if (cooldown > 0) {
      setError(
        `Please wait ${cooldown} seconds before sending another message.`,
      )
      return
    }

    // Add user query to chat history
    const userMessage = { role: 'user', content: query, id: Date.now() }
    setChatHistory(prev => [...prev, userMessage])

    setIsLoading(true)
    setError(null)
    setModelInfo(null)

    try {
      // Try to use the OpenAI API first
      let responseContent = ''
      let responseModelInfo = null
      let responseRateLimit = null

      try {
        // Call the OpenAI API
        console.log('Attempting to call OpenAI API...')
        const apiResponse = await fetchOpenAIResponse(query)
        responseContent = apiResponse.content
        responseModelInfo = {
          model: apiResponse.model,
          usage: apiResponse.usage,
        }
        responseRateLimit = apiResponse.rate_limit
        console.log('Successfully received response from OpenAI API')
      } catch (apiError) {
        console.warn(
          'OpenAI API call failed, falling back to predefined responses:',
          apiError,
        )

        // Check if this is a rate limit error
        if (apiError.status === 429 && apiError.retryAfter) {
          const retrySeconds = apiError.retryAfter
          setCooldown(retrySeconds)
          setError(
            `Rate limit exceeded. Please try again in ${Math.ceil(retrySeconds / 60)} minutes.`,
          )
          setIsLoading(false)
          return
        }

        // Fallback to predefined responses if API call fails
        const lowerQuery = query.toLowerCase()
        const matchedKey = Object.keys(predefinedResponses).find(key =>
          lowerQuery.includes(key),
        )

        if (matchedKey) {
          responseContent = predefinedResponses[matchedKey]
        } else {
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 1000))
          responseContent =
            "I don't have specific information about that topic in my knowledge base. Please ask about ETL processes, data quality, machine learning, cloud platforms, or real-time data processing."
        }
      }

      // Add assistant response to chat history
      const assistantMessage = {
        role: 'assistant',
        content: responseContent,
        id: Date.now() + 1,
      }
      setChatHistory(prev => [...prev, assistantMessage])
      setAnswer(responseContent)

      // Set model info if available
      if (responseModelInfo) {
        setModelInfo(responseModelInfo)
      }

      // Set rate limit info if available
      if (responseRateLimit) {
        setRateLimit(responseRateLimit)
      }

      // Scroll to bottom after chat history updates
      setTimeout(scrollToBottom, 100)
    } catch (err) {
      console.error('Error fetching answer:', err)
      setError('Failed to get a response. Please try again.')
    } finally {
      setIsLoading(false)
      setQuery('')
    }
  }

  // Function to implement a real OpenAI API call
  const fetchOpenAIResponse = async userQuery => {
    try {
      console.log('Sending request to OpenAI API...')

      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userQuery }],
        }),
      })

      // Check if the response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Non-JSON response received:', await response.text())
        throw new Error('Expected JSON response but got something else')
      }

      if (!response.ok) {
        let errorData
        try {
          errorData = await response.json()
          console.error('API response error:', errorData)
        } catch (e) {
          const text = await response.text()
          console.error('Failed to parse error response as JSON:', text)
          errorData = { raw: text }
        }

        // Handle rate limiting specifically
        if (response.status === 429) {
          const retryAfter = Number.parseInt(
            response.headers.get('Retry-After') || '60',
            10,
          )
          const error = new Error(
            `Rate limit exceeded. Please try again later.`,
          )
          error.status = 429
          error.retryAfter = retryAfter
          throw error
        }

        throw new Error(`Failed to fetch response: ${response.status}`)
      }

      const data = await response.json()
      console.log('Received response from OpenAI API:', data)
      return data
    } catch (error) {
      console.error('Error in fetchOpenAIResponse:', error)
      throw error
    }
  }

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl mx-auto'>
      <h2 className='text-2xl font-bold mb-4 text-slate-800 dark:text-white'>
        Ask Me About Data Engineering & AI
      </h2>
      <p className='text-gray-600 dark:text-gray-400 mb-6'>
        This RAG-powered Q&A system can answer questions about my data
        engineering expertise, AI implementations, and technical approaches.
      </p>

      <div
        ref={chatContainerRef}
        className='bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4 h-80 overflow-y-auto'
      >
        {chatHistory.length === 0 ? (
          <div className='text-center text-gray-500 dark:text-gray-400 py-10'>
            <p>
              Ask me about my ETL processes, data quality approaches, machine
              learning pipelines, cloud expertise, or real-time data processing.
            </p>
          </div>
        ) : (
          chatHistory.map(message => (
            <div
              key={message.id}
              className={`mb-3 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className='text-left mb-3'>
            <div className='inline-block px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'>
              <div className='flex space-x-2'>
                <div className='w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce' />
                <div
                  className='w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce'
                  style={{ animationDelay: '0.2s' }}
                />
                <div
                  className='w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce'
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className='bg-red-100 text-red-700 p-3 rounded-lg mb-4'>
          {error}
        </div>
      )}

      {modelInfo && (
        <div className='bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg mb-4 text-xs text-blue-800 dark:text-blue-200'>
          <p>Model: {modelInfo.model}</p>
          {modelInfo.usage && (
            <p>
              Tokens: {modelInfo.usage.prompt_tokens} prompt +{' '}
              {modelInfo.usage.completion_tokens} completion ={' '}
              {modelInfo.usage.total_tokens} total
            </p>
          )}
        </div>
      )}

      {rateLimit && (
        <div className='bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg mb-4 text-xs text-gray-600 dark:text-gray-400'>
          <p>Remaining requests: {rateLimit.remaining_requests}</p>
          <p>
            Daily usage: {rateLimit.daily_tokens_used} tokens,{' '}
            {rateLimit.daily_requests_used} requests
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className='flex space-x-2'>
        <input
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='Ask a question about data engineering or AI...'
          className='flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
          disabled={isLoading || cooldown > 0}
        />
        <button
          type='submit'
          disabled={isLoading || cooldown > 0}
          className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 disabled:opacity-50'
        >
          {isLoading
            ? 'Thinking...'
            : cooldown > 0
              ? 'Wait (' + cooldown + 's)'
              : 'Ask'}
        </button>
      </form>

      <div className='mt-4 text-xs text-gray-500 dark:text-gray-400'>
        <p>Powered by Retrieval-Augmented Generation (RAG) technology</p>
      </div>
    </div>
  )
}

export default RagQA
