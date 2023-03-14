import React, { useState } from 'react'
import '../style/movie.css';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
export default function Movie(props) {
    const nav = useNavigate()

    // const [score, setScore] = useState(props.val.score)
    // let s
    // const scores = () => {
    //     if (score == 5) {
    //         s = '0px 0px 20px 3px rgba(84, 177, 47, 0.65)'
    //     }
    //     else {
    //         s = '0px 0px 20px 3px rgba(84, 177, 47, 0.3)'
    //     }
    //     return s
    // }



    return (
        <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0.7 }}
            transition={{ duration: 0.35 }}
            onClick={() => { nav(`/movie-${props.val.name}`) }}>

            <motion.div className='movie'
                transition={{ duration: 0.35 }}
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
            >

                <img id='image' src={props.val.image} />

                <h4 class="moviename">{props.val.name}
                    <br />
                    <br />
                    {props.val.year}
                </h4>

            </motion.div>

            <div s className='rating'></div>
            <p>{props.val.score}</p>
        </motion.div>
    )
}
