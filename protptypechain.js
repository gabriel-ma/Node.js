function Person(name, lastname){
	this.name = name;
	this.lastname = lastname;
}
Person.prototype.greet = function(){
	console.log("Hi " + this.name  +" " + this.lastname);
}
var gabriel = new Person("Gabriel", "Machado");
//console.log(gabriel.name);
//gabriel.greet();
