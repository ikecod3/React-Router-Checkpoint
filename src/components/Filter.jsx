/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Input, Select } from "antd";
import { useMemo } from "react";
const { Search } = Input;

const Filter = ({ memoizedMovies: { myMemoizedMovies }, setMyMovies }) => {
  // savedMovies holds a new useMemo hooks for myMemoizedmovies for filtering
  const savedMovies = useMemo(() => myMemoizedMovies, []);

  // console.log({ myMemoizedMovies, savedMovies });
  // filter movies by ratings
  const filterByRatings = (rate) => {
    // Use savedMovies to filter the list of movies
    let filteredMovies = savedMovies.filter(
      (item) => item.rating === Number(rate)
    );
    // Update the state with the filtered movies
    setMyMovies(filteredMovies);
    // console.log(filteredMovies);
  };

  // filter movies by Search
  const filterBySearch = (value) => {
    // Use savedMovies to get the list of movies
    let filteredMovies = savedMovies.filter((item) =>
      item.title.toLocaleLowerCase().includes(value.toLowerCase().trim())
    );
    // Update the state with the filtered movies
    setMyMovies(filteredMovies);
  };

  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {/* for searching for movie title on search input */}
      <Search
        placeholder="Search for movie..."
        enterButton
        style={{
          maxWidth: 300,
        }}
        allowClear
        onChange={(e) => filterBySearch(e.target.value)}
      />
      {/* for filtering movies by rate  through select button*/}
      <Select
        defaultValue="Filter by rate"
        style={{
          width: 150,
        }}
        onChange={(value) => filterByRatings(value)}
        options={[
          {
            value: "1",
            label: "⭐",
          },
          {
            value: "2",
            label: "⭐⭐",
          },
          {
            value: "3",
            label: "⭐⭐⭐",
          },
          {
            value: "4",
            label: "⭐⭐⭐⭐",
          },
          {
            value: "5",
            label: "⭐⭐⭐⭐⭐",
          },
        ]}
      />
    </div>
  );
};

export default Filter;
