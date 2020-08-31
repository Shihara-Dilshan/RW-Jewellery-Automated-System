import React from "react";

const Footer = () => {
  return (
    <footer
      className="page-footer grey darken-3 section scrollspy"
      id="introduction"
    >
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">RW Jewellery</h5>
            <p className="grey-text text-lighten-4">
              Total solution for any jewellery
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Follow us</h5>
            <div className="socialMedia">
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                  target="_blank"
                  className="white-text"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-3x"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Shihara-Dilshan"
                  target="_blank"
                  className="white-text"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-3x"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/shihara-dilshan-5297711a4/"
                  target="_blank"
                  className="white-text"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-3x"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://stackoverflow.com/users/13052660/shihara-dilshan"
                  target="_blank"
                  className="white-text"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-stack-overflow fa-3x"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/shihara_ggez97/"
                  target="_blank"
                  className="white-text"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-3x"></i>
                </a>
              </div>
              <div>
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
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2020 Copyright Text</div>
      </div>
    </footer>
  );
};

export default Footer;
