import React, { useState } from 'react';

export const ChatBox = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');

        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: newMessages }),
        });

        const data = await res.json();
        setMessages([...newMessages, data]);
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden font-sans">
            <div className="bg-blue-600 p-3 font-bold text-white text-sm">AI FORGE STRATEGIST</div>
            <div className="h-64 p-3 overflow-y-auto text-sm text-slate-300 space-y-2">
                {messages.map((m, i) => (
                    <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                        <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-slate-800'}`}>          
                            {m.content} 
                        </span>
                    </div>
                ))}
            </div>
            <div className="p-2 border-t border-slate-800 flex gap-1">
                <input className="flex-1 bg-slate-800 text-white p-2 rounded outline-none text-xs" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about your Profit Audit..." />
                <button onClick={handleSend} className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">SEND</button>
            </div>
        </div>
    );
};