import React from 'react';
import './Image.css';
import LikesComponent from '../Common/LikesComponent';
import Comment from './Comment';
import CommentInput from './CommentInput';

class Image extends React.Component {

  commentsRenderer = (comments) => {
    return comments.map(
      (comment, id) => <Comment author={comment.author} text={comment.text} key={id}/>
    );
  };

  render() {
    const { image, likes, comments } = this.props.image;
    const { imageId, addCommentHandler, addLikeHandler } = this.props;

    return (
      <div className='row my-4 Image'>
        <div className="col-8">
          <img className='image' src={image} alt='dynamic'/>
        </div>
        <div className="col-4">
          <div className="likesNumber mb-4">
            <div className='my-2'>Polubienia:</div>
            <LikesComponent addLikeHandler={addLikeHandler} likes={likes} imageId={imageId}/>
          </div>

          <div className="comments">
            Komentarze:
            {this.commentsRenderer(comments)}
          </div>

          {<CommentInput imageId={imageId} addCommentHandler={addCommentHandler}/>}

        </div>
      </div>
    );
  }
}

export default Image;
