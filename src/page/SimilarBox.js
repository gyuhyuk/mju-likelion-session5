import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SimilarBox = ({ item, rank }) => {
  const navigate = useNavigate();
  const goSimilar = () => {
    navigate(`/details/${item.id}/${rank}`);
  };

  return (
    <>
      <SimilarWrapper>
        <SimilarContainer>
          <SimilarImg
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="추천작사진"
            onClick={goSimilar}
          />
          <div>
            <SimilarTitle>
              {item.title.length > 13
                ? `${item.title.slice(0, 12)}...`
                : item.title}
            </SimilarTitle>
            <SimilarAverage>평균 ★ {item.vote_average}</SimilarAverage>
          </div>
        </SimilarContainer>
      </SimilarWrapper>
    </>
  );
};

export default SimilarBox;

const SimilarWrapper = styled.div`
  display: flex;
`;
const SimilarContainer = styled.div`
  width: 160px;
  height: 280px;
  margin-right: 10px;
`;

const SimilarImg = styled.img`
  width: 160px;
  height: 220px;
  border-radius: 7px;
`;
const SimilarTitle = styled.div`
  font-weight: 800;
`;

const SimilarAverage = styled.div`
  color: #787878;
`;
