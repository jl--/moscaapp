var mosca = require('mosca');

var settings = {
	port: 1884
};

var server = new mosca.Server(settings);
function setup() {
	console.log('Mosca server is up and running.');
}
server.on('ready',setup);

server.on('clientConnected', function(client){
	console.log('clientConnected: ', client.id);
});

server.on('published', function(packet, client){
	console.log('published: ', packet.payload);
});

server.on('subscribed', function(topic, client){
	console.log('subscribed: ', topic);
});

server.on('clientDisconnecting', function(client){
	console.log('clientDisconnecting: ', client.id);
});

server.on('clientDisconnected', function(client){
	console.log('clientDisconnected: ', client.id);
});
