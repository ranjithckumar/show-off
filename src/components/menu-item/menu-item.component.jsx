import React from "react";
import "./menu-item.styles.scss";
import Content from '../content/content.component';
// here we passing a title, imageUrl and id as a props
const MenuItem = ({ title, imageUrl,id }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className="menu-item">
        <Content key={id} title={title} /> 
{/*         
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div> */}
  </div>
);

export default MenuItem;
