import React, {useRef, useState} from 'react';
import * as ST from '../styled';
import {FieldValues, useForm} from "react-hook-form";
import {useAppDispatch} from "../hooks/redux";
import {userSlice} from "../store/reducers/UserSlice";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Spinner from "../components/Spinner";

const loginVariants = ["login", "register"] as const;

const Login: React.FC = () => {
    const {setUser} = userSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [type, setType] = useState<typeof loginVariants[number]>("login");
    const [isFetching, setIsFetching] = useState(false);
    const [showError, setShowError] = useState(false);

    const changeTypeHandler = (newType: typeof loginVariants[number]) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (type !== newType) {
            setType(newType);
            reset();
            setShowError(false);
        }
    };

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "all"
    });

    const password = useRef({});
    password.current = watch("password", "");

    const loginUser = (data: FieldValues) => {
        setIsFetching(true);
        axios.post(`http://localhost:8000/${type}`, {...data, contacts: []})
            .then((res) => {
                localStorage.setItem('access_token', JSON.stringify(res.data.accessToken));
                localStorage.setItem('user_id', JSON.stringify(res.data.user.id));
                dispatch(setUser(res.data.user));
                navigate("/");
            })
            .catch(() => {
                setShowError(true);
            })
            .finally(() => setIsFetching(false));
    }

    return (
        <ST.LoginContainer>
            <ST.LoginForm onSubmit={handleSubmit(loginUser)} onChange={() => setShowError(false)}>
                <ST.LoginHeader>
                    <ST.LoginNavigationButton active={type === "login"} onClick={changeTypeHandler("login")}>
                        Войти
                    </ST.LoginNavigationButton>
                    <ST.LoginNavigationButton active={type === "register"} onClick={changeTypeHandler("register")}>
                        Зарегистрироваться
                    </ST.LoginNavigationButton>
                </ST.LoginHeader>
                {type === "login" ?
                    <ST.LoginContent>
                        <ST.LoginLabel>Email</ST.LoginLabel>
                        <ST.LoginInput {...register("email", {required: true})} type={"email"}/>
                        {errors.email ? <ST.LoginError>Не введена почта</ST.LoginError> : null}
                        <ST.LoginLabel>Пароль</ST.LoginLabel>
                        <ST.LoginInput {...register("password", {required: true})} type={"password"}/>
                        {errors.password ? <ST.LoginError>Не введен пароль</ST.LoginError> : null}
                    </ST.LoginContent>
                    :
                    <ST.LoginContent>
                        <ST.LoginLabel>Имя</ST.LoginLabel>
                        <ST.LoginInput {...register("name", {required: true})} type={"text"}/>
                        {errors.name ? <ST.LoginError>Не указано имя</ST.LoginError> : null}
                        <ST.LoginLabel>Номер телефона</ST.LoginLabel>
                        <ST.LoginInput {...register("phone", {required: true})} type={"tel"}/>
                        {errors.phone ? <ST.LoginError>Не указан телефон</ST.LoginError> : null}
                        <ST.LoginLabel>Email</ST.LoginLabel>
                        <ST.LoginInput {...register("email", {required: true})} type={"email"}/>
                        {errors.email ? <ST.LoginError>Не указана почта</ST.LoginError> : null}
                        <ST.LoginLabel>Пароль</ST.LoginLabel>
                        <ST.LoginInput {...register("password", {required: true})} type={"password"}/>
                        {errors.password ? <ST.LoginError>Не указан пароль</ST.LoginError> : null}
                        <ST.LoginLabel>Повторите пароль</ST.LoginLabel>
                        <ST.LoginInput {...register("confirm_password", {validate: value => value === password.current})}
                                       type={"password"}/>
                        {errors.confirm_password ? <ST.LoginError>Пароли не совпадают</ST.LoginError> : null}
                    </ST.LoginContent>
                }
                <ST.LoginSubmitButton
                    type={"submit"}>{type === "login" ? "Войти" : "Регистрация"}</ST.LoginSubmitButton>
                {showError ? type === "login" ?
                        <ST.LoginError>Введены неверные данные</ST.LoginError> :
                        <ST.LoginError>Данный пользователь уже существует</ST.LoginError>
                    : null}
                <ST.LoginFetching active={isFetching}>
                    <Spinner/>
                </ST.LoginFetching>
            </ST.LoginForm>
        </ST.LoginContainer>
    );
};

export default Login;