const io = require('socket.io')(3000, {
  cors: {
    origin: 'http://localhost:8100',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('Socket.io is now connected');
  socket.emit('test', 'You are now connected with local socket server');
  socket.on('stroke', (data) => {
    console.log(data);
    socket.emit('strokeResult', data);
  });
});
