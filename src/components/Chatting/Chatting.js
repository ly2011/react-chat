import React, { Component } from 'react';
import io from 'socket.io-client';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { random } from '../../utils/util';
import styles from './chatting.css';

// 本地化，中文时间显示
moment.locale('zh-cn');

const socketURL =
  process.env.NODE_ENV === 'production'
    ? 'https://microzz.com:3000/'
    : 'http://localhost:3001/';

const socket = io.connect(socketURL);
class Chatting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: Math.random()
        .toString(36)
        .substr(2),
      avatarUrl: `../../assets/images/${random(21)}.svg`,
      msgs: [],
      inputContent: '',
      emojis: [
        '😂',
        '🙏',
        '😄',
        '😏',
        '😇',
        '😅',
        '😌',
        '😘',
        '😍',
        '🤓',
        '😜',
        '😎',
        '😊',
        '😳',
        '🙄',
        '😱',
        '😒',
        '😔',
        '😷',
        '👿',
        '🤗',
        '😩',
        '😤',
        '😣',
        '😰',
        '😴',
        '😬',
        '😭',
        '👻',
        '👍',
        '✌️',
        '👉',
        '👀',
        '🐶',
        '🐷',
        '😹',
        '⚡️',
        '🔥',
        '🌈',
        '🍏',
        '⚽️',
        '❤️',
        '🇨🇳',
      ],
      isShowEmoji: false,
      isRedAI: false,
    };
    this.showEmoji = this.showEmoji.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
  }
  showEmoji() {
    this.setState({ isShowEmoji: !this.state.isShowEmoji });
  }
  hideEmoji(e) {
    // 阻止合成事件与最外层document上的事件间的冒泡
    e.nativeEvent.stopImmediatePropagation();

    // 阻止合成事件间的冒泡
    // e.stopPropagation();
    this.setState({ isShowEmoji: false });
  }
  insertText(str) {
    str += ' ';
    this.textarea.value += str;
    setTimeout(() => {
      // this.textarea.scrollTop = this.textarea.scrollHeight;
    }, 0);
  }
  sendMsg() {
    this.setState({ isShowEmoji: false });

    const msgContent = this.textarea.value ? this.textarea.value.trim() : '';
    if (msgContent === '') {
      return false;
    }
    const msg = {
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
      loc: '广东省深圳市南山区',
      from: this.state.username,
      content: msgContent,
      avatarUrl: this.state.avatarUrl,
    };
    socket.emit('sendGroupMsg', msg);
    msg.self = true;
    const msgs = this.state.msgs;
    msgs.push(msg);
    this.setState({ msgs });
    this.textarea.value = '';
    setTimeout(() => {
      this.chattingContent.scrollTop = this.chattingContent.scrollHeight;
    }, 0);
  }
  componentDidMount() {
    const { username } = this.state;
    socket.emit('online', username);
    socket.on('online', (name) => {
      if (!name) {
        return;
      }
      let oOnline = document.createElement('div');
      oOnline.className = 'online';
      oOnline.innerText = `${name} 上线了`;
      this.chattingContent.appendChild(oOnline);
      this.chattingContent.scrollTop = this.chattingContent.scrollHeight;
    });

    // 接受群聊消息
    socket.on('receiveGroupMsg', (data) => {
      const msgs = this.state.msgs;
      msgs.push(data);
      this.setState({ msgs });
      setTimeout(() => {
        this.chattingContent.scrollTop = this.chattingContent.scrollHeight;
      }, 0);
    });

    this.chattingContent.scrollTop = this.chattingContent.scrollHeight;
  }
  render() {
    const chatBackClass = '';
    return (
      <div className={styles.chatting}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>群聊</title>
        </Helmet>
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
            <i
              className={styles['icon-menu']}
              onClick={() => this.props.history.push('/')}
            />
          </div>
        </div>

        {/* 聊天内容区域 */}
        <div
          className={styles['chatting-content']}
          ref={chattingContent => (this.chattingContent = chattingContent)}
          onClick={e => this.hideEmoji(e)}
        >
          {this.state.msgs ? <ChattingContent msgs={this.state.msgs} /> : null}
        </div>

        {/* 输入信息区域 */}
        <div className={styles['chatting-input']}>
          {this.state.isShowEmoji ? (
            <EmojiComp
              insertText={str => this.insertText(str)}
              emojis={this.state.emojis}
            />
          ) : null}
          <div className={styles.emoji}>
            <i
              onClick={() => this.showEmoji()}
              className={styles['icon-emoji']}
            />
          </div>
          <textarea
            ref={textarea => (this.textarea = textarea)}
            placeholder="左上角还有智能机器人哦"
          />

          <button className={styles['send-btn']} onClick={() => this.sendMsg()}>
            发送
          </button>
        </div>
      </div>
    );
  }
}

const EmojiComp = (props) => {
  const { emojis, insertText } = props;
  return (
    <div className={styles['emoji-display']}>
      <ul>
        {emojis.map((item, index) => (
          <li onClick={() => insertText(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChattingContent = (props) => {
  const { msgs } = props;
  return (
    <div>
      {msgs.map((msg, index) => {
        if (msg.self) {
          return <SelfChattingContent msg={msg} key={index} />;
        }
        return <OtherChattingContent msg={msg} key={index} />;
      })}
    </div>
  );
};
const SelfChattingContent = (props) => {
  const { msg } = props;
  return (
    <div className={`${styles['chatting-item']} ${styles.self} clearfix`}>
      <div className={styles['msg-date']}>{msg.date}</div>
      <div className={styles['msg-form']}>
        <span className={styles.loc}>[{msg.loc}]</span>
        <span className={styles['msg-author']}>{msg.from}</span>
        <img src={msg.avatarUrl} alt="" />
      </div>
      <div className={styles['msg-content']}>{msg.content}</div>
    </div>
  );
};
const OtherChattingContent = (props) => {
  const { msg } = props;
  return (
    <div className={`${styles['chatting-item']} ${styles.other} clearfix`}>
      <div className={styles['msg-date']}>{msg.date}</div>
      <div className={styles['msg-form']}>
        <img src={msg.avatarUrl} alt="" />
        <span className={styles.loc}>[{msg.loc}]</span>
        <span className={styles['msg-author']}>{msg.from}</span>
      </div>
      <div className={styles['msg-content']}>{msg.content}</div>
    </div>
  );
};

export default Chatting;
