'use client';
import { handleClientScriptLoad } from 'next/script';
import './globals.css'
import React, { useState } from 'react';
// function TimeForm()

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

export const Test_Form = () =>{
  const [name,setName ] = useState('');
  const [startdate,setStartdate] = useState('2023-07-31');
  const [enddate,setEnddate] = useState('2023-08-31');
  const handleNameChange= (event) =>{
    setName(event.target.value);
  };
  const handleSubmit = () =>{
    console.log(name);
  };
  const handleStartdate = (event) =>{
    setStartdate(event.target.value);
  };
  const handleEnddate = (event) =>{
    setEnddate(event.target.value);
  };

  return (
    <div className="">
      <input type = 'text' value = {name} onChange={handleNameChange} />
      <button onClick={handleSubmit}>submit</button>
      <p>{name}</p>
      
      <h2>
             Input here
      </h2>
      <label > 開始日 
        <input type="date" value = {startdate} onChange={handleStartdate} id = 'start-date'/>
      </label>
      <p>{startdate}</p>
      <label> 終了日 
        <input type="date" value = {enddate} id = 'end-date'/>
      </label>
      <p>{enddate}</p>
      <label> 平日の候補時間帯 
        <div className="weekday">
          <input type= 'time' />
          <input type= 'time' />
        </div>
      </label>
    </div>
  )
}