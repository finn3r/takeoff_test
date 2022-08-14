import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
  overflow-x: hidden;
`;

export const Button = styled.button`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  transition: all 250ms ease 0s;
  border: none;
  border-radius: 20px;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const NotFoundContainer = styled(FlexContainer)`
  flex-direction: column;
`;

export const NotFoundText = styled.p`
  font-size: 20px;
`;

export const NotFoundCode = styled.p`
  font-size: 100px;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  background: linear-gradient(#2e3a6a, #2f0b45);
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
`;

export const NavigationContainer = styled.div`
  font-size: 20px;
  display: flex;
  gap: 20px;
`;

export const FormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const NavigationButton = styled(Button)<{ active?: boolean }>`
  padding: 0 0 5px;
  border-radius: 0;
  color: white;
  opacity: ${props => props.active ? "1" : "0.5"};
  border-bottom: 2px solid ${props => props.active ? "#eec111" : "rgba(0,0,0,0)"};
  font-family: 'Montserrat', sans-serif;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  color: white;

  ::placeholder {
    color: #9a9a9a;
  }
`;

export const InputError = styled.div`
  color: #FF3700FF;
  font-size: 14px;
  margin: -10px 0 5px;

  ::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const FormFetching = styled.div<{ active?: boolean }>`
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
  padding: 10px 5px;
  background: rgb(246, 185, 26);
  color: white;

  :hover {
    background: rgba(246, 185, 26, 0.9);
  }
`;

export const Spinner = styled.img`
  width: 30%;
  height: 30%;
`;

export const ProfileImage = styled.img`
  border-radius: 9999px;
  width: 100%;
  height: 100%;
`;

export const ImageInputContainer = styled(FlexContainer)`
  position: relative;
  margin-top: 10px;
`;

export const ImageInputContent = styled.div`
  width: 50%;
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

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const AddPhotoButtonContainer = styled.label`
  position: absolute;
  padding: 5px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.4);

  :hover {
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

export const HomeContainer = styled.div`
  background: #d1dded;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "sidebar header"
                       "sidebar content";
  grid-template-columns: min-content 1fr;
  grid-template-rows: 60px 1fr;
`;

export const HomeHeader = styled.div`
  background: white;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.div`
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const UserProfileImage = styled(ProfileImage)`
  width: 45px;
  height: 45px;
`;

export const UserButton = styled.img`
  transition: all 250ms ease 0s;
  opacity: 0.5;
  width: 35px;
  height: 35px;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const HeaderText = styled.p`
  color: #1c1c2a;
  font-family: 'Montserrat', sans-serif;
  margin: 0 30px;
  font-size: 25px;
`;

export const HomeSidebar = styled.div`
  grid-area: sidebar;
  color: white;
  background: #95b7e6;;
  width: fit-content;
  height: 100%;
`;

export const SidebarVariants = styled.div`
  margin-top: 20px;
`;

export const SidebarVariant = styled.div<{ active?: boolean }>`
  font-family: 'Montserrat', sans-serif;
  padding: 15px 40px 15px 15px;
  text-transform: uppercase;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  border-left: 4px solid ${props => props.active ? "#51739d" : "rgba(0,0,0,0)"};
  background: ${props => props.active ? 'linear-gradient(to right, #7ca2d6, #95b7e6)' : "rgba(0,0,0,0)"}
`;

export const SidebarVariantIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.7;
`;

export const SidebarVariantText = styled.p`
  @media (max-width: 700px), (max-height: 500px) {
    display: none;
  }
`;

export const HomeSiteNameContainer = styled.div`
  height: 60px;
  font-size: 25px;
  background: #7ca2d6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const HomeSiteNameText = styled.p`
  @media (max-width: 700px), (max-height: 500px) {
    display: none;
  }
`;

export const HomeContent = styled.div`
  grid-area: content;
  margin: 20px;
`;


export const ContactsContainer = styled(FlexContainer)`
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "header"
                       "content";
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0 1px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 20px;
`;

export const ContactsHeader = styled.header`
  display: flex;
  gap: 30px;
  justify-content: start;
  grid-area: header;
  padding: 10px;
  height: 100%;
`;

export const ContactsSearchContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContactsSearchInput = styled.input`
  height: 100%;
  border: none;
  width: 100%;
  border-radius: 20px;
  padding: 0 35px;
  font-size: 16px;
  background: rgba(169, 169, 169, 0.2);
`;

export const ContactsSearchIcon = styled.img`
  position: absolute;
  left: 5px;
  width: 30px;
  opacity: 0.6;
`;

export const ContactsClearIcon = styled(ContactsSearchIcon)<{ hidden?: boolean }>`
  transition: all 250ms ease 0s;
  left: auto;
  right: 5px;
  display: ${props => props.hidden ? "block" : "none"};

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ContactsAddButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  min-width: 190px;
  height: 100%;
  border-radius: 20px;
  border: 2px solid rgb(209, 213, 219);
  padding: 10px 10px 10px 5px;

  :hover {
    cursor: pointer;
    border: 2px solid rgba(0, 0, 0, 0.9);
  }
`;

export const AddContactButton = styled.img`
  opacity: 0.6;
  width: 35px;
`;

export const AddContactText = styled.p``;

export const ContactsText = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  color: #232323;
`;

export const ContactsContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 50px 50px;
  align-items: center;
  padding: 10px;
`;

export const ContactInfo = styled.p`
  color: #232323;
`;

export const ContactButton = styled.img`
  opacity: 0.6;
  width: 35px;
  transition: all 250ms ease 0s;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ContactButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ContactsInfoHeader = styled(ContactContainer)`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  padding: 10px 110px 10px 70px;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid rgba(107, 107, 107, 0.6);
  border-top: 1px solid rgba(107, 107, 107, 0.6);
`;