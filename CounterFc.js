import React, { useState } from 'react'
import './CounterStyle.css';

export default function CounterFc() {
    const [count ,setCount] = useState(0);
  return (
    <div className='counter'>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count +1)}>+1</button>
      <button onClick={() => setCount(count -1)}>-1</button>
      
    </div>
  )
}

