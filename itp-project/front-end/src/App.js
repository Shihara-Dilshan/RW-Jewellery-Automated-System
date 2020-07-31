import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from './components/Layout/Footer'
import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp/SignUp";
import Login from "./components/User/Login/Login";
import UserProfile from './components/User/UserProfile/UserProfile';
import confirmEmail from './components/User/UserProfile/confirmEmail';
import PurchaseContainer from './components/User/userPurchase/PurchaseContainer';
import RequestDelivery from './components/Delivery/RequestingDelivery/RequestDelivery'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/confirmEmail" exact component={confirmEmail} />
          <Route path="/myDetails" exact component={PurchaseContainer} />
          <Route path="/delivery" exact component={RequestDelivery} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
