'use client';
import { useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`p-8 transition-colors duration-500 flex flex-col items-center ${isDark ? 'bg-zinc-800 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <h2 className="text-2xl font-black mb-8">{isDark ? 'DARK MODE' : 'LIGHT MODE'}</h2>
      
      {/* Toggle Button */}
      <div 
        onClick={() => setIsDark(!isDark)}
        className={`w-32 h-16 flex items-center rounded-full p-2 cursor-pointer transition-colors duration-300 shadow-inner ${isDark ? 'bg-gray-200' : 'bg-white border'}`}
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 shadow-md ${isDark ? 'transform translate-x-16 bg-zinc-800 text-white' : 'bg-white text-yellow-500 border'}`}>
          {isDark ? '🌙' : '☀️'} {/*Windows emojis hope it works for Mac :/*/}
        </div>
      </div>
      
      <p className="mt-8 font-bold tracking-widest uppercase">Toggle Button</p>
    </div>
  );
}