import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp/SignUp";
import Login from "./components/User/Login/Login";
import UserProfile from "./components/User/UserProfile/UserProfile";
import confirmEmail from "./components/User/UserProfile/confirmEmail";
import PurchaseContainer from "./components/User/userPurchase/PurchaseContainer";
import OnlineStore from "./components/OnlineStore/OnlineStore";
import Buy from "./components/Buy/Buy";
import IButton from "./components/Home/IButton";
import ServiceHome from "./components/Service/ServiceHome";
import RequestDelivery from "./components/Delivery/RequestingDelivery/RequestDelivery";
import Update from "./components/User/UserProfile/Update";
import ForgetPassword from './components/User/ForgetPassword/ForgetPassword';
import GetRecoverCode from './components/User/ForgetPassword/GetRecoverCode';
import Logout from './components/User/Logout/Logout';
import RequestDesign from './components/Service/Design/RequestDesign';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <IButton />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/confirmEmail" exact component={confirmEmail} />
          <Route path="/myDetails" exact component={PurchaseContainer} />
          <Route path="/onlinestore" exact component={OnlineStore} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/services" exact component={ServiceHome} />
          <Route path="/requestdelivery" exact component={RequestDelivery} />
          <Route path="/update" exact component={Update} />
          <Route path="/forgetpassword" exact component={ForgetPassword} />
          <Route path="/recover" exact component={GetRecoverCode} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/requestdesign" exact component={RequestDesign} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
