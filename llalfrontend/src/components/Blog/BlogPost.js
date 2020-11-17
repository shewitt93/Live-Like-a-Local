import React from "react";
export default ({ id, title, description, image, likes, username }) => (
  <div>
    <a href={`http://localhost:3000/Blog/${id}`}>
      <img src={image}></img>
      <h3>{title}</h3>
      <p className="" dangerouslySetInnerHTML={{ __html: description }}></p>
    </a>
    <div>
      {" "}
      <p>{username}</p>
      <p>{likes}</p>
    </div>
  </div>
);
