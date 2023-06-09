import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ LoginBtn }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/`);
  };
  return (
    <>
      <HeaderBox>
        <BoxBlock>
          <Logo onClick={goHome} src={logo} alt="로고"></Logo>
          <GenreBox>
            <GenreText>영화</GenreText>
            <GenreText>TV</GenreText>
            <GenreText>책</GenreText>
            <GenreText>웹툰</GenreText>
          </GenreBox>
        </BoxBlock>
        <BoxBlock>
          <Search
            type="text"
            placeholder="🔍  콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
          ></Search>
          <LoginButton onClick={LoginBtn}>로그인</LoginButton>
          <SignUpButton>회원가입</SignUpButton>
        </BoxBlock>
      </HeaderBox>
    </>
  );
};

export default Header;

const HeaderBox = styled.div`
  background-color: white;
  z-index: 2;
  position: fixed;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ebebeb;
`;

const BoxBlock = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 100%;
`;

const Logo = styled.img`
  width: 180px;
  height: 30px;
  margin-left: 60px;
  :hover {
    cursor: pointer;
  }
`;

const GenreBox = styled.div`
  display: flex;
  width: 180px;
  height: 40px;
  align-items: center;
  margin-left: 30px;
  justify-content: space-around;
`;

const GenreText = styled.div`
  font-weight: bold;
  font-size: 17px;
  color: #7e7e7e;
  :hover {
    cursor: pointer;
  }
`;

const Search = styled.input`
  width: 350px;
  height: 40px;
  border: none;
  background-color: #f5f5f7;

  ::placeholder {
    font-size: 17px;
    font-weight: 500;
  }
`;

const LoginButton = styled.button`
  border: none;
  font-weight: 700;
  background-color: white;
  width: 80px;
  height: 40px;
  color: #7b7b81;
  font-size: 15px;
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;

const SignUpButton = styled(LoginButton)`
  width: 100px;
  font-weight: bold;
  color: black;
  border-radius: 10px;
  font-size: 16px;
  border: 2px solid #dcdcdd;
`;
