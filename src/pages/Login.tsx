import React, {useEffect, useRef, useState} from 'react';
import * as ST from '../styled';
import {FieldValues, useForm} from "react-hook-form";
import Spinner from "../components/Spinner";
import ProfileImageInput from "../components/ProfileImageInput";
import {userAPI} from "../services/UserService";
import {IContactLogin} from "../models/IContact";
import {useNavigate} from "react-router-dom";

const loginVariants = ["login", "register"] as const;

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [type, setType] = useState<typeof loginVariants[number]>("login");
    const [image, setImage] = useState<string>();
    const [loginUser, {isLoading, isError, isSuccess}] = userAPI.useLoginUserMutation();

    const {register, handleSubmit, formState: {errors}, reset, watch} =
        useForm({
            mode: "onBlur"
        });
    const password = useRef({});
    password.current = watch("password", "");

    useEffect(() => {
        if (isSuccess) navigate('/');
    }, [navigate, isSuccess]);

    const handleChange = (newType: typeof loginVariants[number]) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (type !== newType) {
            setType(newType);
            reset();
        }
    };

    const handleLogin = (fields: FieldValues) => {
        const user = {...fields, image} as IContactLogin;
        loginUser({type, user});
    }

    return (
        <ST.FlexContainer>
            <ST.Form onSubmit={handleSubmit(handleLogin)}>
                <ST.NavigationContainer>
                    <ST.NavigationButton active={type === "login"} onClick={handleChange("login")}>
                        Вход
                    </ST.NavigationButton>
                    <ST.NavigationButton active={type === "register"} onClick={handleChange("register")}>
                        Регистрация
                    </ST.NavigationButton>
                </ST.NavigationContainer>
                {type === "login" ?
                    <ST.FormContent>
                        <ST.Input placeholder={"Email"} {...register("email", {required: true})} type={"email"}/>
                        {errors.email ? <ST.InputError>Не введена почта</ST.InputError> : null}
                        <ST.Input placeholder={"Пароль"} {...register("password", {required: true})} type={"password"}/>
                        {errors.password ? <ST.InputError>Не введен пароль</ST.InputError> : null}
                    </ST.FormContent>
                    :
                    <ST.FormContent>
                        <ProfileImageInput croppedImage={image} setCroppedImage={setImage}/>
                        <ST.Input placeholder={"Имя"} {...register("name", {required: true})} type={"text"}/>
                        {errors.name ? <ST.InputError>Не указано имя</ST.InputError> : null}
                        <ST.Input placeholder={"Телефон"} {...register("phone", {required: true})} type={"tel"}/>
                        {errors.phone ? <ST.InputError>Не указан телефон</ST.InputError> : null}
                        <ST.Input placeholder={"Email"} {...register("email", {required: true})} type={"email"}/>
                        {errors.email ? <ST.InputError>Не указана почта</ST.InputError> : null}
                        <ST.Input placeholder={"Пароль"} {...register("password", {required: true})} type={"password"}/>
                        {errors.password ? <ST.InputError>Не указан пароль</ST.InputError> : null}
                        <ST.Input
                            placeholder={"Повторите пароль"} {...register("confirm_password", {validate: value => value === password.current})}
                            type={"password"}/>
                        {errors.confirm_password ? <ST.InputError>Пароли не совпадают</ST.InputError> : null}
                    </ST.FormContent>
                }
                <ST.SubmitButton
                    type={"submit"}>{type === "login" ? "Войти" : "Зарегистрироваться"}</ST.SubmitButton>
                {isError ? type === "login" ?
                        <ST.InputError>Введены неверные данные</ST.InputError> :
                        <ST.InputError>Данный пользователь уже существует</ST.InputError>
                    : null}
                <ST.FormFetching active={isLoading}>
                    <Spinner/>
                </ST.FormFetching>
            </ST.Form>
        </ST.FlexContainer>
    );
};

export default Login;