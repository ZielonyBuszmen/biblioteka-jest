import React from 'react';
import './Comment.css';

export default function Comment({ author, text }) {
  return <div className="Comment mx-2">
    <div className="author mr-1">
      {author}
    </div>
    <div className="comment">
      {text}
    </div>
  </div>
}
