import React, { useState } from 'react'; //
import "../styles/Navbar.css";
import Logo from '../assests/burger1.jpg'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
export default function Navbar() {
  const[open,setOpen]=useState(false);
  const openMenu=()=>{
    setOpen(!open);
  }
  return (
    <div className="navbar">
      <img src={Logo} alt="Loading...."/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Blogs</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">Contact</Link></li>
       
        {/* <li><Link to="/Login">Login</Link></li> */}
        <li onClick={openMenu}>
          <FaBars className='open-menu'/>
        </li>
        </ul>
        
        <nav className={`mobile-menu ${open ? 'open' : 'close'}`}>

          <span onClick={openMenu} className="close-icon">
            <IoMdClose/>
            </span>
            <ul>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/">About</Link></li>
        <li ><Link to="/">Blogs</Link></li>
        <li ><Link to="/">Services</Link></li>
        <li><Link to="/">Contact</Link></li>
        </ul>
         
        </nav>
      
    </div>
  )
}
