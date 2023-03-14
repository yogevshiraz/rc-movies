import Logo from './logorc.svg'
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AddMovie from './components/AddMovie';
import InsideMovie from './components/InsideMovie';

function App() {

  class Movies {
    rating = [];
    score = 0
    constructor(name, desc, image, year) {
      this.desc = desc;
      this.name = name;
      this.image = image;
      this.year = year
    }

  }
  const [flag, setflag] = useState(false)
  const [movies, setMoives] = useState([
    { desc: "", image: "https://images.moviesanywhere.com/c0c119471c2205238f826bbff61c2a50/ad03653e-70a3-4383-b5ee-43565d53dfc4.jpg", name: "Kung Fu Panda", rating: [5], score: 5, year: 2008 },
    { desc: "", image: "https://resizing.flixster.com/3H1wd8t5QbQYxHj2IouUji6Ei9M=/206x305/v2/https://flxt.tmsimg.com/assets/p3575546_p_v8_ap.jpg", name: "Kung Fu Panda 2", rating: [3], score: 3, year: 2011 },
    { desc: "", image: "https://upload.wikimedia.org/wikipedia/en/e/e6/Kung_Fu_Panda_3_poster.jpg", name: "Kung Fu Panda 3", rating: [4], score: 4, year: 2016 },
    { desc: "", image: " https://flxt.tmsimg.com/assets/p11016518_p_v8_as.jpg", name: "John wick", rating: [4], score: 4, year: 2014 },
    { desc: "", image: "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg", name: "John wick 2", rating: [5], score: 5, year: 2017 },
    { desc: "", image: "https://musicart.xboxlive.com/7/df1a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080", name: "John wick 3", rating: [5], score: 5, year: 2019 },
    { desc: "", image: "https://www.edb.co.il/photos/175092023_poster02.full.jpg", name: "John wick 4", rating: [], score: 0, year: 2023 },
    { desc: "", image: "  https://www.themoviedb.org/t/p/w500/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg", name: "Kingsaman", rating: [5], score: 5, year: 2014 },
    { desc: "", image: "https://images.moviesanywhere.com/05afa9ca1a1e4a8d1ebc1cd5d6b7cd14/0cf21627-51fa-4e99-9abc-666e2b68874c.jpg", name: "Kingsaman 2", rating: [5], score: 5, year: 2017 },
    { desc: "", image: "https://upload.wikimedia.org/wikipedia/en/6/67/The_King%27s_Man.jpg", name: "Kingsaman 3", rating: [], score: 0, year: 2021 },
  ])




  // useEffect(()=>{

  //   fetch('/getData').then((res)=>{
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     console.log(data) 
  //     setMoives(data)
  //   })
  //   console.log(movies)    },[flag])


  const addMovie = (name, desc, image, year) => {
    let newMovie = new Movies(name, desc, image, year)
    setMoives([ ...movies,newMovie])




    // // settasks([temp,...tasks])
    // fetch('/addTask',{
    //   headers:{ 
    //      'Accept': 'application/json',
    //   'Content-Type': 'application/json'},
    //   method:'post',
    //   body:JSON.stringify({task:newMovie})
    // }).then((res)=>{
    //   return res.json()
    // }).then((data)=>{
    // setflag(!flag)
    // })
  }




  // const addMovie = (name, desc, image, year) => {
  //   let newMovie = new Movies(name, desc, image, year)
  //   setMoives([...movies, newMovie])
  //   setflag(!flag)
  // }


  const addRate = (index, rate) => {
    let avg = 0
    movies[index].rating.push(rate)
    for (let i = 0; i < movies[index].rating.length; i++) {
      avg += movies[index].rating[i]
    }
    avg = avg / movies[index].rating.length
    if (avg % 0.5 == 0) {
      movies[index].score = avg
    }
    else {
      movies[index].score = Math.round(avg)
    }
  }

  console.log(movies)
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home movies={movies} />} />
          <Route path='/addmovie' element={<AddMovie add={addMovie} />} />
          {movies.map((val, index) => {
            return <Route path={'/movie-' + val.name} element={<InsideMovie val={val} addr={addRate} index={index} />} />
          })}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
