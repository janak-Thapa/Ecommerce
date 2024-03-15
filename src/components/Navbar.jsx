import React from 'react'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'

function Navbar() {
  const items = useSelector((state)=>state.cart)
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>

    <span className='logo'>LOGO</span>
    <Link className='navLink' to = '/'>Home</Link>
    <Link className='navLink' to = '/cart'>Cart</Link>
    <span className='cartCount'>Cart items:{items.length}</span>
    </div>
  )
}

export default Navbar