'use client';

import { useState } from 'react';
import { chatWithEventAssistant } from '@/app/actions/chat';

export default function EventChatbot({ rulebookText }: { rulebookText?: string }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Nexa, the event assistant. Ask me anything about this hackathon!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    // Simulated delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'bot', text: 'Nexa is currently undergoing maintenance and will be available soon! Please check back later.' }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-4">
      <div className="overflow-y-auto max-h-[300px] space-y-4 pr-2 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {msg.role === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex-shrink-0 flex items-center justify-center border border-[#6366F1]/30">
                <span className="text-[#6366F1] text-xs font-bold">AI</span>
              </div>
            )}
            <div className={`flex-1 rounded-2xl p-3 text-sm shadow-sm ${msg.role === 'user' ? 'bg-[#6366F1]/20 text-white rounded-tr-none border border-[#6366F1]/30' : 'bg-white/[0.05] text-gray-300 rounded-tl-none border border-white/10'}`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#6366F1]/10 flex items-center justify-center border border-[#6366F1]/30">
              <span className="text-[#6366F1] text-xs font-bold">AI</span>
            </div>
            <div className="bg-white/[0.05] text-gray-400 p-3 rounded-2xl rounded-tl-none border border-white/10 text-sm flex gap-1 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>

      <div className="relative group bg-white/[0.03] rounded-xl border border-white/10 overflow-hidden">
        <input 
          type="text" 
          placeholder="Type a message..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          className="w-full bg-transparent py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/[0.05] transition-colors disabled:opacity-50"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-[#6366F1] transition-colors disabled:opacity-50 rounded-lg hover:bg-white/5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    </div>
  );
}
