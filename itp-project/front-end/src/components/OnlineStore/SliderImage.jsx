import React from "react";

const SliderImage = (props) => {
  return (
    <li>
      <img alt="" src={props.image} />
      <div className={props.classPosition}>
        <h3>{props.title}</h3>
        <h5 className="light grey-text text-lighten-3">{props.description}</h5>
      </div>
    </li>
  );
};

export default SliderImage;
