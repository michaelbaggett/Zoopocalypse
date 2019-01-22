import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Redirect } from "react-router";
//import Login from "../components/Login";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    isAuth: false,
    login: false,
    age: "",
    phone: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    console.log(this.state);
    const { username, password } = this.state;
    API.userLogin({ username, password }).then(res => {
      if (res.data.isAuth) {
        this.setState({
          isAuth: true
        });
      }
    });
  };

  handleSignup = event => {
    event.preventDefault();
    console.log(this.state);
    const { username, password } = this.state;
    API.userSignup({ username, password }).then(res => {
      console.log(res.data);
      if (res.data.isAuth) {
        this.setState({
          isAuth: true
        });
        console.log(username + ": is authorized");
      }
    });
  };

  toggleForms = event => {
    event.preventDefault();
    this.setState({
      login: !this.state.login
    });
  };

  render() {
    return (
      <div className="Site">
        {this.state.isAuth ? (
          <Redirect to="/test" />
        ) : (
          <div className="Site-content">
            {/* Header */}
            <div className="App-header">
              <Header />
            </div>
            {this.state.login ? (
              <div className="card" style={loginCardStyle}>
                <h3>
                  LogIn or
                  <a onClick={this.toggleForms} style={{ color: "yellow" }}>
                    {" "}
                    Register
                  </a>
                </h3>

                <br />
                <form>
                  {/* Login Form  */}
                  <input
                    name="username"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    name="password"
                    value={this.state.password}
                    placeholder="password"
                    type="password"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <button type="submit" onClick={this.handleLogin}>
                    SUBMIT
                  </button>
                </form>
              </div>
            ) : (
              // New Account
              <div className="card" style={loginCardStyle}>
                Create Account or
                <a onClick={this.toggleForms}> LogIn</a>
                <br />
                <form>
                  <input
                    name="username"
                    value={this.state.username}
                    placeholder="New Username"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    name="password"
                    value={this.state.password}
                    placeholder="New Password"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    name="phone"
                    value={this.state.phone}
                    placeholder="Your phone number?"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <input
                    name="age"
                    value={this.state.age}
                    placeholder="Your age?"
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <button type="submit" onClick={this.handleSignup}>
                    SUBMIT
                  </button>
                </form>
              </div>
            )}
            <button onClick={this.toggleForms}>TEST</button>
            {/* Footer */}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default LogIn;

const loginCardStyle = {
  textAlign: "center",
  border: "solid 4px",
  margin: "20px",
  width: "300px"
};

const formStyle = {
  width: "150px",
  margin: "0px"
};
