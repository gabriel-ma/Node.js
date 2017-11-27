//to use node event emitter, use:
var Emitter = require('events');
var config = require('./config').events;
//var Emitter = require('./emitter');
var obj = new Emitter();

obj.on(config.BYE, function(){
    console.log('GTFO');
});

obj.on(config.BYE, function(){
    console.log('See ya nigga');
});

obj.emit(config.BYE);