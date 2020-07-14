import React, { Component } from "react";
import Category from "../categoryCard/Category";
import "materialize-css/dist/css/materialize.min.css";

class CategoryContainer extends Component {
  state = {};

  render() {
    return (
      <section id="popular" className="section section-popular scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Popular</span> Courses
          </h4>
          <div className="row">
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/Top-10-Tips-To-Learn-JavaScript.jpg",
                title: "Vanilla JS",
                Descripion:
                  "Learn vanilla Java Script for start your full stack dream",
                link: "javascript",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1633292_981a.jpg",
                title: "ES6",
                Descripion: "Learn updated syntax for Modern Java Script",
                link: "javasscript",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/jquery-undefined.png",
                title: "jQuary",
                Descripion: "Learn jQuary to reduce Boilerplate codes",
                link: "javascripst",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1_B9uqLg7-TM2-bAIwa7Zxuw.png",
                title: "",
                Descripion:
                  "React the most powerfull font end frame work for developing font-end UI",
                link: "javascrsipt",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/the-seo-guide-to-angular.png",
                title: "",
                Descripion:
                  "Google's Angular. It is also a frame work for developing fron-end UIs.",
                link: "javascsript",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1_xdo0UBpyszvD7-7EH4TkIA.png",
                title: "Node JS",
                Descripion: "Node.js google's V8 engine for back-end",
                link: "javascrispt",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryContainer;
