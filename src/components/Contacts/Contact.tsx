import React from 'react';
import {IContact} from "../../models/IContact";
import * as ST from "../../styled";
import def_img from "../../assets/DefaultContactImage.png";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {editorSlice} from "../../store/reducers/EditorSlice";
import {userAPI} from "../../services/UserService";
import DeleteIcon from "../../assets/CloseIcon.svg";
import EditIcon from "../../assets/EditIcon.svg"

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
        <ST.ContactContainer>
            <ST.UserProfileImage src={contact.image ? contact.image : def_img}/>
            <ST.ContactInfo>
                {contact.name}
            </ST.ContactInfo>
            <ST.ContactInfo>{contact.email}</ST.ContactInfo>
            <ST.ContactInfo>{contact.phone}</ST.ContactInfo>
            <ST.ContactButtonContainer>
                <ST.ContactButton src={EditIcon} alt={"Edit"} onClick={handleEdit}/>
            </ST.ContactButtonContainer>
            <ST.ContactButtonContainer>
                <ST.ContactButton src={DeleteIcon} alt={"Delete"} onClick={handleDelete}/>
            </ST.ContactButtonContainer>
        </ST.ContactContainer>
    );
};

export default Contact;