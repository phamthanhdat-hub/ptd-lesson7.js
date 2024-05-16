import React, { useEffect, useState } from 'react'

export default function PTDuseEffect() {
    //state: const
    const [ count, setCount] = useState(0);
const ptdHandleClick = ()=>{
    setCount(prev => prev +1);
}
 // su dung ham useEffect
 useEffect(()=>{
    document.title = ' Pham Thanh Dat You Clicked ${count} time'
    console.log(' Pham Thanh Dat You Clicked ${count} time');
 });
 useEffect(()=>{
    console.log(" Chay lan dau tien moi lan");
 },[])
 useEffect(()=>{
    console.log( 'useEffect count click',count)
 },[count])
 
  return (
    <div>
       
        <h2> Demo - useEffect You Clicked {count} times</h2>

        <button onClick={ptdHandleClick}>
            Click me
        </button>
    </div>
  )
}
