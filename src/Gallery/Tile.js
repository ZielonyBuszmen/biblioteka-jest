import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  render() {
    const { src, likes, date, comments, onClick } = this.props;
    return (
      <div className='Tile' onClick={onClick}>
        <img className='Tile__image' src={src} alt='dynamic'/>
        <div className='Tile__body'>
          <button className='mr-1 Tile__body-like-button'>
            <span role='img' aria-label='likes'>👍</span> {likes}
          </button>
          <button className='mr-1 Tile__body-comment-button'>
            <span role='img' aria-label='comments'>💬</span> {comments.length}
          </button>
          <small className='Tile__body-date'>{date}</small>
        </div>
      </div>
    );
  }
}

export default Tile;
