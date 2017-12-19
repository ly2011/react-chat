import React, { Component } from 'react';
import keydown from 'react-keydown';
import styles from './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  @keydown('enter')
  login() {
    const username = this.loginInput.value ? this.loginInput.value.trim() : '';
    if (username === '') {
      return false;
    }
    localStorage.setItem('username', username);
    this.props.history.push({
      pathname: 'chatting',
      search: '?tab=2',
    });
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className={styles.login}>
        <i className={styles['icon-chat']} />
        <h2 className={styles['input-label']}>请输入您的名字</h2>
        <input
          type="text"
          ref={loginInput => (this.loginInput = loginInput)}
          className={styles['input-text']}
        />
      </div>
    );
  }
}
export default Login;
