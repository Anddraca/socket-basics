var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('User connected via socket.io');

	socket.on('message', function (message){
		console.log('Message Received: ' + message.text);

		//sends it to everyone but the person that sent it
		//socket.broadcast.emit('message', message);
		message.timestamp = moment().valueOf();
		io.emit('message', message);
	});

	//both these should have a timestap timestamp...a JS timestap(milliseconda)

	socket.emit('message', {
		text: 'Welcome to the Chat App',
		timestamp: moment().valueOf()
	});
});

http.listen(PORT, function(){
	console.log('server Started:');
});