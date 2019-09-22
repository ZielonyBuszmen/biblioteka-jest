import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    const { isShowImage, gotoMainSiteHandler } = this.props;
    return (
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <button className="navbar-brand d-flex align-items-center">
              {isShowImage ? <strong onClick={gotoMainSiteHandler}>Powrót do galerii</strong> : <strong>Album</strong>}
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
