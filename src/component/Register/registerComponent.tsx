import React from 'react';
import './registerComponent.scss'
export default class RegisterComponent extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='container'>
                <h1>Log In</h1>
                <div className='reg-email'>
                    <label> Email</label>
                    <input type='email' placeholder='Email'/>
                </div>
                <div className='reg-password'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter your password'  />
                </div>
                <footer>
                    <button className='btn-login'>
                        Login
                    </button>
                </footer>
            </div>
        )
    }
}