#!/usr/bin/env node

// Simple script to test the OpenAI API integration
// Run with: node scripts/test-openai-api.js

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
// Load environment variables from .env file
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load the .env file from the project root
dotenv.config({ path: join(dirname(__dirname), '.env') })

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

if (!OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY is not defined in your .env file')
  console.log('Please create a .env file with your OpenAI API key:')
  console.log('OPENAI_API_KEY=your_openai_api_key_here')
  process.exit(1)
}

console.log(
  `Found OpenAI API key: ${OPENAI_API_KEY.substring(0, 5)}...${OPENAI_API_KEY.substring(OPENAI_API_KEY.length - 4)}`,
)

async function testOpenAI() {
  console.log('Testing OpenAI API integration...')

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
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
            content: 'What is ETL in data engineering?',
          },
        ],
        max_tokens: 100,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      let errorJson
      try {
        errorJson = JSON.parse(errorText)
      } catch (e) {
        errorJson = { raw: errorText }
      }
      console.error('OpenAI API error:', errorJson)
      process.exit(1)
    }

    const data = await response.json()
    const content = data.choices[0].message.content

    console.log('\nAPI Response:')
    console.log('-------------')
    console.log(content)
    console.log('\nModel:', data.model)
    console.log('Usage:', data.usage)
    console.log('\nSuccess! Your OpenAI API key is working correctly.')
  } catch (error) {
    console.error('Error testing OpenAI API:', error)
    process.exit(1)
  }
}

testOpenAI()
