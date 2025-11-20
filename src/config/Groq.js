// config/Groq.js
async function runChat(prompt) {
  try {
    // Validate API key
    if (!import.meta.env.VITE_GROQ_API_KEY) {
      throw new Error("Groq API key is missing. Please check your environment variables.");
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Or other Groq models
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 2048,
        top_p: 1,
        stop: null
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Groq API error: ${response.status} - ${errorData.error?.message || response.statusText}`);
    }

    if (!response.body) {
      throw new Error('Response body is null');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine === '') continue;
          if (trimmedLine === 'data: [DONE]') break;

          if (trimmedLine.startsWith('data: ')) {
            try {
              const jsonData = JSON.parse(trimmedLine.slice(6));
              const content = jsonData.choices?.[0]?.delta?.content;
              if (content) {
                fullText += content;
              }
            } catch (e) {
              // Skip invalid JSON lines
              console.warn('Skipping invalid JSON line:', trimmedLine);
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }

    return fullText;
  } catch (error) {
    console.error('Groq API Error:', error);
    
    // Handle specific error types
    if (error.message.includes('429')) {
      throw new Error('Rate limit exceeded. Please try again later.');
    } else if (error.message.includes('401')) {
      throw new Error('Invalid API key. Please check your Groq API key.');
    } else if (error.message.includes('402') || error.message.includes('quota')) {
      throw new Error('Insufficient quota. Please check your Groq account balance.');
    } else {
      throw new Error(`Groq API error: ${error.message}`);
    }
  }
}

export default runChat;