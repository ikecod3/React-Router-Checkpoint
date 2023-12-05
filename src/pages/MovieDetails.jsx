/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data";
import MovieTrailer from "../components/MovieTrailer";
import { Button, Divider } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const MovieDetails = () => {
  const { trailerByMovieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  /** this function uses a find method to retrun the first matching entry to the users
   *  the result is updated to a setMovie variable and a traditional function return is executed
   *  */
  const findMovieById = () => {
    let isMovieFound = movies.find((item) => item.id === trailerByMovieId);
    setMovie(isMovieFound);
    return isMovieFound;
  };

  /**useEffect hooks is used to set a 2secs timeout for in the process returning result from findMovieById function
   * an optional return function is used to clear the 2secs timeout, an dependecies array was provided which means the effect will run once after the initial render
   *  */

  useEffect(() => {
    findMovieById();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  /** On default loading is truthy. while it is still truthy (2secs) display/return processing request wrapped in an HTML element */
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {/* spin component */}
        <Spin
          className="text-red-700"
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 40,
              }}
              spin
            />
          }
        />
        <h3 className="mx-auto">Processing request...</h3>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="mt-4 pr-8 grid justify-items-end">
        {/* wrapped an antd button with NavLink from react router dom 
        to act as navigation buttton */}
        <NavLink to="/">
          <Button
            // type="secondary"
            danger
            // onClick={handleClick}
            icon={<LeftOutlined />}
            style={{ margin: "auto" }}
          >
            Return to Home
          </Button>
        </NavLink>
      </div>
      {/* this div contain the trailer component and description you see */}
      <div className="my-8">
        <p
          className=" max-w-fit mx-8 text-lg sm:text-xl p-2"
          style={{ borderLeft: "10px solid red" }}
        >
          {movie.title} / Official Trailer
        </p>
        <div className="flex flex-col items-center justify-start my-2">
          <MovieTrailer trailerId={movie.trailer}></MovieTrailer>
          <Divider orientation="left">
            <strong>Description:</strong>
          </Divider>
          <p className="tracking-normal text-justify px-12 indent-8 ">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
