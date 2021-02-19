const socket = io();
const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');


socket.on('connect', () => {
    //console.log('connected')
    lbloffline.style.display = 'none'
    lblonline.style.display = ''
})

socket.on('disconnect', () => {
    //console.log('disconnected')
    lblonline.style.display = 'none'
    lbloffline.style.display = ''
})

socket.on('send-message', (payload) => {
    console.log(payload)
})



btnSend.addEventListener( 'click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: '',
        date: new Date().getTime()
    }
    socket.emit('send-message', payload, (id) => {
        console.log('From server', id);
    })
})