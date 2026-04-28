import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddMovies = () => {
    const[title, setTitle] = useState()
    const[rating ,setRating] = useState()
    const[description, setDescription] = useState()
    
    const navigate = useNavigate()

    const handleMovies=(e)=>{
         e.preventDefault()
         const newMovies ={
          id :Date.now(),
          title : title,
          rating: rating, 
          description :description
         }
         const OldMovies = JSON.parse(localStorage.getItem("moviesData")||[])

         const updatedMovies=[...OldMovies,newMovies]

         localStorage.setItem("moviesData" ,JSON.stringify(updatedMovies))
         navigate("/")

    }
   return (
    <div className="box p-5 bg-dark h-100vh">
        <Link to={"/"} className="btn btn-outline-primary rounded-pill px-4">
          Go Back
        </Link>

        <div
          className="container h-100 w-75 p-5 mt-5 "
          style={{ border: "1px solid black", backgroundColor: "white" }}
        >
          <h2 className="text-center text-warning">Add New Movies</h2>
      
        <form onSubmit={handleMovies}>
          <div className="  mb-3">
            <b>
              {" "}
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
              </label>
            </b>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <b><label htmlFor="exampleFormControlInput1" className="form-label">
              Rating
            </label></b>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e)=>setRating(e.target.value)}
            />
          </div>
          <div className="mb-3">
           <b> <label htmlFor="exampleFormControlTextarea1" className="form-label ">
              Description
            </label></b>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary m-3"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMovies;
