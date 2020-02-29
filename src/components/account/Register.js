import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
        // const { username, email, password, password2 } = this.state;
        // if (password !== password2) {
        //     this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
        // } else {
        //     const newUser = {
        //         username,
        //         password,
        //         email
        //     };
        //     this.props.register(newUser);
        // }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, email, password, confirmPassword } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="confirmPassword"
                                onChange={this.onChange}
                                value={confirmPassword}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;