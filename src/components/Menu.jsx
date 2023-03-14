import React from 'react'
import '../style/menu.css';
import { Link } from 'react-router-dom'
import Logo from '../logorc.svg'
export default function Menu() {
    
  return (
    <div> 
        <Link to={'/'}><button id='btnimg'><img id='img' src={Logo} alt="" />Rotten Cucumbers</button></Link>
    </div>
  )
}
