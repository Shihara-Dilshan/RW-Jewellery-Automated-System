import React, { Component } from "react";
import "./../../App.css";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
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
                  <br />
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6 disabled">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                          value="dilshan"
                        />
                        <label htmlFor="first_name">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                          value="shihara"
                        />
                        <label htmlFor="last_name">Last Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          value="shihara@gmail.com"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="mobile" type="text" value="0750935556" />
                        <label htmlFor="mobile">Telephone</label>
                      </div>
                    </div>

                    <div class="input-field col s12">
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                        value="55/f Alapalavala handessa"
                      ></textarea>
                      <label for="textarea1">Textarea</label>
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
