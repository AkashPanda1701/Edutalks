import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('Socket.IO starting')
    const io = new Server(res.socket.server)
    io.on('connection', (socket) => {
      console.log('Socket.IO connected')
      socket.on('disconnect', () => {
        console.log('Socket.IO disconnected')
      })
      socket.on('message', (data) => {
        console.log(data)
      } )
    })
    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler