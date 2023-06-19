import styled from "styled-components";
import MovieList from "./MovieList";
import { MovieAtom } from "../atom/MovieAtom";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Main = () => {
  const [similar, setSimilar] = useRecoilState(MovieAtom);

  const getSimilar = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((json) => {
        setSimilar(json.data.results);
      });
  };

  useEffect(() => {
    getSimilar();
  }, []);

  return (
    <>
      <Section>
        <BoxOffice>
          <RankText>박스오피스 순위</RankText>
          <MovieList />
        </BoxOffice>
      </Section>
    </>
  );
};

export default Main;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const RankText = styled.div`
  width: 1200px;
  height: 80px;
  display: flex;
  align-items: end;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: -15px;
`;

const BoxOffice = styled.div`
  margin-top: 60px;
  width: 1500px;
  height: 600px;
`;
