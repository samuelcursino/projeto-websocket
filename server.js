const express = require('express')
const app = express()

app.use(express.static('public'))

const http = require('http').Server(app)
const serverSocket = require('socket.io')(http)

const porta = 8080

http.listen(porta, function(){
    console.log('servidor on em http://localhost:' + porta);
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})