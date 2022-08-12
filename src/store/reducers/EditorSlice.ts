import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContact} from "../../models/IContact";

interface EditorState {
    contact: IContact | undefined,
}

const initialState: EditorState = {
    contact: undefined,
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        show(state, action: PayloadAction<IContact | number>) {
            typeof action.payload === "number"
                ?
                state.contact = {
                    name: "",
                    image: "",
                    email: "",
                    phone: "",
                    userId: action.payload
                }
                :
                state.contact = action.payload
        },
        hide(state) {
            Object.assign(state, initialState);
        }
    }
})

export default editorSlice.reducer;