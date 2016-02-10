var socket = io();

socket.on('connect', function (){
	console.log('Connected to Socket.io Server!');
});

socket.on('message', function (message){
	console.log('New Message');
	console.log(message.text);
});