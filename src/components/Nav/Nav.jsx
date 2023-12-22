import React from 'react'
import "./Nav.css"
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import {useState} from 'react'



const Nav = () => {
  const [activeNav, setActiveNav]  =useState("#")
  return (
    <nav> 
      <a href='#' onClick={() => setActiveNav('#')}
      className= {activeNav === '#' ? 'active' : ""}> <TiHomeOutline/> </a>
      <a href='#about' onClick={() => setActiveNav('#about') }className = {activeNav === '#about' ? 'active' : ''}> <FaRegUser/> </a>
      <a href='#experience'  onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}> <MdOutlineLibraryBooks/> </a>
      <a href='#service' onClick={() => setActiveNav('#service')} className= {activeNav === '#service' ? 'active' : ''}> <RiServiceLine/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}> <BiMessageRoundedDetail/> </a>
    </nav>

  )
}

export default Nav
