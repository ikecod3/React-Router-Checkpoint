import { useState, useMemo, useEffect } from "react";
import CreateNewMovie from "../components/CreateNewMovie";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import { topPick } from "../topPick";
import Caro from "../components/carousel/Caro";
import { movies } from "../data";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Home = () => {
  const [myMovies, setMyMovies] = useState(movies);
  const [updateMemoizedMovies, setUpdateMemoizedMovies] = useState(0);
  const [loadingMovies, setLoadingMovies] = useState(true);

  // use effect to save notes to local storage every time a user addes a new movie
  useEffect(() => {
    const getMoviesFromLocalStorage = localStorage.getItem("movies");
    // disable the setItem to local storage from runing when the app loads the first time
    if (JSON.parse(getMoviesFromLocalStorage)?.length > myMovies.length) {
      return;
    }
    localStorage.setItem("movies", JSON.stringify(myMovies));
  }, [updateMemoizedMovies, myMovies]);
  // ----------------------------------------------------

  //useEffect
  useEffect(() => {
    // check if  stored movies exist in local storage
    if (JSON.parse(localStorage.getItem("movies")) !== null) {
      // if there are movies, set  mymovies state to the movies stored on the local storage
      setMyMovies(JSON.parse(localStorage.getItem("movies")));
    }

    // A setTimeout function is used to setTimeout for our spinner
    const timeOut = setTimeout(() => {
      // disable our loading spinner after 2 seconds (milliseconds)
      setLoadingMovies(false);
    }, 2000);

    // useEffect optional return function is used to clean up setTimeout
    return () => {
      clearTimeout(timeOut);
    };

    // --------------------------------------
  }, [loadingMovies]);
  // -------------- ----------------------------//

  //** memoization of myMovies using useMemo Hook
  const memoizedMovies = useMemo(() => {
    return {
      myMemoizedMovies: myMovies,
    };
  }, [myMovies]);

  // show a spinner for displaying loading state of the app
  if (loadingMovies) {
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
        <h3 className="mx-auto">Fetching movies...</h3>
      </div>
    );
  }

  return (
    <div className="relative max-w-fit">
      {/* carousel/image slider component */}
      <div className="hover:shadow-lg bg-stone-950">
        <Caro topPick={topPick} />
      </div>
      <div className="max-w-4xl mx-auto flex justify-between flex-col md:flex-row gap-4 py-8 px-3">
        {/* create a newmovie component */}
        <CreateNewMovie
          memoizedMovies={memoizedMovies}
          setMyMovies={setMyMovies}
          setUpdateMemoizedMovies={setUpdateMemoizedMovies}
        />
        {/* filter component */}
        <Filter setMyMovies={setMyMovies} memoizedMovies={memoizedMovies} />
      </div>

      {/* display search is empty IF search does not match any entry */}
      {myMovies.length === 0 ? (
        <div className="text-center py-24 text-4xl">
          Oops! search does not exit
        </div>
      ) : (
        // ELSE display the movies if a movie was found
        <MovieList myMovies={myMovies} />
      )}
    </div>
  );
};

export default Home;
