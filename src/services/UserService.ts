import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";
import {IContact, IContactLogin} from "../models/IContact";
import type {RootState} from "../store/store";
import {authSlice} from '../store/reducers/AuthSlice'

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.token;
            if (token) headers.set('Authorization', `Bearer ${token.slice(1, token.length - 1)}`);
            return headers
        },
    }),
    tagTypes: ['User', 'Contacts'],
    endpoints: (build) => ({
        getUser: build.query<IContact, number | undefined>({
            query: (id) => {
                if (id) {
                    return {
                        url: `/users/${id}`,
                        method: 'GET'
                    }
                } else {
                    const newId: number = Number(localStorage.getItem('user_id'));
                    return {
                        url: `/users/${newId}`,
                        method: 'GET'
                    }
                }
            },
            providesTags: ['User'],
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    if (!id) {
                        const newId: number = Number(localStorage.getItem('user_id'));
                        const token: string = localStorage.getItem('accessToken') || "";
                        const {login} = authSlice.actions;
                        if (newId !== 0) dispatch(login({token, id: newId}));
                    }
                    await queryFulfilled;
                } catch (e) {

                }
            }
        }),
        loginUser: build.mutation<IUser, { type: string, user: IContactLogin }>({
            query: ({type, user}) => ({
                url: `/${type}`,
                method: 'POST',
                body: {...user}
            }),
            invalidatesTags: ['User'],
            async onQueryStarted(_, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    const {login} = authSlice.actions;
                    const token: string = JSON.stringify(data.accessToken) || "";
                    const id: number = Number(JSON.stringify(data.user.id));
                    dispatch(login({token, id}));
                } catch (e) {

                }
            },
        }),
        editUser: build.mutation<IContact, IContact>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PATCH',
                body: {...user}
            }),
            invalidatesTags: ['User']
        }),
        getContacts: build.query<IContact[], number | undefined>({
            query: (user_id) => ({
                url: `/users/${user_id}/contacts`,
                method: 'GET'
            }),
            providesTags: ['Contacts']
        }),
        editContact: build.mutation<IContact, { user_id: number, contact: IContact }>({
            query: ({user_id, contact}) => ({
                url: `/users/${user_id}/contacts/${contact.id}`,
                method: 'PATCH',
                body: {...contact}
            }),
            invalidatesTags: ['Contacts']
        }),
        deleteContact: build.mutation<IContact, { user_id: number, contact_id: number }>({
            query: ({user_id, contact_id}) => ({
                url: `/users/${user_id}/contacts/${contact_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts']
        }),
        addContact: build.mutation<IContact, { user_id: number, contact: IContact }>({
            query: ({user_id, contact}) => ({
                url: `/users/${user_id}/contacts/`,
                method: 'POST',
                body: {...contact}
            }),
            invalidatesTags: ['Contacts']
        }),
    })
})