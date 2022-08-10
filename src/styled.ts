import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
  }
`;

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: 700px), (max-height: 500px) {
    height: calc(var(--vh, 1vh) * 100);
  }
  background: #f8f8f8;
`;

export const Button = styled.button`
  transition: all 250ms ease 0s;

  :hover {
    cursor: pointer;
  }
`;

export const NotFoundContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const NotFoundText = styled.p`
  font-size: 20px;
`;

export const NotFoundCode = styled.p`
  font-size: 100px;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const LoginForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 20px;
  padding: 40px 30px;
  margin: 10px;
  background: linear-gradient(#2e3a6a, #2f0b45);
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
`;

export const LoginHeader = styled.header`
  font-size: 20px;
  margin-left: 20px;
`;

export const LoginContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const LoginNavigationButton = styled(Button)<{ active?: boolean }>`
  border: none;
  background: none;
  text-transform: uppercase;
  padding: 0 0 5px;
  margin-right: 20px;
  color: white;
  opacity: ${props => props.active ? "1" : "0.5"};
  border-bottom: 2px solid ${props => props.active ? "#eec111" : "rgba(0,0,0,0)"};
`;

export const LoginLabel = styled.label`
  color: #7f8291;
  margin: 15px 20px 5px;
`;

export const LoginInput = styled.input`
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

export const LoginError = styled.p`
  color: #bf1650;
  margin: 0;

  ::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const LoginFetching = styled.div<{ active?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.27);
  border-radius: 10px;
  display: ${props => props.active ? "block" : "none"};
`;

export const LoginSubmitButton = styled(Button)`
  margin-top: 15px;
  border-radius: 20px;
  padding: 10px 5px;
  background: rgba(246, 185, 26, 0.8);
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;

  :hover {
    background: rgba(246, 185, 26, 0.9);
  }
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.img`
  width: 30%;
  height: 30%;
`;

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const HomeUserContainer = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  height: calc(100% - 80px);
  padding: 40px;
`;

export const HomeUserContact = styled.div`
  padding: 5px;
  margin: 20px 0;
  text-align: center;
`;

export const HomeContactsContainer = styled.div`
  background: greenyellow;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 auto;
`;