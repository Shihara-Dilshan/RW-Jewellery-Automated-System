import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  // eslint-disable-next-line
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Navbar from "./components/Layout/Nevbar";
import Slider from "./components/Home/Slider/Slider";

function App() {
  return (
    <Router history={HashRouter}>
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route path="/" component={Slider} />
      </div>
    </Router>
  );
}

export default App;
