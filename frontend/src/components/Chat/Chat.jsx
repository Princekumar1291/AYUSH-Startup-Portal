import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import axios from 'axios';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Example users (could be fetched from a backend)
  const users = [];

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput("");
    }

    axios.post('http://localhost:3000/api/v1/chat/ai', { userQuery: input })
    .then((response) => {
      setMessages([...messages, { text: response.data.response, sender: 'Bot' }]);
    }
    )
    .catch((error) => {
      console.error(error)
    })
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar for user list */}

      {/* Main chat area */}
      <div className="flex flex-col w-full">
        <Card className="flex-1 overflow-y-auto bg-gray-50">
          <CardContent>
            <div className="flex flex-col space-y-4 p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === 'You' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`p-2 max-w-xs rounded-lg ${
                      message.sender === 'You'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-900'
                    }`}
                  >
                    <span className="block">{message.sender}</span>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Message input area */}
        <div className="p-4 bg-white border-t flex items-center space-x-4">
          <Input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
}
