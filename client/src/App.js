import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import AnimalCard from "./components/animals";
import zooAnimals from "./zooAnimals.json";
//import { Link } from "react-router-dom";
import LogIn from "./pages/login";
import Test from "./pages/test";

class App extends Component {
  state = {
    zooAnimals
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
