import React from 'react';
import './404.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className="notFound-wrapper">
        <h1>Oops!</h1>
        <span>404 - page not found</span>
      </div>
    );
  }
}

export default NotFound;
