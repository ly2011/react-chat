import React, { Component } from "react";
import styles from './login.css';

class Login extends Component {
  render() {
    return (<div className={styles.login}>
      <h2 className={styles.title}>这里是登录界面</h2>
    </div>)
  }
}
export default Login