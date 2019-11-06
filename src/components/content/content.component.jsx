import React from "react";
import "./content.styles.scss";
// here we passing a title props to Content function
const Content = ({ title }) => (
  <div className="content">
    <h1 className="title">{title}</h1>
    <span className="subtitle">SHOP NOW</span>
  </div>
);

export default Content;
