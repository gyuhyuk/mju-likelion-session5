import Movie from "./Movie";
import { DATA } from "../assets/Data";
import styled from "styled-components";

const MovieList = () => {
  return (
    <AllMovie>
      <MovieWrapper>
        {DATA.map((movie, index) => (
          <Movie movie={movie} key={index} />
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
