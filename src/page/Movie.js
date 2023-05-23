import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, rank, movie_id }) => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate(`/details/${movie_id}/${rank}`);
  };
  console.log(rank);
  return (
    <>
      <MovieBox onClick={goDetails}>
        <MovieImageBox>
          <MovieRankButton>{rank + 1}</MovieRankButton>
          <MovieImage
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          ></MovieImage>
        </MovieImageBox>
        <MovieText>
          <MovieTitle>
            {movie.title.length < 25
              ? movie.title
              : `${movie.title.slice(0, 19)}...`}
          </MovieTitle>
          <MovieYear>{movie.release_date}</MovieYear>
          <MovieScore>
            {movie.average === "" ? null : `평균★${movie.vote_average}`}
          </MovieScore>
          <MovieAudience>인기도 {movie.popularity}</MovieAudience>
        </MovieText>
      </MovieBox>
    </>
  );
};

export default Movie;

const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

const MovieImage = styled.img`
  width: 290px;
  height: 400px;
  border-radius: 10px;
  border: 2px solid #eae9e8;
`;

const MovieText = styled.div`
  margin-top: 10px;
`;

const MovieTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 9px;
`;

const MovieYear = styled.div`
  color: #292a32;
  font-weight: 500;
`;

const MovieScore = styled.div`
  margin: 7px 0;
  color: #545765;
`;

const MovieAudience = styled.div`
  color: #838388;
`;

const MovieImageBox = styled.div`
  position: relative;
  z-index: -1;
`;

const MovieRankButton = styled.button`
  width: 30px;
  height: 30px;
  position: relative;
  top: 40px;
  left: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 17px;
  font-weight: 900;
`;
