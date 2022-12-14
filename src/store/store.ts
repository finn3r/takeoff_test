import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {userAPI} from "../services/UserService";
import editorReducer from "./reducers/EditorSlice"
import authReducer from "./reducers/AuthSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    editor: editorReducer,
    [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];