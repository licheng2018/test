var fs = require('fs');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
var Promise = require('promise');
var num=0;
var delay = function(millis) {
    var promise = new Promise(function (resolve, reject) {
      setTimeout(function() {  resolve(); }, millis);
    });
    return promise;
  };

  var p=delay(3*1000);
while(1)
{
//var exec = require('child_process').exec;
 var cmdStr="mosquitto_pub -h localhost -t \"presence\ -m \"Hello2 MQTT\"";
 
 p=p.then(function() {

    console.log(cmdStr+num);
    num=num+1;
    return delay(1*10);
 })
 /*exec(cmdStr,function(err,stdout,stderr){
    if(err) {
        console.log('error');
    }
        else
        {
         console.log("success");
        }
})*/
/*var timeout_ms = 2000; // 2 seconds
                   var timeout = setTimeout(function() {
			
			   process.exit();
                        	   // console.log("timed out!");

                   }, timeout_ms);*/
}