import React from "react";
import {Header} from "./Header.jsx"
import {Home} from "./Home.jsx"
import {List} from "./List.jsx"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


export const App = (props) => {
  return (
  <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:terminator" component={List}/>


    </Switch> 


  </Router>
  
  );
};