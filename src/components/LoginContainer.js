import React, { Component } from 'react';
import Header from './Header';

class LoginContainer extends Component {
  constructor(){
    super();
    this.state = { email: '', password: '',  error : '' };

    this.handleEmailChange = (event) => {
      this.setState({ email: event.target.value });
    };

    this.handlePasswordChange = (event) => {
      this.setState({ password: event.target.value });
    };

    this.login = () => {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {console.log(res); })
        .catch(err => {
          if (err.code === 'auth/user-not-found' ) {
            this.signup();
          } else {
            this.setState({ error: 'Error logging in.' })
          }
        });
    }

    this.signup = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( res => {
          console.log(res);
        })
        .catch( error => {
          console.log(error);
          this.setState({ error: 'Error signing up.'});
        });
    }

    this.handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ error: '' });
      if(this.state.email && this.state.password){
        this.login();
      } else {
        this.setState({ error: 'Please fill in both fields' });
      }
    };
  }

  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <p>Sign in or sign up by entering your email and password</p>
          <input
            type="textx"
            onChange={this.handleEmailChange}
            value={this.state.email}
            placeholder="Your email" />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            placeholder="Your password" />
            <p className="error">{this.state.error}</p>
          <button className="red light" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
