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
                src="https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/2697616/pexels-photo-2697616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/1430956/pexels-photo-1430956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/1352783/pexels-photo-1352783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
          </div>
          <div className="row">
            <div class="col s12 m3">
              <img
                src="https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/3091638/pexels-photo-3091638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                class="materialboxed responsive-img"
                width="650"
              />
            </div>
            <div className="col s12 m3">
              <img
                src="https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
