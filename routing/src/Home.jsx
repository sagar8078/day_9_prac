import React, { useEffect, useState } from 'react'
import './page.css'


export default function Home() {

    const[count0, setCount0]= useState(11);
    const[count1, setCount1]= useState(45);
    const[count2, setCount2]= useState(21);
    //console.log("Home rerendered");


    useEffect(()=>{

        console.log("Home component Mounted");
        
            //console.log("Home componene ka use Effect"); // it run every first time whenve home will rerendered
           return ()=>{
            console.log("Home unmounted");
            
           }; 

    },[]) // it means count0 state change only then use effect will run


  return (
    <div id='page'>
        {count0}
        <br />
        <button onClick={()=>setCount0(count0+5)}>Home click</button>
        <br />

        {count1}
        <br />
        <button onClick={()=>setCount1(count1+5)}>Home click</button>
        <br />

        {count2}
        <br />
        <button onClick={()=>setCount2(count2+5)}>Home click</button>
        <br />
        


      HOME page
    </div>
  )
}
