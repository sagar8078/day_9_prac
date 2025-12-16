import React, {useState, useEffect} from 'react'
import './page.css'

export default function About() {

const[count, setCount]= useState(2);
    //console.log("About rerendered");

    useEffect(()=>{
    
            console.log("About component Mounted");
            
                //console.log("Home componene ka use Effect"); // it run every first time whenve home will rerendered
               return ()=>{
            console.log("About unmounted");
            
           };  
    
        },[])

  return (
    <div id='page'>
        {count}

        <button onClick={()=>setCount(count+5)}>about click</button>
      
    About page
    </div>
  )
}
