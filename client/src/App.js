import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import AnimalCard from "./components/animals";

//import { Link } from "react-router-dom";
import LogIn from "./pages/login";
import Test from "./pages/test";
import "./App.css";
import Play from "./pages/play";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
<<<<<<< HEAD
=======
              {/* Login Page/ Landing Page Route */}
>>>>>>> master
            <Route exact path="/" component={LogIn} />
              {/* Game Play Page Route */}
            <Route exact path="/play" component={Play} />
               {/* Testing Route */}
            <Route exact path="/test" component={Test} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
