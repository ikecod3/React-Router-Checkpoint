/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

/** use a map method on JSON array and dispaly each item on a predesigned movieCard using each id as the key.
 *  */
const MovieList = ({ myMovies }) => {
  return (
    <div className="max-w-6xl mx-auto px-8 ">
      <div className="grid sm:flex-col md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 place-content-center mx-8 place-items-stretch anchor-decoration-removal ">
        {myMovies.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
