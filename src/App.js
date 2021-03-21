import React from "react";
import "./App.css";
import Nav from "./Nav";
import People from "./People";
import Starships from "./Starships";
import StarshipsDetail from "./StarshipsDetail";
import PersonDetail from "./PersonDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/people" exact component={People} />
          <Route path="/people/:item" component={PersonDetail} />
          <Route path="/starships" exact component={Starships} />
          <Route path="/starships/:item" component={StarshipsDetail} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcom to Star Wars API project</h1>
    </div>
  );
};

export default App;
