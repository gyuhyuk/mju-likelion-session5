import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Details = () => {
  const { id } = useParams();
  const { rank } = useParams();
  const [detailList, setDetailList] = useState([]);
  const getMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      })
      .then((json) => {
        console.log(json.data);
        setDetailList(json.data);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const navi = useNavigate();

  const goMore = () => {
    navi(`/details/${id}/More`);
  };
  return (
    <Section>
      <Back>
        <BackImage
          src={"https://image.tmdb.org/t/p/w500" + detailList.backdrop_path}
        ></BackImage>
      </Back>
      <DetailSection>
        <DetailWrapper>
          <MovieImage
            src={"https://image.tmdb.org/t/p/w500" + detailList.poster_path}
          />
          <DetailTextBox>
            <DetailRank>{`예매순위 ${Number(rank) + 1}위`}</DetailRank>
            <DetailTitle>{detailList.title}</DetailTitle>
            <DetailYear>{detailList.release_date}</DetailYear>
            <div>{detailList.vote_average === "" ? null : <Line />}</div>
            <DetailScore>
              {detailList.vote_average &&
                `평균 ★${detailList.vote_average} (${detailList.vote_count}명)`}
            </DetailScore>
            <div>{detailList.average === "" ? null : <Line />}</div>
            <DetailRatingWrapper>
              <DetailRatingBox>
                <DetailRatingText>평가하기</DetailRatingText>
                <StarBox>
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                </StarBox>
              </DetailRatingBox>
              <ColumnLine></ColumnLine>
              <DetailExtraBox>
                <DetailExtraButtonBox>
                  <DetailExtra>✚ 보고싶어요</DetailExtra>
                  <DetailExtra>🖊️ 코멘트</DetailExtra>
                  <DetailExtra>👁️ 보는중</DetailExtra>
                  <DetailExtra>・・・ 더보기</DetailExtra>
                </DetailExtraButtonBox>
              </DetailExtraBox>
            </DetailRatingWrapper>
          </DetailTextBox>
        </DetailWrapper>
      </DetailSection>
      <SecondDetailWrapper>
        <SecondDetail>
          <SecondTitle>
            <BasicInfo>기본정보</BasicInfo>
            <More onClick={goMore}>더보기</More>
          </SecondTitle>
          <SecondInfo>
            <SecondOriginalTitle>
              {detailList.original_title}
            </SecondOriginalTitle>
            <SecondYear>
              {detailList.release_date && detailList.release_date.slice(0, 4)} ·{" "}
              {detailList.original_language} ·{" "}
              {detailList.genres
                ? detailList.genres.map((genre) => genre.name).join("/")
                : "Loading..."}
            </SecondYear>
            <SecondRunningTime>
              {detailList.runtime}분 ·
              {detailList.adult ? "청소년관람불가" : "청소년 관람가능"}
            </SecondRunningTime>
            <SecondDescription>
              {detailList.overview
                ? `${detailList.overview.slice(0, 145)}...`
                : "Loading..."}
            </SecondDescription>
          </SecondInfo>
        </SecondDetail>
      </SecondDetailWrapper>
    </Section>
  );
};

export default Details;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 1200px;
  align-items: center;
`;

const BackImage = styled.img`
  position: relative;
  top: auto;
  left: auto;
  margin-top: 70px;
  width: 900px;
  height: 400px;
  background-size: cover;
`;

const DetailSection = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailWrapper = styled.div`
  display: flex;
  width: 1100px;
  position: relative;
  bottom: 30px;
`;

const MovieImage = styled.img`
  width: 180px;
  height: 280px;
  border: 2px solid white;
  border-radius: 5px;
  margin-right: 25px;
`;

const DetailTextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailRank = styled.div`
  margin-bottom: 20px;
  color: white;
`;

const DetailTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
`;

const DetailYear = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #7f7f7f;
`;

const Line = styled.hr`
  height: 1px;
  width: 800px;
  color: #ededed;
`;
const DetailScore = styled.div`
  font-size: 20px;
  margin: 10px 0;
  color: #282828;
`;

const DetailRatingWrapper = styled.div`
  display: flex;
`;

const DetailRatingText = styled.div`
  width: 300px;
  font-size: 15px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
  color: #7b7b7b;
`;

const ColumnLine = styled.div`
  margin-top: 40px;
  width: 3px;
  height: 80px;
  border-right: 2px solid #ededed;
`;

const DetailExtraBox = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 100px;
  margin-top: 20px;
  margin-left: 20px;
`;

const DetailRatingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DetailExtra = styled.button`
  margin-right: 20px;
  font-size: 18px;
  width: 100px;
  height: 50px;
  border: none;
  background-color: white;
  justify-content: center;
  color: #292a32;
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.2);
  }
`;

const DetailExtraButtonBox = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

const StarBox = styled.div`
  svg {
    color: #aaa;
    font-size: 50px;
    margin-right: 1px;
  }
  &:hover {
    cursor: pointer;
    transition: 1s ease-in-out;
    transform: scale(1.1);
  }
`;

const SecondDetailWrapper = styled.div`
  width: 100vw;
  height: 450px;
  border-top: 1.5px solid #e3e3e3;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
`;

const SecondDetail = styled.div`
  margin: 30px 380px 0 0;
  width: 750px;
  height: 400px;
  border: 2px solid #e3e3e3;
  border-radius: 10px;
  background-color: white;
`;

const SecondTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BasicInfo = styled.div`
  font-size: 23px;
  font-weight: 800;
  margin-left: 15px;
`;

const More = styled.button`
  width: 50px;
  height: 20px;
  border: none;
  background-color: white;
  color: #ff2f6e;
  font-size: 18px;
  font-weight: 600;
  margin-right: 15px;
`;

const SecondInfo = styled.div`
  margin-left: 15px;
  font-weight: 600;
  color: #4d4d4d;
`;

const SecondOriginalTitle = styled.div`
  margin-bottom: 8px;
`;

const SecondYear = styled.div`
  margin-bottom: 8px;
`;

const SecondRunningTime = styled.div`
  margin-bottom: 15px;
`;

const SecondDescription = styled.div`
  line-height: 1.7;
  margin-right: 10px;
`;

const Back = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  border-bottom: 1px solid black;
`;
