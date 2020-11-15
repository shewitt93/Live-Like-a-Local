import React from "react";
export default ({ title, description, image, likes, username }) => (
  <div>
    <a>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {" "}
        <p>{username}</p>
        <a>{likes}</a>
      </div>
    </a>
  </div>
);
