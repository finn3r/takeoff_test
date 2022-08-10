import React, {useEffect} from 'react';
import * as ST from './styled';
import Layout from "./components/Layout";
import axios from "axios";
import { userSlice} from "./store/reducers/UserSlice";
import {useAppDispatch} from "./hooks/redux";

const App: React.FC = () => {
    const {setUser, changeStatus} = userSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const access_token: string = localStorage.getItem("access_token") || "";
        const user_id: number = Number(localStorage.getItem("user_id"));
        if (user_id !== 0 && access_token !== "") {
            axios.get(`http://localhost:8000/users/${user_id}`, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            }).then((res) => {
                dispatch(setUser(res.data));
            }).catch(() => {
                dispatch(changeStatus("Not authorized"));
            });
        } else dispatch(changeStatus("Not authorized"));
    }, [dispatch, setUser, changeStatus]);

    return (
        <ST.AppWrapper>
            <Layout/>
        </ST.AppWrapper>
    );
};

export default App;