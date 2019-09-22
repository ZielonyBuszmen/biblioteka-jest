import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery/Gallery';
import Image from './Image/Image';
import { getAllImages, addComment, addLike } from './helpers';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: getAllImages(),
      imageId: null,
    };
  }

  gotoImageHandler = (imageId) => {
    this.setState({ imageId });
  };

  gotoMainSiteHandler = () => {
    this.setState({ imageId: null });
  };

  addLikeHandler = (imageId) => {
    addLike(imageId);
    this.refreshComponentState();
  };

  addCommentHandler = (imageId, author, text) => {
    addComment(imageId, author, text);
    this.refreshComponentState();
  };

  refreshComponentState = () => {
    this.setState({ imageList: getAllImages(), });
  };

  render() {
    const { imageId, imageList } = this.state;
    const isShowImage = imageId !== null;
    return (
      <div>
        <Header isShowImage={isShowImage} gotoMainSiteHandler={this.gotoMainSiteHandler}/>
        <div className='container'>
          {
            isShowImage
              ? <Image
                image={imageList[imageId]}
                imageId={imageId}
                addCommentHandler={this.addCommentHandler}
                addLikeHandler={this.addLikeHandler}
              />
              : <Gallery
                imageList={imageList}
                gotoImageHandler={this.gotoImageHandler}
              />
          }

        </div>
      </div>
    );
  }
}

export default App;
