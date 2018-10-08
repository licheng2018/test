var fs = require('fs');
//var call =require('../../blockchain/Hyperledger/test2.js');
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
var writableStream = fs.createWriteStream('./sensordata.yaml');

var message ={
CHANNEL_NAME:'mychannel',
USER_NAME:'Admin@org1.example.com',
MSPID:'Org1MSP',
PRIVATE_KEY:'./certs/peer/msp/keystore/1da4c964007adc53382c3a67cdf0198ef6f506c2a202fcb4bbea858b8b929902_sk',
SIGN_CERT:'./certs/peer/msp/signcerts/peer0.org1.example.com-cert.pem',
PEER_ADDRESS:'peer0.org1.example.com:7051',
PEER_ADDRESS_GRPC:'grpcs://peer0.org1.example.com:7051',
PEER_SSL_TARGET:'peer0.org1.example.com',
ORDERER_SSL_TARGET:'orderer.example.com',
ORDERER_ADDRESS:'grpcs://orderer.example.com:7050',
CHAINCODE_ID:'demo',
CHANNEL_ID:'mychannel',
LISTENING_ADDRESS:'grpcs://0.0.0.0:7051',
BLOCKSIZE:5
//writableStream.write(message.toString());
}

writableStream.write(message.toString());

/*
client.on('connect', function () {

  //suscrib presence topic
  client.subscribe('presence');
});

 client.on('message', function (topic, message) {
 writableStream.write(message.toString());
 console.log(message.toString());
 process.exit();
});


	
// call.parse();
 var exec = require('child_process').exec;
var cmdStr="cd  /home/ubuntu/module/blockchain/Hyperledger;node test.js";

// var cmdStr="cd  ../../blockchain/Hyperledger;node 42-test.js";
 exec(cmdStr,function(err,stdout,stderr){
    if(err) {
        console.log('error');
    }
        else
	 {
         console.log("success");
        }
}

);
  client.end();
});
*/
