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

export const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 40px 30px;
  background: linear-gradient(#2e3a6a, #2f0b45);
  border-radius: 10px;
  max-height: 100%;
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

export const InputLabel = styled.label`
  color: #7f8291;
  margin: 15px 20px 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

export const InputError = styled.p`
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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: ${props => props.active ? "block" : "none"};
`;

export const SubmitButton = styled(Button)`
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

export const ContactPopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
`;

export const CloseButtonContainer = styled.div`
  transition: all 250ms ease 0s;
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  width: 40px;
  height: 40px;
  opacity: 0.7;
  :hover{
    cursor: pointer;
    opacity: 1;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: 100%;
  margin-top: 10px;
`;

export const ProfileImage = styled.img`
  border-radius: 9999px;
  width: 50%;
`;

export const UserProfileImage = styled(ProfileImage)`
  width: 80%;
`;

export const AddPhotoButtonContainer = styled.label`
  position: absolute;
  padding: 5px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.4);
  :hover{
    cursor: pointer;
  }
`;

export const AddPhotoButtonInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const ImageCropContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background: linear-gradient(#2e3a6a, #2f0b45);
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const ImageCropPhoto = styled.img`
  border-radius: 10px;
  touch-action: none;
  max-height: 100% !important;
  max-width: 100%;
`;

export const ImageCropButton = styled(SubmitButton)`
  width: 50%;
  margin: 10px 0;
`;

export const UserContainer = styled.div`
  background: rgba(103, 95, 115, 0.66);
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 0 1 min-content;
  justify-content: space-between;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.5);
`;

export const UserContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContact = styled.div`
  padding: 10px 20px 0;
  text-align: center;
  min-width: 150px;
  font-size: 16px;
  color: white;
`;

export const UserExitButton = styled(Button)`
  background: none;
  margin: 15px 50px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;

  :hover {
    color: rgb(255, 76, 47);
  }
`;

export const UserEditButton = styled(UserExitButton)`
  margin: 40px 50px;
  color: rgba(255, 255, 255, 0.6);
  :hover {
    color: white;
  }
`;

export const ContactsContainer = styled.div`
  background: rgba(232, 215, 241, 0.56);
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 auto;
`;

export const ContactsText = styled.p`

`;

export const ContactsAddButton = styled.button`

`;

export const ContactsSearchInput = styled.input`

`;