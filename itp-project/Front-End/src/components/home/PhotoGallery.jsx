import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class PhotoGalley extends Component {
  state = {};
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".materialboxed");
      M.Materialbox.init(elems);
    });
    return (
      <section id="gallery" className="section section-gallery scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Photo</span>
            Gallery
          </h4>
          <div className="row">
            <div className="col s12 m3">
              <img
                alt=""
                className="materialboxed responsive-img"
                width="650"
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/apple-apple-devices-blur-cellphone-269323.jpg"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/photo-of-imac-near-macbook-1029757.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/macbook-pro-turned-off-205421.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/photo-of-nike-shoes-1598505.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/samsung-samsung-galaxy-s6-edge-plus-edge-plus-s6-edge-47261.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/black-dslr-camera-mounted-on-black-tripod-212372.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/apple-technology-ipad-computer-38568.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ball-court-design-game-209977.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
          </div>
          <div className="row">
            <div class="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/tomica-cars-collections-163696.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/mobile-phone-samsung-edge-samsung-galaxy-s6-edge-plus-50614.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/mobile-phone-samsung-edge-samsung-galaxy-s6-edge-plus-50614.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/chanel-paris-eua-de-parfum-bottle-755992.jpg"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PhotoGalley;
