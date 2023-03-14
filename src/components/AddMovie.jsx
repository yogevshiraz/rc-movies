import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/addm.css';
export default function AddMovie(props) {
  
    const [name,setName]=useState('')
    const [desc,setDesc]=useState('')
    const [image,setImage]=useState('')
    const [year,setyear]=useState('')
  
  
  
    return (
    <div className='am'>
        <input type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }}/>
        <input type="text" placeholder='year' onChange={(e) => { setyear(e.target.value) }}/>
        <input type="text" placeholder='Image src' onChange={(e) => { setImage(e.target.value) }}/>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Description'onChange={(e) => { setDesc(e.target.value) }}/>
        <Link to={'/'}><button onClick={()=>{props.add(name,desc,image,year)}} id='btnaddm'>Add</button></Link>
    </div>
  )
}
