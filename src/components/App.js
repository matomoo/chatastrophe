import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import './app.css';

class App extends Component {
  constructor () {
    super();
    this.state = { user: null };

    this.componentDidMount = () => {
      firebase.auth().onAuthStateChange((user) => {
        if (user) {
          this.setState({ user });
        }
      });
    }

  }

  render() {
    return (
      <div id="container" >
        <LoginContainer />
      </div>
    );
  }
}

export default App;
