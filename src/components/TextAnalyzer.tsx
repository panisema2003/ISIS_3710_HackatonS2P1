'use client';
import { useState } from 'react';

export default function TextAnalyzer() {
  const [text, setText] = useState('');

  // Count lofic
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const sentences = text.trim() ? (text.match(/[.!?]+/g) || []).length : 0;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim() !== '').length : 0;
  
  // Assumption. Reading time 200 wps
  const readTimeMin = words > 0 ? Math.ceil(words / 200) : 0;
  
  // Longest word logic
  const longestWord = text.trim() ? text.trim().split(/\s+/).reduce((longest, current) => current.length > longest.length ? current : longest, '') : '-';

  return (
    <div className="p-8 bg-zinc-900 text-gray-300 font-sans">
      <div className="flex justify-between bg-zinc-800 p-4 rounded-t-lg text-center">
        <div><p>Words</p><p className="text-xl font-bold text-white">{words}</p></div>
        <div><p>Characters</p><p className="text-xl font-bold text-white">{characters}</p></div>
        <div><p>Sentences</p><p className="text-xl font-bold text-white">{sentences}</p></div>
        <div><p>Paragraphs</p><p className="text-xl font-bold text-white">{paragraphs}</p></div>
      </div>
      
      <textarea
        className="w-full h-48 bg-zinc-800/50 p-4 border-y border-zinc-700 focus:outline-none resize-none"
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex justify-between bg-zinc-800 p-4 rounded-b-lg">
        <p>Average Reading Time: {readTimeMin > 0 ? `~${readTimeMin} min` : '-'}</p>
        <p>Longest word: {longestWord}</p>
      </div>
    </div>
  );
}