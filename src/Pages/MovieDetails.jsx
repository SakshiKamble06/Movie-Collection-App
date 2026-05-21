import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import moviesData from "../data";

const MovieDetails = () => {

  const { moviesID } = useParams();

  const Movie = moviesData.find((m) => m.id == moviesID);

  if (!Movie) {
    return (
      <h3 className="text-center mt-5 text-danger">
        Movie details not found
      </h3>
    );
  }

  return (
    <div className="container-fluid bg-dark vh-100 d-flex justify-content-center align-items-center">

      <div className="card" style={{ width: "18rem" }}>

        <img
          src={Movie.image}
          className="card-img-top"
          alt={Movie.title}
        />

        <div className="card-body">

          <h5 className="card-title">
            {Movie.title}
          </h5>

          <p className="card-text">
            {Movie.description}
          </p>

          <div className="mb-3">
            <span style={{ color: "#38bdf8" }}>
              Rating:
            </span>{" "}

            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color={i < Movie.rating ? "#facc15" : "#555"}
              />
            ))}
          </div>

        </div>

      </div>

      <Outlet />

    </div>
  );
};

export default MovieDetails;