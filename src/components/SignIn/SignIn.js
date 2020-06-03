import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            // Determines if a and what error message should be displayed
            // 0: No error message
            // 1: "No empty fields"
            // 2: "Email address and password do not match"
            // 3: "Error logging in. Try again"
            errorState: 0
        }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }
    
    onPasswordChange = (event) => {
        this.setState({signInPassword : event.target.value});
    }

    onSubmitSignIn = () => {
        if(!this.state.signInEmail || !this.state.signInPassword){
            return this.setState({errorState: 1});
        }
        
        fetch('https://pure-plains-68415.herokuapp.com/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id){
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
                else this.setState({errorState: 2})
            })
            .catch(err => this.setState({errorState: 3}))
            
    }


    render(){
        const {onRouteChange} = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password" 
                                id="password" 
                                onChange={this.onPasswordChange}
                            />
                            </div>
                        </fieldset>
                        <ErrorMessage errorState={this.state.errorState} />
                        <div className="">
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;