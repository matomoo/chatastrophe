import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class UserContainer extends Component {
  render() {
    return (
      <div id="UserContainer">
        <Header>
          <Link to="/">
            <button className="red">
              Back to Chat
            </button>
          </Link>
        </Header>
        <h1>Hello from User Container for User {this.props.match.params.id}</h1>
      </div>
    );
  }
}
