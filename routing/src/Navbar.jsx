import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='abc'>
            <ul id='abcd'>

                        {/* <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li> */}

                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/About'}>About</Link></li>

            </ul>
    </div>
  )
}
