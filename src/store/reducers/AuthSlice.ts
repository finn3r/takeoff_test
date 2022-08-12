import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    token: string | undefined,
    id: number | undefined
}

const initialState: AuthState = {
    token: undefined,
    id: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthState>) {
            localStorage.setItem('accessToken', action.payload.token || "");
            localStorage.setItem('user_id', action.payload.id?.toString() || "");
            Object.assign(state, action.payload);
        },
        logout(state) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user_id');
            Object.assign(state, initialState);
        }
    }
})

export default authSlice.reducer;