var fs = require('fs');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost');
var Promise = require('promise');

var delay = 1*1000;

var currentIter = 0;
var maxIter = 100000000;
var exec = require('child_process').exec;
var cmdStr="mosquitto_pub -h localhost -t \"presence\" -m \"Hello2 MQTT\"";

var task = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            // do something
            console.log('task', currentIter );
            resolve();          
        }, 100);
    });
}

var run = function() {
    task().then(function(){
        setTimeout(function(){
            ++currentIter;
            console.log(cmdStr);
            exec(cmdStr,function(err,stdout,stderr){
                if(err) {
                    console.log('error');
                }
                    else
                    {
                     console.log("success");
                    }
            })
            if (currentIter < maxIter)
                run();
        }, delay)
    });
}

run();