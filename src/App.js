import React from 'react';

import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;