import React from "react";

import './sing-in-and-sing-up.styles.scss';
import SignIn from '../signin/signin-component';
import SignUp from "../sign-up/sign-up.component";

const SignInAndSignUpComponent = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

);

export default SignInAndSignUpComponent;