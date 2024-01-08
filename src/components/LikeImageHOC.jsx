import React from "react";
import HOC from "./HOC";

const like = ({ likeHandle, likeCount }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Image {likeCount}</button>
    </div>
  );
};

export default HOC(like);