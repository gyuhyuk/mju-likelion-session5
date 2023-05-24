import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const More = () => {
  const { id } = useParams();
  const [MoreList, setMoreList] = useState([]);

  const getDetails = () =>
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      })
      .then((json) => {
        setMoreList(json.data);
      });

  useEffect(() => {
    getDetails();
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Section>
        <FirstBox>
          <Back
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTYuNzU1IDExLjk4OGw0Ljk1OCA0Ljk1OGEuOTguOTggMCAxIDEtMS4zODcgMS4zODdMNCAxMi4wMDdsLjAwNS0uMDA1TDQgMTEuOTk3bDYuMzQzLTYuMzQzYS45Ny45NyAwIDEgMSAxLjM3MyAxLjM3M2wtNC45NjEgNC45NnoiLz4KICAgICAgICA8cGF0aCBkPSJNNiAxMWgxM2ExIDEgMCAwIDEgMCAySDZ2LTJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
            onClick={goBack}
            alt="뒤로가기"
          ></Back>
          <BasicInfo>기본 정보</BasicInfo>
        </FirstBox>
        <SecondBox>
          <InfoBox>
            <InfoText>
              <Korean>원제</Korean>
              {MoreList.original_title}
            </InfoText>
            <InfoText>
              <Korean>제작 연도</Korean>
              {MoreList.release_date}
            </InfoText>
            <InfoText>
              <Korean>국가</Korean>
              {MoreList.production_countries &&
                MoreList.production_countries
                  .map((item) => item.name)
                  .join(" / ")}
            </InfoText>
            <InfoText>
              <Korean>장르</Korean>
              {MoreList.genres
                ? MoreList.genres.map((genre) => genre.name).join(" / ")
                : "Loading..."}
            </InfoText>
            <InfoText>
              <Korean>상영시간</Korean>
              {`${MoreList.runtime}분`}
            </InfoText>
            <InfoText>
              <Korean>연령 등급</Korean>
              {MoreList.adult ? "청소년 관람불가" : "청소년 관람가능"}
            </InfoText>
            <Content>
              <ContentKor>내용</ContentKor>
              {`${MoreList.overview} 
              ${MoreList.tagline}`}
            </Content>
          </InfoBox>
        </SecondBox>
      </Section>
    </>
  );
};
const Section = styled.div`
  display: flex;
  width: 100vw;
  height: 800px;
  overflow-x: hidden;
  flex-direction: column;
`;

const FirstBox = styled.div`
  margin-top: 70px;
  border-bottom: 1px solid #e3e3e3;
  width: 100vw;
  height: 100px;
`;

const Back = styled.img`
  margin-top: 10px;
  height: 30px;
  margin-bottom: 15px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const BasicInfo = styled.div`
  width: 100vw;
  height: 30px;
  margin-left: 7px;
  font-size: 25px;
  font-weight: 900;
  margin-left: 15px;
`;

const SecondBox = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoBox = styled.div`
  width: 800px;
  height: 600px;
`;

const InfoText = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 70px;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
`;

const Content = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  line-height: 1.5;
`;

const Korean = styled.div`
  width: 250px;
  height: 100%;
  line-height: 70px;
  color: #797979;
`;

const ContentKor = styled.div`
  width: 250px;
  height: 50px;
  line-height: 50px;
  color: #797979;
`;

export default More;
