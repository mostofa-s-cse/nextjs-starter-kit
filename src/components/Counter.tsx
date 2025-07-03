'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '@/store/slices/counterSlice';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import React from 'react';

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter.value);
  const [inputValue, setInputValue] = React.useState('');

  const handleIncrementByAmount = () => {
    const amount = parseInt(inputValue, 10);
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount));
      setInputValue('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Redux Counter
      </h2>

      {/* Counter Display */}
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-blue-600 mb-2">{count}</div>
        <p className="text-gray-600">Current Count</p>
      </div>

      {/* Basic Controls */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          <Minus size={20} />
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <Plus size={20} />
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="flex items-center justify-center w-12 h-12 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Advanced Controls */}
      <div className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="number"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Enter amount"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleIncrementByAmount}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
          >
            +5
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(10))}
            className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
          >
            +10
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(25))}
            className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
          >
            +25
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600 text-center">
          This counter demonstrates Redux Toolkit state management with
          TypeScript.
        </p>
      </div>
    </div>
  );
}
