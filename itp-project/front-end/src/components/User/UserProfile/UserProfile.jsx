import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      emailComfirmationStatus: "",
      firstName: "required *",
      lastName: "required *",
      email: "required *",
      mobile: "required *",
      address: "required *",
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("email") === null) {
      this.props.history.push("/");
    } else {
      setTimeout(() => {
        this.setState({
          emailComfirmationStatus:
            "your email addess hasn't validated yet.Click here to validate your email",
        });
      }, 2000);
      this.setState({
        firstName: sessionStorage.getItem("FirstName"),
        lastName: sessionStorage.getItem("LastName"),
        email: sessionStorage.getItem("email"),
        mobile: sessionStorage.getItem("telephone"),
        address: sessionStorage.getItem("address"),
      });
    }
  }

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  containerStyle = () => {
    return {};
  };

  render() {
    return (
      <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div
              className="card-image hide-on-small-only"
              style={this.containerStyle()}
            >
              <img
                alt=""
                src="https://image.freepik.com/free-vector/personal-settings-concept-illustration_114360-2659.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Profile</h4>
                <div className="row">
                  <p className="red-text align center">
                    {this.state.emailComfirmationStatus}
                  </p>
                  <br />
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6 disabled">
                        <input
                          id="first_name"
                          type="text"
                          disabled
                          className="validate"
                          value={this.state.firstName}
                        />
                        <label
                          htmlFor="first_name"
                          id="firstNameLabel"
                          className="active"
                        >
                          First Name
                        </label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                          disabled
                          value={this.state.lastName}
                        />
                        <label
                          htmlFor="last_name"
                          id="lastNameLabel"
                          className="active"
                        >
                          Last Name
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          value={this.state.email}
                          disabled
                        />
                        <label
                          htmlFor="email"
                          id="emailLabel"
                          className="active"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="mobile"
                          type="text"
                          value={this.state.mobile}
                          disabled
                        />
                        <label
                          htmlFor="mobile"
                          id="mobileLabel"
                          className="active"
                        >
                          Mobile
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="address"
                          type="text"
                          value={this.state.address}
                          disabled
                        />
                        <label
                          htmlFor="address"
                          id="addressLabel"
                          className="active"
                        >
                          Address
                        </label>
                      </div>
                    </div>
                    <div className="center-align center">
                      <div className="row">
                        <div className="col s6 m6">
                          <Link to="/update">
                            <button
                              className="btn center-align grey darken-3"
                              style={{ width: "100%" }}
                            >
                              Update Profile
                            </button>
                          </Link>
                        </div>
                        <div className="col s6 m6">
                          <Link to="/updatepassword">
                            <button
                              className="btn center-align grey darken-3"
                              style={{ width: "100%" }}
                            >
                              Change Password
                            </button>
                          </Link>
                        </div>
                      </div>
                      <Link to="/update"></Link>
                      <Link to="myDetails">
                        <button
                          className="btn center-align purple lighten-2"
                          style={{ width: "100%" }}
                        >
                          View my Purchuses
                        </button>
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

export default UserProfile;
