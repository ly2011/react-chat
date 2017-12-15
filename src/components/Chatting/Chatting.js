import React, { Component } from 'react';
import styles from './chatting.css';

class Chatting extends Component {
  componentDidMount() {
    console.log(222);
  }
  render() {
    const chatBackClass = '';
    return (
      <div className={styles.chatting}>
        {/* 聊天界面头部 */}
        <div className={styles['chatting-header']}>
          <div className={styles['chatting-back']}>
            <i className={chatBackClass} />
          </div>
          <div className={styles['chatting-title']}>
            <h2>
              <i className={styles['icon-group']} />群聊
            </h2>
          </div>
          <div className={styles['chatting-menu']}>
            <i className={styles['icon-menu']} />
          </div>
        </div>

        {/* 聊天内容区域 */}
        <div
          className={styles['chatting-content']}
          ref={chattingContent => (this.chattingContent = chattingContent)}
        >
          <div>
            {/* self */}
            <div
              className={`${styles['chatting-item']} ${styles.self} clearfix`}
            >
              <div className={styles['msg-date']}>2017-12-12</div>
              <div className={styles['msg-form']}>
                <span className={styles.loc}>loc</span>
                <span className={styles['msg-author']}>from</span>
                <img src="" alt="" />
              </div>
              <div className={styles['msg-content']}>content</div>
            </div>

            {/* other */}
            <div
              className={`${styles['chatting-item']} ${styles.other} clearfix`}
            >
              <div className={styles['msg-date']}>2017-12-12</div>
              <div className={styles['msg-form']}>
                <img src="" alt="" />
                <span className={styles.loc}>loc</span>
                <span className={styles['msg-author']}>from</span>
              </div>
              <div className={styles['msg-content']}>content</div>
            </div>
          </div>
        </div>

        {/* 输入信息区域 */}
        <div className={styles['chatting-input']}>
          <div className={styles['emoji-display']}>
            <ul />
          </div>
          <div className={styles.emoji}>
            <i className={styles['icon-emoji']} />
          </div>
          <textarea
            ref={textarea => (this.textarea = textarea)}
            placeholder="左上角还有智能机器人哦"
          />
          <button className={styles['send-btn']}>发送</button>
        </div>
      </div>
    );
  }
}

export default Chatting;
