import React from 'react';
import Props from './Props';

export default function LikeImage() {
  return (
    <Props>
      {({ like, handleLike }) => (
        <button onClick={handleLike}>Like Image {like}</button>
      )}
    </Props>
  );
}