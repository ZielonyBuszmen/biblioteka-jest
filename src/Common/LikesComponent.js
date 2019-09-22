import React from 'react';

export default function LikesComponent({ likes, imageId, addLikeHandler }) {
  return (
    <button
      onClick={() => addLikeHandler(imageId)}
      className='mr-1 Tile__body-like-button'>
      <span role='img' aria-label='like'>👍</span>
      {likes}
    </button>
  );
}
