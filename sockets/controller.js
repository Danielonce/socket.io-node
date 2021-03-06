

const socketController = (socket) => {

        console.log('Connected', socket.id)

    socket.on('disconnect', () => {
        console.log('Disconnected', socket.id)
    })

    socket.on('send-message' , (payload, callback) => {
        
        const id = new Date().getTime();
        callback(id);
        
        socket.broadcast.emit('send-message', payload);
    })

}

module.exports = {
    socketController
}