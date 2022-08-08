import React from 'react';
import * as ST from '../styled';

const NotFound: React.FC = () => {
    return (
        <ST.NotFoundContainer>
            <ST.NotFoundCode>404</ST.NotFoundCode>
            <ST.NotFoundText>PAGE NOT FOUND</ST.NotFoundText>
        </ST.NotFoundContainer>
    );
};

export default NotFound;