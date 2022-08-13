import React, {useState} from 'react';
import * as ST from "../styled";
import def_img from ".././assets/DefaultContactImage.png";
import {userAPI} from "../services/UserService";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {authSlice} from "../store/reducers/AuthSlice";
import {editorSlice} from "../store/reducers/EditorSlice";
import {ReactComponent as ExpandMoreButton} from "../assets/ExpandMoreButton.svg";

const UserContact: React.FC = () => {
    const [focus, setFocus] = useState(false);
    const {id} = useAppSelector(state => state.auth);
    const {data} = userAPI.useGetUserQuery(id);
    const {logout} = authSlice.actions;
    const {show} = editorSlice.actions;
    const dispatch = useAppDispatch();


    const handleLogout = () => {
        dispatch(logout());
    }

    const handleEdit = () => {
        dispatch(show(data!));
    }

    return (
        <ST.UserContainer>
            <ST.UserProfileContainer>
                <ST.UserProfileImage src={data?.image ? data.image : def_img}/>
                <ST.UserProfileName>{data?.name}</ST.UserProfileName>
                <ExpandMoreButton/>
            </ST.UserProfileContainer>
            {/*<ST.UserEditButton onClick={handleEdit}>Редактировать</ST.UserEditButton>
            <ST.UserExitButton onClick={handleLogout}>Выйти</ST.UserExitButton>*/}
        </ST.UserContainer>
    );
};

export default UserContact;