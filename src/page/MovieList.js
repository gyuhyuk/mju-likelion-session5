import Movie from "./Movie";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [List, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      })
      .then((json) => {
        setList(json.data.results);
      });
  }, []);

  return (
    <AllMovie>
      <MovieWrapper>
        {List.map((movie, index) => (
          <Movie movie={movie} rank={index} movie_id={movie.id} />
        ))}
      </MovieWrapper>
    </AllMovie>
  );
};

export default MovieList;

const AllMovie = styled.div`
  display: flex;
  width: 1500px;
  height: 600px;
`;

const MovieWrapper = styled.div`
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
