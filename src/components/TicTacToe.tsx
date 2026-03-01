'use client';
import { useState } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index]) return; // If cell is already filled, do nothing
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <div className="grid grid-cols-3 w-48 h-48 border-2 border-blue-900">
        {board.map((cell, index) => (
          <div 
            key={index} 
            onClick={() => handleClick(index)}
            className="border border-blue-900 flex items-center justify-center text-4xl cursor-pointer hover:bg-gray-100"
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}