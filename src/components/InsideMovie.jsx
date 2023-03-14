import React from 'react'
import { useState } from 'react';
import '../style/insidemovie.css';
import { useNavigate } from 'react-router-dom'

export default function InsideMovie(props) {
  const nav = useNavigate()
  


    return (
        <div className='im'>
            <h1 id='name'>{props.val.name}</h1>
            <img src={props.val.image} alt={props.val.name} />
            <div className='desc'>
                <h2>year:{props.val.year}</h2>
                <h2>Description:</h2>
                <h4>{props.val.desc}</h4>
            </div>

            <div className='rate' >
<h1 id='score'>{props.val.score}</h1>

    <h2>RATE</h2>
    <button className='btnr' onClick={()=>{props.addr(props.index,1); nav('/')}}>1</button>
    <button className='btnr' onClick={()=>{props.addr(props.index,2); nav('/')}}>2</button>
    <button className='btnr' onClick={()=>{props.addr(props.index,3); nav('/')}}>3</button>
    <button className='btnr' onClick={()=>{props.addr(props.index,4); nav('/')}}>4</button>
    <button className='btnr' onClick={()=>{props.addr(props.index,5); nav('/')}}>5</button>
</div>



        </div>
    )
}
