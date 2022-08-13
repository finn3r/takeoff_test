import React from 'react';
import * as ST from '../styled';
import Spinner from "../components/Spinner";
import ContactEditor from "../components/ContactEditor";
import Contacts from "../components/Contacts";
import {userAPI} from "../services/UserService";
import {useAppSelector} from "../hooks/redux";

const Home: React.FC = () => {
    const {id} = useAppSelector(state => state.auth);
    const {isLoading} = userAPI.useGetUserQuery(id);

    return (isLoading ? <Spinner/> :
        <ST.HomeContainer>
            <Contacts/>
            <ContactEditor/>
        </ST.HomeContainer>);
};

export default Home;