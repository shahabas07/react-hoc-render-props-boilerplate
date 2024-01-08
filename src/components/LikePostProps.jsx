import React from "react";
import Props from "./Props";

export default function like() {
  return (
    <Props>
      {({ like, handleLike }) => {
        return (
          <button onClick={handleLike}>Like Post {like}</button>
        );
      }}
    </Props>
  );
}
