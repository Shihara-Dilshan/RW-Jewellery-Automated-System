import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = async (e) => {
    e.preventDefault();

    (function () {
      var cookies = document.cookie.split("; ");
      for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
          var cookieBase =
            encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) +
            "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" +
            d.join(".") +
            " ;path=";
          var p = window.location.pathname.split("/");
          document.cookie = cookieBase + "/";
          while (p.length > 0) {
            document.cookie = cookieBase + p.join("/");
            p.pop();
          }
          d.shift();
        }
      }
    })();

    sessionStorage.clear();
    this.props.history.push("/");
  };

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "50px",
      marginBottom: "40px",
    };
  };

  getStyle = () => {
    return {
      marginTop: "20px",
    };
  };

  static removeWhiteSpaces = (inputString) => {
    return inputString.replace(/\s/g, "");
  };

  render() {
    return (
      <div className="container loginForm test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Logout</h4>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="Lemail"
                          type="text"
                          className=""
                          value="All the current session Data will be delected"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="alert2"
                          type="text"
                          className=""
                          value="You will be logged out"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="alert3"
                          type="text"
                          className=""
                          value="Any existing items fom cart will be lost"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="center-align center">
                      <button
                        onClick={this.logout}
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                      >
                        Log out
                      </button>
                    </div>
                    <br />
                    <div className="center-align center">
                      <Link to="/">
                        <p className="teal-text">Cancel and go back</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;
