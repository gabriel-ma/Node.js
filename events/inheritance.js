'use strict';
var events = require('events');
var util = require('util');

/*function Earth(){
    this.gravity = 9.8;
}
//add events methods to earth
//see prototype chain
util.inherits(Earth, events);

Earth.prototype.calculateWeight = function(mass){
    console.log('The weight is:')    
    this.emit('calculate', mass);
}*/
class Earth extends events{
    constructor(){
        super();
        this.gravity = 9.8
    }
    calculateWeight(mass){
        console.log('The weight is:');
        this.emit('calculate', mass);
    }
}
var earth = new Earth();

earth.on('calculate', function(mass){
    console.log(this.gravity * mass);
});
earth.calculateWeight(12);