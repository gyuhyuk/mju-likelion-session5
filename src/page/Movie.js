import styled from "styled-components";

const Movie = (props) => {
  const { movie } = props;

  return (
    <>
      <MovieBox>
        <MovieImage src={movie.img}></MovieImage>
        <MovieText>
          <MovieTitle>
            {movie.title.length < 25
              ? movie.title
              : `${movie.title.slice(0, 19)}...`}
          </MovieTitle>
          <MovieYear>
            {movie.year} · {movie.country}
          </MovieYear>
          <MovieScore>
            {movie.average === "" ? null : `평균★${movie.average}`}
          </MovieScore>
          <MovieAudience>
            예매율 {movie.percent}
            {movie.audience === ""
              ? null
              : movie.audience > 10000
              ? `· 누적 관객 ${movie.audience / 10000}만 명`
              : `· 누적 관객 ${movie.audience}명`}
          </MovieAudience>
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
