io.on('connection',socket=>{
        socket.broadcast.emit('left',users[socket.id]);
