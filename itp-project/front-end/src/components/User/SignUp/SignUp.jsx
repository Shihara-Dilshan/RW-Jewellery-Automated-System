import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import "./../../../App.css";

import { storageRef } from "../../../firebase";
import M from "materialize-css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: undefined,
      profileimg: "",
    };
  }

  responseFacebook = async (response) => {
    console.log(response);

    let email = response.email;
    const call = await fetch(`/api/v2/customer/find/${email}`);
    const result = await call.json();
    console.log(result);

    if (result === undefined) {
      const reg = await fetch("/api/v2/customer/register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: email,
          firstName: response.name.trim().split(" ")[0],
          lastName: response.name.trim().split(" ")[1],
          profilePicture: response.picture.data.url,
        }),
      });

      console.log(reg);
    } else {
      sessionStorage.setItem("userId", result.customer_id);
      sessionStorage.setItem("email", response.email);
      sessionStorage.setItem("FirstName", response.name.trim().split(" ")[0]);
      sessionStorage.setItem("LastName", response.name.trim().split(" ")[1]);
      sessionStorage.setItem("profileImg", response.picture.data.url);
      sessionStorage.setItem("telephone", result.telephone);
      sessionStorage.setItem("address", result.address);
      this.props.history.push("/");
    }
  };

  componentClicked = () => {
    console.log();
  };

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  getStyle = () => {
    return {
      width: "20%",
    };
  };

  imageUpdalod = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
    } else {
      alert("please choose a profile picture");
    }
  };

  render() {
    return (
      <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                id="signUpImage"
                alt=""
                src="https://image.freepik.com/free-vector/account-concept-illustration_114360-409.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Signup</h4>
                <div className="row">
                  <div className="center-align center">
                    <p className="grey-text">
                      {" "}
                      If you already have an account with us, please login at
                      the <Link to="/login">login page</Link>
                    </p>
                  </div>
                  <br />
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="first_name" id="firstNameLabel">
                          First Name
                        </label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="last_name" id="lastNameLabel">
                          Last Name
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email" id="emailNameLabel">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="mobile" type="text" />
                        <label htmlFor="mobile" id="telephoneLable">
                          Telephone
                        </label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password" id="passwordLabel">
                          Password
                        </label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="cpassword"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="cpassword" id="cpasswordLabel">
                          Confirm Password
                        </label>
                      </div>
                    </div>
                    <div className="progress hide test">
                      <div className="indeterminate"></div>
                    </div>
                    <div className="row">
                      <div className="col s6">
                        <p>Choose an profile image</p>
                      </div>
                      <div className="col s6">
                        <input
                          type="file"
                          onChange={this.imageUpdalod}
                          placeholder="Upload an image"
                        />
                      </div>
                    </div>

                    <div className="center-align center">
                      <button
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                        onClick={this.signUp}
                      >
                        signup
                      </button>
                    </div>
                    <br />
                    <div className="container center-align">
                      <p>or else sign up with</p>
                      <br />
                    </div>

                    <div className="container center-align">
                      <FacebookLogin
                        appId="3204620366282734"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}
                      />
                      {""}
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

  signUp = async (e) => {
    await e.preventDefault();
    let isvalid = true;
    let emptyColumns = [];

    let name = SignUp.mytrim(document.getElementById("email").value);
    let firstName = SignUp.mytrim(document.getElementById("first_name").value);
    let lastName = SignUp.mytrim(document.getElementById("last_name").value);
    let telephone = SignUp.mytrim(document.getElementById("mobile").value);
    let password = SignUp.mytrim(document.getElementById("password").value);
    let cpassword = SignUp.mytrim(document.getElementById("cpassword").value);

    name.length === 0
      ? emptyColumns.push(document.getElementById("emailNameLabel"))
      : console.log("email is not empty");
    firstName.length === 0
      ? emptyColumns.push(document.getElementById("firstNameLabel"))
      : console.log("fname is not empty");
    lastName.length === 0
      ? emptyColumns.push(document.getElementById("lastNameLabel"))
      : console.log("lname is not empty");
    telephone.length === 0
      ? emptyColumns.push(document.getElementById("telephoneLable"))
      : console.log("mobile is not empty");
    password.length === 0
      ? emptyColumns.push(document.getElementById("passwordLabel"))
      : console.log("mobile is not empty");
    cpassword.length === 0
      ? emptyColumns.push(document.getElementById("cpasswordLabel"))
      : console.log("mobile is not empty");

    emptyColumns.length === 0 ? (isvalid = true) : (isvalid = false);

    if (isvalid) {
      //show the wait indicators
      let waitIndicator = document.querySelectorAll(".progress");
      waitIndicator.forEach((item) => {
        item.classList.remove("hide");
        item.classList.add("show");
      });

      //api call
      const reg = await fetch("/api/v2/customer/register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: name,
          firstName: firstName,
          lastName: lastName,
          telephone: telephone,
          pword: password,
        }),
      });

      const call = await fetch(`/api/v2/customer/find/${name}`);
      const result = await call.json();
      sessionStorage.setItem("userId", result.customer_id);
      sessionStorage.setItem("email", result.name);
      sessionStorage.setItem("FirstName", result.firstName);
      sessionStorage.setItem("LastName", result.lastName);
      sessionStorage.setItem("telephone", result.telephone);
      sessionStorage.setItem("address", result.address);

      const upload = storageRef
        .ref(`images/${this.state.image.name}`)
        .put(this.state.image);
      upload.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storageRef
            .ref("images")
            .child(this.state.image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ profileimg: url });
            })
            .then(() => {
              fetch(
                `/api/v2/customer/update/${sessionStorage.getItem("userId")}`,
                {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  method: "PUT",
                  body: JSON.stringify({
                    name: name,
                    firstName: firstName,
                    lastName: lastName,
                    telephone: telephone,
                    pword: password,
                    profilePicture: this.state.profileimg,
                  }),
                }
              );
            })
            .then(() => {
              waitIndicator.forEach((item) => {
                item.classList.remove("show");
                item.classList.add("hide");
              });
              M.toast({ html: "Successfully registered" });
              this.props.history.push("/");
              sessionStorage.setItem("profileImg", this.state.profileimg);
            });
        }
      );

      console.log(reg);
    } else {
      emptyColumns.forEach((emptyColumn) => {
        emptyColumn.classList.add("red-text");
      });

      setTimeout(() => {
        emptyColumns.forEach((emptyColumn) => {
          emptyColumn.classList.remove("red-text");
        });
      }, 2000);
    }
  };

  static mytrim = (inputString) => {
    return inputString.replace(/\s/g, "");
  };
}

export default SignUp;
