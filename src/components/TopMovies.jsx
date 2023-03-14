import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/topmovies.css';
import {motion} from "framer-motion"

export default function TopMovies(props) {
    const nav = useNavigate()
    return (
        <motion.div 
        animate={{scale:1}}
        initial={{scale:0.7}}
        transition={{duration: 0.4}}

        
        onClick={() => { nav(`/movie-${props.val.name}`) }}>
            <motion.div className='tmovie'
                        transition={{ duration: 0.35 }}
                        whileTap={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
            >

                <img id='timage' src={props.val.image} />

                <h4 class="tmoviename">{props.val.name} </h4>
            </motion.div>
        </motion.div>
    )
}
