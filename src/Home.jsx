import React, { useEffect, useState } from 'react'
import moviesData from './Components/data'
import { FaStar } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';


const Home = () => {
    const [movies , setMovies] = useState([])

    useEffect(()=>{
        if(movies.length>0){
         localStorage.setItem('moviesData' ,JSON.stringify(movies))
        }
        
    },[movies])
    
    useEffect(()=>{
        const storedMovies= localStorage.getItem('moviesData')

        if(storedMovies && JSON.parse(storedMovies).length>0){
            setMovies(JSON.parse(storedMovies))
        }else{
            setMovies(moviesData)
        }
    },[])
  return (
    <>
    <div>
      <h1 className="text-center mb-5 " style={{ fontWeight:"bold", color:"yellow", fontSize:"50px" }}>Movies List </h1><hr className='text-danger h-10'></hr>
       
       <div className = "row">{ 
       movies.map((m)=>(
        <div className='container' key={m.id}>
            <div className='col mb-2 d-flex '
            style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
                margin :"20px",
                background:"black",
                 color:"red",
                 padding:"10px",
                 }} >
         
          <div className='col-mb-2'><Link to={`/Home/${m.id}`} className='text-danger m-3' style={{fontSize :"25px"}}>{m.title} </Link></div>
          <div style={{marginLeft:"70%"}}> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
           </div>
          </div>
          
           ))}
        </div>
        <div className='text-center'>
            <Link to={'/AddMovies'} className="btn btn-outline-info rounded-pill px-4">Add Movies </Link>
            <Outlet/>
        </div>
     </div>
      </>
  )
}

export default Home
