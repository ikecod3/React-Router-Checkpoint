import { Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    /** a simple routing layout: Home component is the entry/first/landing/home page
     * or whatever you call it.
     * MovieDetails component renders a movie trailer using a matching Movieid from useParams()
     *  */
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:trailerByMovieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
