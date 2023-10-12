'use client';
import { handleClientScriptLoad } from 'next/script';
import './globals.css'
import React, { useState } from 'react';

export function Test_Counter() {
    const [count,setCount] = useState(0);
  
    const increment = () =>[
      setCount(count + 1)
    ];
    const decrement = () => {
      setCount(count - 1);
    };
    const divideByTwo = () =>{
      setCount( (previousCount) =>{
        return previousCount % 2 === 0 ? previousCount / 2 : previousCount
      });
    };
    const resetCount = () =>{
      setCount(0);
    };
  
    return (
      <div>
        <p>count: {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={divideByTwo}>2でわる</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    )
  }