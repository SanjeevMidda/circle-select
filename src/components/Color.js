import React from "react";

const Color = ({ color, changeColor }) => {
  let styles = {
    backgroundColor: color,
  };

  return <div className="color" style={styles} onClick={changeColor}></div>;
};

export default Color;
