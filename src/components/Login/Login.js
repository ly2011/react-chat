import React, { Component } from 'react';
import keydown from 'react-keydown';
import { Helmet } from 'react-helmet';
import styles from './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  @keydown('enter')
  login() {
    const username = this.loginInput.value ? this.loginInput.value.trim() : '';
    console.log(`username: ${username}`);
    if (username === '') {
      return false;
    }
    localStorage.setItem('username', username);
    this.props.history.push({
      pathname: 'chatting',
      search: '?tab=2',
    });
  }
  componentDidMount() {}
  render() {
    return (
      <div className={styles.login}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>登录</title>
        </Helmet>
        <i className={styles['icon-chat']} />
        <h2 className={styles['input-label']}>请输入您的名字</h2>
        <input
          type="text"
          ref={loginInput => (this.loginInput = loginInput)}
          className={styles['input-text']}
          onKeyDown={this.login}
        />
      </div>
    );
  }
}
export default Login;
