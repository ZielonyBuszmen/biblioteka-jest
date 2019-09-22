import React, { Component } from 'react';
import Tile from './Tile';

class Gallery extends Component {

  onImageClick = (imageId) => {
    this.props.gotoImageHandler(imageId);
  };

  imageListRenderer = (imageList) => {
    return imageList.map(
      (image, id) => <Tile
        key={id}
        src={image.image}
        date={image.date}
        likes={image.likes}
        comments={image.comments}
        onClick={() => this.onImageClick(id)}
      />
    );
  };
  

  render() {
    return (
      <div className='row my-4'>
        <span>Obrazek:</span>
        {this.imageListRenderer(this.props.imageList)}
      </div>
    );
  }
}

export default Gallery;
