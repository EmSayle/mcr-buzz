import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/sign-up.scss';
import '../styles/app.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userName: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleLogin() {
    axios.post(`${process.env.API_URL}/users`, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName,
    })
      .then(() => {
        this.props.history.push('/login');
      });
  }

  render() {
    return (
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="userName">
            User Name:
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button onClick={this.handleLogin}>Sign Up</button> or <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
