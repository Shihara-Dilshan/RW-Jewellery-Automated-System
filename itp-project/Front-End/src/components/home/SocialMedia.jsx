import React, { Component } from "react";
import "../../App.css";

class SocialMedia extends Component {
  state = {};
  render() {
    return (
      <section className="section section-follow grey darken-3 white-text center scrollspy test">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Follow NoobStack</h4>
              <p>Follow us on social media for </p>
              <a
                href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                target="_blank"
                className="white-text"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-4x"></i>
              </a>
              <a
                href="https://github.com/Shihara-Dilshan"
                target="_blank"
                className="white-text"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-4x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shihara-dilshan-5297711a4/"
                target="_blank"
                className="white-text"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-4x"></i>
              </a>
              <a
                href="https://stackoverflow.com/users/13052660/shihara-dilshan"
                target="_blank"
                className="white-text"
                rel="noopener noreferrer"
              >
                <i className="fab fa-stack-overflow fa-4x"></i>
              </a>
              <a
                href="https://www.instagram.com/shihara_ggez97/"
                target="_blank"
                className="white-text"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-4x"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                target="_blank"
                className="white-text"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SocialMedia;
