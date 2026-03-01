'use client';
import { useState } from 'react';

export default function ProgressBar() {
  const [percentage, setPercentage] = useState(10);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-2xl font-bold">Progress bar</h2>
      <div className="w-full max-w-md bg-gray-300 rounded-full h-6 relative overflow-hidden">
        <div 
          className="bg-red-400 h-full rounded-full flex items-center px-2 text-white text-xs transition-all duration-300"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 5 && `${percentage}%`}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label>Input Percentage:</label>
        <input 
          type="number" 
          min="0" 
          max="100" 
          value={percentage} 
          onChange={(e) => setPercentage(Math.min(100, Math.max(0, Number(e.target.value))))}
          className="border border-gray-400 rounded-full px-4 py-1 w-24 text-center"
        />
      </div>
    </div>
  );
}