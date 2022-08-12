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
    const [loginUser, { isLoading, isError, isSuccess}] = userAPI.useLoginUserMutation();

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
        <ST.LoginContainer>
            <ST.Form onSubmit={handleSubmit(handleLogin)}>
                <ST.LoginHeader>
                    <ST.LoginNavigationButton active={type === "login"} onClick={handleChange("login")}>
                        Войти
                    </ST.LoginNavigationButton>
                    <ST.LoginNavigationButton active={type === "register"} onClick={handleChange("register")}>
                        Зарегистрироваться
                    </ST.LoginNavigationButton>
                </ST.LoginHeader>
                {type === "login" ?
                    <ST.LoginContent>
                        <ST.InputLabel>Email</ST.InputLabel>
                        <ST.Input {...register("email", {required: true})} type={"email"}/>
                        {errors.email ? <ST.InputError>Не введена почта</ST.InputError> : null}
                        <ST.InputLabel>Пароль</ST.InputLabel>
                        <ST.Input {...register("password", {required: true})} type={"password"}/>
                        {errors.password ? <ST.InputError>Не введен пароль</ST.InputError> : null}
                    </ST.LoginContent>
                    :
                    <ST.LoginContent>
                        <ProfileImageInput croppedImage={image} setCroppedImage={setImage}/>
                        <ST.InputLabel>Имя</ST.InputLabel>
                        <ST.Input {...register("name", {required: true})} type={"text"}/>
                        {errors.name ? <ST.InputError>Не указано имя</ST.InputError> : null}
                        <ST.InputLabel>Номер телефона</ST.InputLabel>
                        <ST.Input {...register("phone", {required: true})} type={"tel"}/>
                        {errors.phone ? <ST.InputError>Не указан телефон</ST.InputError> : null}
                        <ST.InputLabel>Email</ST.InputLabel>
                        <ST.Input {...register("email", {required: true})} type={"email"}/>
                        {errors.email ? <ST.InputError>Не указана почта</ST.InputError> : null}
                        <ST.InputLabel>Пароль</ST.InputLabel>
                        <ST.Input {...register("password", {required: true})} type={"password"}/>
                        {errors.password ? <ST.InputError>Не указан пароль</ST.InputError> : null}
                        <ST.InputLabel>Повторите пароль</ST.InputLabel>
                        <ST.Input {...register("confirm_password", {validate: value => value === password.current})}
                                  type={"password"}/>
                        {errors.confirm_password ? <ST.InputError>Пароли не совпадают</ST.InputError> : null}
                    </ST.LoginContent>
                }
                <ST.SubmitButton
                    type={"submit"}>{type === "login" ? "Войти" : "Регистрация"}</ST.SubmitButton>
                {isError ? type === "login" ?
                        <ST.InputError>Введены неверные данные</ST.InputError> :
                        <ST.InputError>Данный пользователь уже существует</ST.InputError>
                    : null}
                <ST.LoginFetching active={isLoading}>
                    <Spinner/>
                </ST.LoginFetching>
            </ST.Form>
        </ST.LoginContainer>
    );
};

export default Login;