import React, { useState } from 'react'
import TopMovies from '../components/TopMovies';
import Movie from '../components/Movie';
import '../style/home.css';
import Logo from '../op37.svg'
import motion from "framer-motion"
import { useNavigate } from 'react-router-dom'
export default function Home(props) {
    const nav = useNavigate()
    const [inp, setInp] = useState(String)
    const [select, setSelect] = useState('1')
    const filteredMovies = () => {
        let fmovies = props.movies.filter((val) => {
            let namel = (val.name).toLowerCase()
            return namel.includes(inp)
        }
        )
        let newArr=[]
        fmovies.forEach((val) => {
            newArr.push(val.year);
        })
        if (select == '1') {
            newArr.sort((b, a) => {
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                else {
                    return 0;
                }
            })

        }
        if (select == '2') {
            newArr.sort((a, b) => {
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                else {
                    return 0;
                }
            })

        }

        let newmovies = [...fmovies]
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newmovies.length; j++) {
                if (newmovies[j].year == newArr[i]) {
                    newArr[i] = newmovies[j]
                    newmovies.splice(j, 1)
                    break
                }
            }
        }
        return newArr.map((val, index) => {
            return <Movie val={val} index={index} />
        })
    }


    const topthree = () => {
        let newArr = [];
        props.movies.forEach((val) => {
            newArr.push(val.score);
        })

        newArr.sort((b, a) => {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            else {
                return 0;
            }
        })

        newArr = [newArr[0], newArr[1], newArr[2]]
        let newmovies = [...props.movies]
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newmovies.length; j++) {
                if (newmovies[j].score == newArr[i]) {
                    newArr[i] = newmovies[j]
                    newmovies.splice(j, 1)
                    break
                }
            }
        }

        return newArr.map((val, index) => {
            return <TopMovies val={val} index={index} />
        })
    }


    // const sortByYear = () => {
    //     let newArr = [];
    //     props.movies.forEach((val) => {
    //         newArr.push(val.score);
    //     })

    //     newArr.sort((b, a) => {
    //         if (a > b)
    //             return 1;
    //         if (a < b)
    //             return -1;
    //         else {
    //             return 0;
    //         }
    //     })

        // newArr = [newArr[0], newArr[1], newArr[2]]
        // let newmovies = [...props.movies]
        // for (let i = 0; i < newArr.length; i++) {
        //     for (let j = 0; j < newmovies.length; j++) {
        //         if (newmovies[j].score == newArr[i]) {
        //             newArr[i] = newmovies[j]
        //             newmovies.splice(j, 1)
        //             break
        //         }
        //     }
        // }



  

    return (
        <div className='home' >
            <button onClick={() => { nav('/addmovie') }} id='btnadd'>Add movie</button>
            <input type="text" id='inps' onChange={(e) => { setInp(e.target.value) }} placeholder='search' />
            <select onChange={(e) => { setSelect(e.target.value) }} name="" id="select">
                <option value="1">new to old</option>
                <option value="2">old to new</option>
            </select>
            <h1>top 3</h1>
            <div id='top'>
                {topthree()}
            </div>
            <div className='movies' >
                {filteredMovies()}
            </div>

        </div>
    )
}
