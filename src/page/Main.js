import styled from "styled-components";
import Header from "./Header";
import MovieList from "./MovieList";

const Main = ({ click }) => {
  return (
    <>
      <Header LoginBtn={click}></Header>
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
  margin-bottom: 10px;
`;

const BoxOffice = styled.div`
  width: 1500px;
  height: 600px;
`;
