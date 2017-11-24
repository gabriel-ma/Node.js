var person = {
	name:"gabriel",
	lastname:"machado",
	greet:function(){
		console.log("Hello " + this.name + " " + this.lastname);
	}
}

person.greet();

console.log(person.name);
person.name = "giovanna";
person.greet();