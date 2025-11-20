import React from 'react'

const Loading = () => {
  return (
      <div className="flex-1">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-sm">AI</span>
      </div>
      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-500 text-sm mt-1">Chatbot is thinking...</p>
      </div>
    </div>
  </div>
  )
}

export default Loading
