import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Redirect } from "react-router";
// import Login from "../components/Login";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    isAuth: false,
    login: false
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
      // pls remove console logs. easy peasy way to get haxxored
      console.log(res.data);
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
              <div>
                LogIn
                <br />
                <form>
                  <input
                    name="username"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.handleInputChange}
                  />
                  <input
                    name="password"
                    value={this.state.password}
                    placeholder="password"
                    onChange={this.handleInputChange}
                  />
                  <button type="submit" onClick={this.handleLogin}>
                    SUBMIT
                  </button>
                </form>
              </div>
            ) : (
              <div>
                Signup
                <br />
                <form>
                  <input
                    name="username"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.handleInputChange}
                  />
                  <input
                    name="password"
                    value={this.state.password}
                    placeholder="password"
                    onChange={this.handleInputChange}
                  />
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
