import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
        return (
                <div>
                <div>
                        <h3>Login</h3>
                        <form onSubmit="">
                                <input type="email" placeholder="your email" />
                                <br />
                                <input type="password" placeholder="your password" />
                                <br />
                                <input type="submit" />
                        </form>
                        <p>new to ema-jhon <Link to="/register">Create Account</Link></p>
                        <div>----------or---------</div>
                        <button className="button">Google sign in</button>
                </div>
                </div>
        );
};

export default Login;