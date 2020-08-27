import React, { Component } from "react";
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

  componentDidMount(){
    setTimeout(() => {
      this.setState({emailComfirmationStatus:"your email addess hasn't validated yet.Click here to validate your email"});
    }, 2000);
    this.setState({
      firstName: sessionStorage.getItem("FirstName"),
      lastName: sessionStorage.getItem("LastName"),
      email: sessionStorage.getItem("email"),
      mobile: sessionStorage.getItem("telephone"),
      address: sessionStorage.getItem("address"),
    });
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
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/Layout/online-registration-concept_23-2147980578.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Profile</h4>
                <div className="row">
                  <p className="red-text align center">{this.state.emailComfirmationStatus}</p><br/>
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6 disabled">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                          value={this.state.firstName}
                        />
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                          value={this.state.lastName}
                        />
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
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="mobile" type="text" value={this.state.mobile} />
                      </div>
                    </div>

                    <div class="input-field col s12">
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                        value={this.state.address}
                      ></textarea>
                    </div>
                    <div className="center-align center">
                      <button
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                      >
                        Update Profile
                      </button>
                      <br/><br/>
                      <button
                        className="btn center-align purple lighten-2"
                        style={{ width: "100%" }}
                      >
                        View my Purchuses
                      </button>
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
