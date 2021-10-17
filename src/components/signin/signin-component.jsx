import React from "react";

import './signin.styles.scss';
import FormInput from "../form-input-component/form-imput-component";
import CustomButton from "../custom-button/custom-button-component";
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name] : value});
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form >
                    <FormInput name='email' value={this.state.email} label='email' handleChange={this.handleChange} />
                    <FormInput name='password' type='password' value={this.state.password} label='password' handleChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                    
                </form>




            </div>
        
        )
    }
    
}

export default SignIn;