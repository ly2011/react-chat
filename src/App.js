import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';

import asyncComponent from './AsyncComponent';
// import logo from './logo.svg';

import './App.css';

const history = createHistory();

const Login = asyncComponent(() =>
  import(/* webpackChunkName: 'Login' */ './components/Login/Login')
);

const Chatting = asyncComponent(() =>
  import(/* webpackChunkName: 'Chatting' */ './components/Chatting/Chatting')
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Route
            render={({ location }) => {
              console.log(`location.pathname: ${location.pathname}`);

              return (
                <div key={location.pathname}>
                  <Route location={location} exact path="/" component={Login} />
                  <Route
                    location={location}
                    exact
                    path="/login"
                    component={Login}
                  />
                  <Route
                    location={location}
                    exact
                    path="/chatting"
                    component={Chatting}
                  />
                </div>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
