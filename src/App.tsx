import React, {useEffect} from 'react';
import * as ST from './styled';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {userAPI} from "./services/UserService";
import {useAppSelector} from "./hooks/redux";
import Spinner from "./components/Spinner";

const App: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useAppSelector(state => state.auth);
    const {isError, isSuccess, isLoading} = userAPI.useGetUserQuery(id);

    useEffect(() => {
        if (isError) navigate('/login');
        if (isSuccess) navigate('/');
    }, [isSuccess, isError, navigate]);

    return (
        <ST.AppWrapper>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
            {isLoading ? <Spinner/> : null}
        </ST.AppWrapper>
    );
};

export default App;