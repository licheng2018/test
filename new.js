var fs = require('fs');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
var i=1;

client.on('connect', function () {
  //suscrib presence topic
  client.subscribe('presence');
  //send topic message
 // client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  //send message to blockchain
  console.log(message.toString());
  var timeout_ms = 20000; // 2 seconds
                   var timeout = setTimeout(function() {

		//console.log('finished'+i+'th');
			//   i++;
			     process.exit();
                        	   // console.log("timed out!");

                   }, timeout_ms);
});

