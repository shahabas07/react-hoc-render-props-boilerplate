import React from "react";
import HOC from "./HOC";

const LikePost = ({ likeHandle, likeCount }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Post {likeCount}</button>
    </div>
  );
};

export default HOC(LikePost);