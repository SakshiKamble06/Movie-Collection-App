import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import moviesData from "../Components/data";

const MovieDetails = () => {
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const { moviesID } = useParams();

  const Movie = moviesData.find((m) => m.id == moviesID);
  console.log(Movie);

  if (!Movie) {
    return (
      <h3 className="text-center mt-5 text-danger">
        Movies details not found{" "}
      </h3>
    );
  }
  return (
    <div className="container-fluid bg-dark">
      <div className="card" style={{width:"16rem", marginLeft:"40%"}}>
        <img src={Movie.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title ">{Movie.title}</h5>
          <p className="card-text">{Movie.description}</p>
          <h5 className="card-text">Rating : {Movie.rating}</h5>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default MovieDetails;
