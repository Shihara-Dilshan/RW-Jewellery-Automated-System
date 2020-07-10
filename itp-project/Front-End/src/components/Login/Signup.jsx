import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Signup extends Component {
  state = {};

  sendData = (event) => {
    event.preventDefault();
    let indidicator = document.querySelector("#indicator");
    let name = document.getElementById("first_name").value;
    let lastname = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    axios
      .post("https://noobstackbacktest.herokuapp.com/NoobStack/api/users", {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((res) => {
        indidicator.classList.remove("determinate");
        indidicator.classList.add("indeterminate");

        setTimeout(() => {
          M.toast({ html: "Succesfully registered" });
          indidicator.classList.add("determinate");
          indidicator.classList.remove("indeterminate");
          document.getElementById("first_name").value = "";
          document.getElementById("last_name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="progress">
                <div className="determinate grey darken-3" id="indicator"></div>
              </div>
              {/* <div className="center-align">
                <button
                  className="btn grey darken-3 col s12"
                  id="SBTN"
                  onClick={this.sendData}
                >
                  Sign Up
                </button>
              </div> */}
              <div>
                <button
                  className="btn loginBtns grey darken-3"
                  id="SBTN"
                  onClick={this.sendData}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
