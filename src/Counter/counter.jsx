"use client"
import React from 'react';
import { useState } from 'react';
import './style.css'

function Counter() {

    const [count, setCount] = useState(0)

    function Increament(){
        setCount(count + 1)
    };

    function Decreament(){
        setCount(count -1)
    };
  return (
    <div >
      <button onClick={Increament}className='primary'>Increament</button>
      {count}
      <button onClick={Decreament} className='primary'>Decreament</button>
    </div>
  );
};

export default Counter;
