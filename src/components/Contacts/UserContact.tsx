import React from 'react';
import * as ST from "../../styled";
import def_img from "../../assets/DefaultContactImage.png";
import {userAPI} from "../../services/UserService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authSlice} from "../../store/reducers/AuthSlice";
import {editorSlice} from "../../store/reducers/EditorSlice";
import SettingIcon from "../../assets/SettingsIcon.svg"
import LogoutIcon from "../../assets/LogoutIcon.svg"
import {useNavigate} from "react-router-dom";

const UserContact: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useAppSelector(state => state.auth);
    const {data} = userAPI.useGetUserQuery(id);
    const {logout} = authSlice.actions;
    const {show} = editorSlice.actions;
    const dispatch = useAppDispatch();


    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    }

    const handleEdit = () => {
        dispatch(show(data!));
    }

    return (
        <ST.UserContainer>
            <ST.UserProfileImage src={data?.image ? data.image : def_img}/>
            <ST.UserButton src={SettingIcon} alt={""} onClick={handleEdit}/>
            <ST.UserButton src={LogoutIcon} alt={""} onClick={handleLogout}/>
        </ST.UserContainer>
    );
};

export default UserContact;