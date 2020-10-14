import React from 'react';
import './App.css';
import icon from './img/greed.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.username = 'username';
    this.password = 'password';
  }

  validate = (e) => {
    let value = e.value, message = '', valid = false;

    if (e.value.length <= 0) {
      message = e.name + ' cannot be empty!';
    }

    this.setState({
      [e.name]: {
        value: value,
        message: message
      }
    });

    if (message.length <= 0) {
      valid = true;
    }

    return valid;
  }

  handleChange = (e) => {
    this.validate(e.currentTarget);
  }

  handleSubmit = (e) => {
    let valid = true;
    e.preventDefault();
    for (let index = 0; index < e.currentTarget.length - 1; index++) {
      if (!this.validate(e.currentTarget[index])) {
        valid = false;
      }
    }

    if (valid) {
      //api goes here
      console.log({
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <>
        <img src={icon} className="Icon"/>
        <div className="Card">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name={this.username} onChange={this.handleChange} placeholder={this.username}></input>
            <div className="Error">{this.state.username == null ? "" : this.state.username.message}</div>
            <input type="password" name={this.password} onChange={this.handleChange} placeholder={this.password}></input>
            <div className="Error">{this.state.password == null ? "" : this.state.password.message}</div>
            <input type="submit" value="Login"></input>
          </form>
        </div>
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;