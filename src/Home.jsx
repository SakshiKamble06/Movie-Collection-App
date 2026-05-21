import moviesData from './data.js';
import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {

  const [movies, setMovies] = useState([]);

  // save to localStorage
  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem('moviesData', JSON.stringify(movies));
    }
  }, [movies]);

  // load from localStorage
  useEffect(() => {
    const storedMovies = localStorage.getItem('moviesData');

    if (storedMovies && JSON.parse(storedMovies).length > 0) {
      setMovies(JSON.parse(storedMovies));
    } else {
      setMovies(moviesData);
    }
  }, []);

  return (
    <div style={{ background: "#f4f4f4", minHeight: "100vh", paddingTop: "40px" }}>
      
      <div className="container">

        <h1 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          Movie List
        </h1>

    
        <div className="list-group">

          {movies.map((p) => (
            <div 
              key={p.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{
                background: "#111",
                color: "red",
                borderBottom: "1px solid #444"
              }}
            >
              
              {/* Movie Title */}
              <Link 
                to={`/Home/${p.id}`} 
                style={{ textDecoration: "none", color: "red", fontWeight: "500" }}
              >
                {p.title}
              </Link>

              
              <div>
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    color={i < p.rating ? "yellow" : "gray"} 
                  />
                ))}
              </div>

            </div>
          ))}

        </div>

       
        <div className="text-center mt-4">
          <Link
            to={"/AddMovies"} 
            className="btn btn-warning px-4"
          >
            Add New Movie
          </Link>
        </div>
      <Outlet/>
      </div>
    </div>
  )
}

export default Home