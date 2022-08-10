import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const statusVariants = ["Waiting for login", "Authorized", "Not authorized"] as const;

interface UserData {
    name: string,
    phone: string,
    contacts: UserData[]
}


interface UserState {
    data: UserData,
    status: typeof statusVariants[number];
}

const initialState: UserState = {
    data: {
        name: "",
        phone: "",
        contacts: []
    },
    status: "Waiting for login"
}

export const userSlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserData>) {
            state.data = action.payload;
            state.status = "Authorized";
        },
        changeStatus(state, action: PayloadAction<typeof statusVariants[number]>) {
            state.status = action.payload;
        },
        logout(state){
            localStorage.removeItem("access_token");
            localStorage.removeItem("user_id");
            Object.assign(state, initialState);
            state.status = "Not authorized";
        }
    }
})

export default userSlice.reducer;