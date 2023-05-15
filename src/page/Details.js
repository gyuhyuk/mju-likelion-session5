import { useParams, useNavigate } from "react-router-dom";
import { DATA } from "../assets/Data";
import styled from "styled-components";
import Header from "./Header";
import { FiStar } from "react-icons/fi";

const Details = ({ click }) => {
  const { rank } = useParams();
  const MovieDetail = DATA.filter((item) => item.rank === Number(rank))[0];

  const navi = useNavigate();

  const goMore = () => {
    navi(`/details/${MovieDetail.rank}/More/${MovieDetail.rank}`);
  };
  return (
    <>
      <Header LoginBtn={click}></Header>
      <Section>
        <Back>
          <BackImageLeft left={MovieDetail.left}></BackImageLeft>
          <BackImage backimg={MovieDetail.backimg}>
            <BackImageLeftSmall
              leftsmall={MovieDetail.leftsmall}
            ></BackImageLeftSmall>
            <BackImageRightSmall
              rightsmall={MovieDetail.rightsmall}
            ></BackImageRightSmall>
          </BackImage>

          <BackImageRight right={MovieDetail.right}></BackImageRight>
          <All all={MovieDetail.all}></All>
        </Back>
        <DetailSection>
          <DetailWrapper>
            <MovieImage src={MovieDetail.img} />
            <DetailTextBox>
              <DetailRank>
                {`예매순위 ${MovieDetail.rank}위(${MovieDetail.percent})`}{" "}
                {MovieDetail.audience === ""
                  ? null
                  : MovieDetail.audience > 10000
                  ? `누적 관객 ${MovieDetail.audience / 10000}만명`
                  : `누적 관객 ${MovieDetail.audience}명`}
              </DetailRank>
              <DetailTitle>{MovieDetail.title}</DetailTitle>
              <DetailYear>
                {MovieDetail.year} · {MovieDetail.genre} · {MovieDetail.country}
              </DetailYear>
              <LineBox>{MovieDetail.average === "" ? null : <Line />}</LineBox>
              <DetailScore>
                {MovieDetail.average === ""
                  ? null
                  : `평균 ★${MovieDetail.average}`}
              </DetailScore>
              <LineBox>{MovieDetail.average === "" ? null : <Line />}</LineBox>
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
                {MovieDetail.originalTitle}
              </SecondOriginalTitle>
              <SecondYear>
                {MovieDetail.year} · {MovieDetail.country} · {MovieDetail.genre}{" "}
              </SecondYear>
              <SecondRunningTime>
                {MovieDetail.runningTime} · {MovieDetail.age}
              </SecondRunningTime>
              <SecondDescription>
                {MovieDetail.description.length < 145
                  ? MovieDetail.description
                  : `${MovieDetail.description.slice(0, 145)}...`}
              </SecondDescription>
            </SecondInfo>
          </SecondDetail>
        </SecondDetailWrapper>
      </Section>
    </>
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

const BackImage = styled.div`
  position: relative;
  top: auto;
  left: auto;
  margin-top: 70px;
  width: 900px;
  height: 400px;
  background-size: cover;
  background-image: url(${(props) => props.backimg});
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

const LineBox = styled.div``;

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
  height: 300px;
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
`;

const Back = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: black;
  position: relative;
`;

const BackImageLeft = styled.div`
  width: 350px;
  height: 100%;
  background: ${(props) => props.left};
`;

const BackImageRight = styled.div`
  width: 350px;
  height: 100%;
  background: ${(props) => props.right};
`;

const BackImageLeftSmall = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: ${(props) => props.leftsmall};
`;

const BackImageRightSmall = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: ${(props) => props.rightsmall};
`;

const All = styled.div`
  position: absolute;
  width: 100vw;
  background-image: ${(props) => props.all};
  height: 100%;
`;
