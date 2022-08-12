import React from 'react';
import {IContact} from "../../models/IContact";
import * as ST from "../../styled";
import def_img from "../../assets/DefaultContactImage.png";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {editorSlice} from "../../store/reducers/EditorSlice";
import {userAPI} from "../../services/UserService";

const Contact: React.FC<{contact: IContact}> = ({contact}) => {
    const {id} = useAppSelector(state => state.auth);
    const {show} = editorSlice.actions;
    const dispatch = useAppDispatch();
    const [deleteContact] = userAPI.useDeleteContactMutation();

    const handleEdit = () => {
        dispatch(show(contact));
    };

    const handleDelete = () => {
        deleteContact({user_id: id!, contact_id: contact.id!});
    };

    return (
        <div style={{border: "1px solid black", display: "flex", justifyContent: "space-between", padding: "10px", alignItems: "center"}}>
            <ST.ProfileImageContainer style={{width: "20%"}}>
                <ST.UserProfileImage src={contact.image ? contact.image : def_img}/>
            </ST.ProfileImageContainer>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Contact;