import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddMovies from './Pages/AddMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MovieDetails from './Pages/MovieDetails';

const App = () => {
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />}></Route>
        
       <Route path="/Home/:moviesID" element={<MovieDetails />} />
        
       <Route path='/AddMovies' element ={<AddMovies />}></Route>
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
