"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Send, Loader2, MessageSquare, X } from 'lucide-react';

interface Message {
  text: string;
  type: 'user' | 'response';
}

interface ChatbotProps {
  websocketUrl: string;
  apiUrl: string;
  position?: 'bottom-right' | 'bottom-left';
  title?: string;
  isOpen: boolean; // Add this prop
  onClose: () => void; // Add this prop
}

export const AiChatbot: React.FC<ChatbotProps> = ({
  websocketUrl,
  apiUrl,
  position = 'bottom-right',
  title = 'AI Assistant',
  isOpen, // Receive isOpen from parent
  onClose, // Receive onClose from parent
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [requestId, setRequestId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;

    const wsConnection = new WebSocket(websocketUrl);
    wsConnection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "requestId") {
        setRequestId(data.requestId);
      } else if (data.type === "response") {
        setMessages((prev) => [...prev, { text: data.message, type: "response" }]);
        setIsLoading(false);
      } else if (data.type === "error") {
        setError(data.message);
        setIsLoading(false);
      }
    };

    wsConnection.onerror = () => {
      setError("WebSocket connection error");
      setIsLoading(false);
    };

    setWs(wsConnection);
    return () => wsConnection.close();
  }, [websocketUrl, isOpen]);

  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || !requestId || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      setMessages((prev) => [...prev, { text: inputMessage, type: "user" }]);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_value: inputMessage, requestId }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setInputMessage("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [inputMessage, requestId, isLoading, apiUrl]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => onClose()} // Use onClose from props
        className={`fixed ${
          position === 'bottom-right' ? 'right-4' : 'left-4'
        } bottom-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed ${
          position === 'bottom-right' ? 'right-4' : 'left-4'
        } bottom-20 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } z-50`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose} // Use onClose from props
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                } animate-fade-in`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none animate-pulse">
                <Loader2 className="animate-spin" size={20} />
              </div>
            </div>
          )}
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={1}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};