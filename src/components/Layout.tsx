import React, {useEffect} from 'react';
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import {useAppSelector} from "../hooks/redux";

const Layout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {status} = useAppSelector(state => state.user);

    useEffect(() => {
        switch (status) {
            case "Not authorized":
                navigate("/login");
                break
            default:
                navigate("/");
                break
        }
    }, [status, navigate, location.pathname]);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </>
    );
};

export default Layout;