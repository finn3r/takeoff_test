import React from 'react';
import * as ST from "../styled";
import def_img from ".././assets/DefaultContactImage.png";
import {userAPI} from "../services/UserService";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {authSlice} from "../store/reducers/AuthSlice";
import {editorSlice} from "../store/reducers/EditorSlice";

const UserContact: React.FC = () => {
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
            <ST.UserContactsContainer>
                <ST.UserContact>
                    <ST.ProfileImageContainer>
                        <ST.UserProfileImage src={data?.image ? data.image : def_img}/>
                    </ST.ProfileImageContainer>
                </ST.UserContact>
                {data?.name ? <ST.UserContact>
                    {data.name}
                </ST.UserContact> : null}
                {data?.email ? <ST.UserContact>
                    {data.email}
                </ST.UserContact> : null}
                {data?.phone ? <ST.UserContact>
                    {data.phone}
                </ST.UserContact> : null}
                <ST.UserEditButton onClick={handleEdit}>Редактировать</ST.UserEditButton>
            </ST.UserContactsContainer>
            <ST.UserExitButton onClick={handleLogout}>Выйти</ST.UserExitButton>
        </ST.UserContainer>
    );
};

export default UserContact;