import React, { useState } from 'react'

export default function PTDuseState() {
    const [count,setCount] = useState(10);
    const[list,setList]=useState([1.5]);
   const ptdHandleList = ()=>{
      let num = parseInt(Math.random()*100);
      //cap nhat lai
      setList({
        ...list,
        num
      })

    }
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count +5)}>
            click me
        </button>
        <hr/>
        <h3>List:{list.toString()}</h3>
        <button onClick={ptdHandleList}> Them ngau nhien</button>
    </div>
  )
}
