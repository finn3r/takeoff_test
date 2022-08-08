import React, {useState} from 'react';
import * as ST from '../styled';

const loginVariants = ["login", "register"] as const;

const Login: React.FC = () => {
    const [type, setType] = useState<typeof loginVariants[number]>("login");

    return (
        <ST.LoginContainer>

        </ST.LoginContainer>
    );
};

export default Login;