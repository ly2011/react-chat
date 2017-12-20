const express = require('express');

const port = process.env.PORT || 3001;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

io.on('connection', (socket) => {
  console.log('one user conneted');
  // 群聊
  socket.on('sendGroupMsg', (data) => {
    console.log(`one user send a message: ${data}`);
    socket.broadcast.emit('receiveGroupMsg', data);
  });

  // 上线
  socket.on('online', (name) => {
    console.log(`${name} 上线了`);
    socket.broadcast.emit('online', name);
  });
});

app.get('/', (req, res) => {
  res.send({
    code: 200,
    message: 'Welcome to Chat',
  });
});

const serverContainer = {
  start() {
    server.listen(port);
  },
};

module.exports = serverContainer;
