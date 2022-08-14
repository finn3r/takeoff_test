import React, {useEffect} from 'react';
import * as ST from '../styled';
import Spinner from "../components/Spinner";
import ContactEditor from "../components/ContactEditor";
import Contacts from "../components/Contacts";
import {userAPI} from "../services/UserService";
import {useAppSelector} from "../hooks/redux";
import {useNavigate} from "react-router-dom";
import ContactsIcon from "../assets/ContactsIcon.svg"
import UserContact from "../components/Contacts/UserContact";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useAppSelector(state => state.auth);
    const {isError, isLoading} = userAPI.useGetUserQuery(id);

    useEffect(() => {
        if (isError) navigate('/login');
    }, [isError, navigate]);

    return (isLoading || isError ? <Spinner/> :
        <ST.HomeContainer>
            <ST.HomeHeader>
                <ST.HeaderText>
                    Контакты
                </ST.HeaderText>
                <UserContact/>
            </ST.HomeHeader>
            <ST.HomeSidebar>
                <ST.HomeSiteNameContainer>
                    <ST.HomeSiteNameText>
                        Finner
                    </ST.HomeSiteNameText>
                </ST.HomeSiteNameContainer>
                <ST.SidebarVariants>
                    <ST.SidebarVariant active={true}>
                        <ST.SidebarVariantIcon src={ContactsIcon} alt={""}/>
                        <ST.SidebarVariantText>
                            Контакты
                        </ST.SidebarVariantText>
                    </ST.SidebarVariant>
                </ST.SidebarVariants>
            </ST.HomeSidebar>
            <ST.HomeContent>
                <Contacts/>
                <ContactEditor/>
            </ST.HomeContent>
        </ST.HomeContainer>);
};

export default Home;