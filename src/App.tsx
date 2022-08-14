import React from 'react';
import * as ST from './styled';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {

    return (
        <ST.AppWrapper>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </ST.AppWrapper>
    );
};

export default App;