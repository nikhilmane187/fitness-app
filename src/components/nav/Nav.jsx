import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineElectricalServices} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
<div className='nav'>
  <a href="#"><AiOutlineHome/></a>
  <a href="#about"><AiOutlineUser/></a>
  <a href="#experience"><BiBook/></a>
  <a href="#services"><MdOutlineElectricalServices/></a>
  <a href="#contact"><BiMessageSquareDetail/></a>
 
</div>
  )
}

export default Nav