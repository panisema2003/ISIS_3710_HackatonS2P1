'use client';
import { useState } from 'react';

const quotes = [
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" }
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => setIndex((prev) => (prev + 1) % quotes.length);
  const prevQuote = () => setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-teal-50 border-y-8 border-orange-500 p-8 max-w-2xl w-full">
        <div className="text-6xl text-gray-800 leading-none">”</div>
        <p className="text-gray-600 text-lg mb-4">{quotes[index].text}</p>
        <p className="text-gray-500 mb-8">- {quotes[index].author}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button onClick={prevQuote} className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200">{'<'}</button>
            <button onClick={nextQuote} className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200">{'>'}</button>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xs text-gray-500">Share At:</span>
            {/* Fake sm buttons */}
            <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs cursor-pointer">Tw</div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs cursor-pointer">Wa</div>
          </div>
        </div>
      </div>
    </div>
  );
}