import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

import "./../../App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tab1: "Login",
      tab1Route: "/login",
      tab2: "Sign Up",
      tab2Route: "/signup",
      cart: [],
      cartUpated: false,
    };
  }

  viewCart = () => {
    if (sessionStorage.getItem("cart") !== null) {
      this.setState({
        cart: JSON.parse(sessionStorage.getItem("cart")),
      });
    }
  };

  removeItem = (e) => {
    e.preventDefault();
    let removeID =
      e.target.parentElement.parentElement.parentElement.childNodes[2]
        .innerHTML;

    let currentCart = JSON.parse(sessionStorage.getItem("cart"));
    currentCart = currentCart.filter((item) => {
      return item.id !== removeID;
    });
    sessionStorage.setItem("cart", JSON.stringify(currentCart));
    this.setState({
      cartUpated: true,
    });
    let tableRow = e.target.parentElement.parentElement.parentElement;
    tableRow.style.display = "none";
    console.log(currentCart);
  };

  componentDidMount() {
    setInterval(() => {
      if (sessionStorage.getItem("email") !== null) {
        this.setState({
          tab1: "Account",
          tab1Route: "/profile",
          tab2: "Logout",
          tab2Route: "/logout",
        });
      }
    }, 200);
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {
      edge: "right",
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul id="slide-out" class="sidenav" style={{ width: "50%" }}>
            <li>
              <a href="#!">
                <i class="material-icons">add_shopping_cart</i>My{" "}
                <span className="teal-text">Cart</span>
              </a>
            </li>
            <li>
              <div className="row">
                <div className="col s12 m6">
                  <button style={{ width: "100%" }} className="btn" disabled>
                    Total Price : Rs 12000.00
                  </button>
                </div>
                <div className="col s12 m6">
                  {" "}
                  <button style={{ width: "100%" }} className="btn">
                    Check Out
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div class="divider"></div>
            </li>
            <li>
              <a href="#!" class="subheader">
                Current items
              </a>
            </li>
            {this.state.cart.map((item) => {
              return (
                <li>
                  <div className="row">
                    <h3 className="gfhide">{this.props.jew_id}</h3>
                    <div className="col s9">
                      <table style={{ width: "100%", color: "black" }}>
                        <tbody>
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.id}</td>
                            <td>
                              <button className="btn" style={{ width: "100%" }}>
                                <i
                                  class="material-icons"
                                  style={{ lineHeight: "30px" }}
                                >
                                  monetization_on
                                </i>
                              </button>
                            </td>
                            <td>
                              <button className="btn" style={{ width: "100%" }}>
                                <i
                                  class="material-icons"
                                  style={{ lineHeight: "30px" }}
                                  onClick={this.removeItem}
                                >
                                  remove_shopping_cart
                                </i>
                              </button>
                            </td>
                            <td>{this.props.jew_id}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col s3"></div>
                  </div>
                </li>
              );
            })}
            <button style={{ width: "100%" }} className="btn" disabled>
              Total Price :
            </button>
          </ul>

          <div className="nav-wrapper grey darken-3">
            <Link to="/">
              <li className="brand-logo">RW Jewellery</li>
            </Link>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">About us</a>
              </li>
              <li>
                <a href="badges.html">Jewellery</a>
              </li>
              <li>
                <a href="collapsible.html">Collections</a>
              </li>
              <li>
                <Link to="/onlinestore">Online Store</Link>
              </li>
              <li>
                <a href="mobile.html">Services</a>
              </li>

              <li>
                <a href="mobile.html">Contact</a>
              </li>

              <li>
                <Link to={this.state.tab1Route}>{this.state.tab1}</Link>
              </li>
              <li>
                <Link to={this.state.tab2Route}>{this.state.tab2}</Link>
              </li>
              <li>
                <img
                  alt=""
                  src={sessionStorage.getItem("profileImg")}
                  style={{
                    height: "30px",
                    width: "30px",
                    verticalAlign: "-10px",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                />
              </li>
              <li>
                <a
                  href="#!"
                  id="cartSection"
                  data-target="slide-out"
                  class="sidenav-trigger"
                  onClick={this.viewCart}
                >
                  <i class="material-icons">add_shopping_cart</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">About us</a>
          </li>
          <li>
            <a href="badges.html">Jewellery</a>
          </li>
          <li>
            <a href="collapsible.html">Collections</a>
          </li>
          <li>
            <a href="mobile.html">Online Store</a>
          </li>
          <li>
            <a href="mobile.html">Services</a>
          </li>
          <li>
            <a href="mobile.html">Contact</a>
          </li>
          <li>
            <a href="mobile.html">Login</a>
          </li>
          <li>
            <a href="mobile.html">Sign up</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
