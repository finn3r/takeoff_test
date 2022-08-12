import React from 'react';
import spinner from "../assets/Spinner.svg";
import * as ST from '../styled';

const Spinner: React.FC = () => {
    return (
        <ST.SpinnerContainer>
            <ST.Spinner src={spinner} alt={"Loading..."}/>
        </ST.SpinnerContainer>
    );
};

export default Spinner;