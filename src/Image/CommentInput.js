import React from 'react';

class CommentInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
    };
  }

  addCommentAction = (event) => {
    event.preventDefault();
    const { imageId, addCommentHandler } = this.props;
    const { author, text } = this.state;
    addCommentHandler(imageId, author, text);
    this.setState({ author: '', text: '', });
  };

  render() {
    return (
      <div>
        <div className="input-group my-3">
          <form onSubmit={this.addCommentAction}>
            <input
              type="text"
              className="form-control"
              placeholder="Komentarz"
              onChange={(e) => this.setState({ text: e.target.value })}
              value={this.state.text}
            />

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Autor"
                onChange={(e) => this.setState({ author: e.target.value })}
                value={this.state.author}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                >
                  Wyślij
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentInput;
