import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  // Need to implement setState later

  render() {
    return (
      <div className="NotFound">
        <div>PAGE NOT FOUND</div>
        <a href="/#/search" className="go-to-home-page">Go to Home Page</a>
      </div>
    )
  }

}

export default NotFound;
