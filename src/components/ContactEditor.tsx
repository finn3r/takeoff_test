import React, {useEffect, useState} from 'react';
import {editorSlice} from "../store/reducers/EditorSlice";
import ReactDOM from "react-dom";
import * as ST from '../styled';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {ReactComponent as CloseButton} from "../assets/CloseIcon.svg";
import {FieldValues, useForm} from "react-hook-form";
import Spinner from "./Spinner";
import ProfileImageInput from "./ProfileImageInput";
import {userAPI} from "../services/UserService";
import {IContact} from "../models/IContact";

const modal_root = document.getElementById('modal-root') as HTMLElement;

const ContactEditor: React.FC = () => {
    const {id} = useAppSelector(state => state.auth);
    const {contact} = useAppSelector(state => state.editor);
    const {hide} = editorSlice.actions;
    const dispatch = useAppDispatch();
    const [image, setImage] = useState<string>();
    const [addContact, {isLoading: contactAddLoading}] = userAPI.useAddContactMutation();
    const [editContact, {isLoading: contactEditLoading}] = userAPI.useEditContactMutation();
    const [editUser, {isLoading: userEditLoading}] = userAPI.useEditUserMutation();

    const {
        register,
        handleSubmit,
        setValue,
        reset
    } = useForm();

    useEffect(() => {
        const handleKeyEcs = (e: KeyboardEvent) => {
            if (e.key === "Escape") dispatch(hide());
        };
        document.addEventListener('keydown', handleKeyEcs);
        return () => {
            document.removeEventListener('keydown', handleKeyEcs)
        }
    }, []);

    useEffect(() => {
        if (contact?.id) {
            setImage(contact.image || "");
            setValue("name", contact.name);
            setValue("phone", contact.phone);
            setValue("email", contact.email);
        } else {
            setImage("");
            reset();
        }
    }, [contact, setValue, reset])

    const saveContact = (newData: FieldValues) => {
        if ((contact?.name !== newData.name)
            || (contact?.phone !== newData.phone)
            || (contact?.email !== newData.email)
            || (contact?.image !== image)) {
            if (contact?.id) {
                const contactData = {...newData, image, id: contact.id} as IContact;
                if (contact?.userId) {
                    editContact({user_id: contact.userId, contact: contactData});
                } else {
                    editUser(contactData);
                }
            } else {
                const contactData = {...newData, image} as IContact;
                addContact({user_id: id!, contact: contactData});
            }
        }
        dispatch(hide());
    }

    return (contact ? ReactDOM.createPortal(
        <ST.ContactPopUpContainer>
            <ST.Form onSubmit={handleSubmit(saveContact)}>
                <ST.CloseButtonContainer onClick={() => dispatch(hide())}>
                    <CloseButton/>
                </ST.CloseButtonContainer>
                <ST.FormContent>
                    <ProfileImageInput croppedImage={image} setCroppedImage={setImage}/>
                    <ST.Input placeholder={"Имя"} {...register("name")} type={"text"}/>
                    <ST.Input placeholder={"Email"} {...register("email")} type={"email"}/>
                    <ST.Input placeholder={"Телефон"} {...register("phone")} type={"tel"}/>
                </ST.FormContent>
                <ST.SubmitButton type={"submit"}>{(contact?.id) ? "Сохранить" : "Создать"}</ST.SubmitButton>
                <ST.FormFetching active={contactAddLoading || contactEditLoading || userEditLoading}>
                    <Spinner/>
                </ST.FormFetching>
            </ST.Form>
        </ST.ContactPopUpContainer>, modal_root) : null);
};

export default ContactEditor;