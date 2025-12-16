import React, {useState, useEffect} from 'react'
import './page.css'



export default function Contact() {

const[count, setCount]= useState(16);
    //console.log("Contact rerendered");

    useEffect(()=>{
    
            console.log("Contact component Mounted");
            
                //console.log("Home componene ka use Effect"); // it run every first time whenve home will rerendered
            return ()=>{
            console.log("contact unmounted");
            
           };     
    
        },[])

  return (
    <div id='page'>

        {count}

        <button onClick={()=>setCount(count+5)}>contact click</button>
      Contact page

    </div>
  )
}
