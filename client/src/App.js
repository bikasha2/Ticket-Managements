import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Dashboard from './Components/UserDashboard/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import ViewTicket from "./Components/Ticket/ViewTicket";
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/tickets" component={ViewTicket} />
        
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
