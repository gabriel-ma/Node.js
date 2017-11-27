var util = require('util');

//person constructor, initializing name and last namee
function Person(){
    this.name = 'Gabriel';
    this.lastname = 'Machado';
}
//add a greet function to this object
Person.prototype.hello = function(){
    console.log('Hello ' + this.name + ' ' + this.lastname);
}

function Medic(){
    //calls the person constructor
    Person.call(this);
    this.number = '12355';
}
util.inherits(Medic, Person);
var medic = new Medic();
medic.hello();