import React from 'react';
import * as ST from './styled';
import Layout from "./components/Layout";

const App: React.FC = () => {
    return (
        <ST.AppWrapper>
            <Layout/>
        </ST.AppWrapper>
    );
};

export default App;