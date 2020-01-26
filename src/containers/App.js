import React from "react";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Movies from "../components/Movies";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/actors" component={Actors} />
        <Route exact path="/directors" component={Directors} />
      </div>
    </Router>
  );
};

export default App;
