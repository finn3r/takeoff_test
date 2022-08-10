import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import * as ST from './styled';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ST.GlobalStyle/>
            <App/>
        </BrowserRouter>
    </Provider>
);
