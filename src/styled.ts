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
  flex-direction: column;
  row-gap: 20px;
  padding: 15px;
  margin: 15px;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
`;

export const LoginHeader = styled.header`
  text-align: center;
  font-size: 20px;
`;

export const LoginLabel = styled.span`
  width: max-content;
`;

export const LoginInput = styled.input`
  
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginButtonContent = styled.button`
  border: none;
`;