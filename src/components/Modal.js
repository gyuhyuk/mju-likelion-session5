import logo from "../assets/image/icon_logo.png";
import kakao from "../assets/image/icon_kakao.png";
import google from "../assets/image/icon_google.png";
import twitter from "../assets/image/icon_twitter.png";
import apple from "../assets/image/icon_apple.png";
import line from "../assets/image/icon_line.png";
import styled from "styled-components";

const Modal = ({ click }) => {
  return (
    <BackGround>
      <Box>
        <ExitButton onClick={() => click(false)}>X</ExitButton>
        <Logo src={logo} alt="로고" />
        <Login>로그인</Login>
        <Email type="text" placeholder=" 이메일"></Email>
        <Email type="password" placeholder=" 비밀번호"></Email>
        <LoginButton>로그인</LoginButton>
        <Forget>비밀번호를 잊어버리셨나요?</Forget>
        <AccountBox>
          계정이 없으신가요?
          <SignupButton>회원가입</SignupButton>
        </AccountBox>
        <HorizonLineBox>
          <HorizonLine></HorizonLine>
          <HorizonText>OR</HorizonText>
          <HorizonLine></HorizonLine>
        </HorizonLineBox>
        <LinkBox>
          <LinkImg src={kakao} alt="카톡" />
          <LinkImg src={google} alt="구글" />
          <LinkImg src={twitter} alt="트위터" />
          <LinkImg src={apple} alt="애플" />
          <LinkImg src={line} alt="라인" />
        </LinkBox>
        <Tip>
          TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
        </Tip>
      </Box>
    </BackGround>
  );
};

export default Modal;

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Box = styled.div`
  margin: auto;
  display: flex;
  width: 420px;
  height: 700px;
  background-color: white;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`;

const ExitButton = styled.button`
  display: flex;
  align-self: flex-end;
  margin: 10px 15px 0 0;
  border: none;
  background-color: white;
  font-size: 25px;
`;

const Logo = styled.img`
  height: 40px;
  width: 220px;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const Login = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 800;
`;

const Email = styled.input`
  width: 370px;
  height: 50px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  ::placeholder {
    font-size: 17px;
    font-weight: 600;
  }
`;

const LoginButton = styled.button`
  width: 370px;
  height: 50px;
  background-color: #ff2f6e;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 17px;
  font-weight: 750;
`;

const AccountBox = styled.div`
  margin-bottom: 30px;
  color: #8c8c8c;
  font-size: 17px;
  font-weight: 600;
`;

const Forget = styled.button`
  border: none;
  color: #ff2f6e;
  background-color: white;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const SignupButton = styled.button`
  background-color: white;
  color: #ff2f6e;
  border: none;
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
`;

const HorizonLineBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
`;

const HorizonLine = styled.hr`
  height: 1px;
  width: 150px;
  color: #a2a2a2;
`;

const HorizonText = styled.div`
  margin: 0 10px 0 10px;
  color: #a2a2a2;
  font-weight: 600;
`;

const LinkBox = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const LinkImg = styled.img`
  margin-right: 20px;
  width: 50px;
  height: 50px;
`;

const Tip = styled.div`
  height: 80px;
  width: 350px;
  background-color: #f5f5f5;
  color: #8d8d8d;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
`;
