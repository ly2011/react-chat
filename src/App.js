import React, { Component } from 'react';
import asyncComponent from './AsyncComponent';
// import logo from './logo.svg';
import './App.css';

const Login = asyncComponent(() => import(/* webpackChunkName: 'Login' */ './components/Login/Login'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  }
}

export default App;
