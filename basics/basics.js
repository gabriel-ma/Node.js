var mod = require('./module');
//js basics
//first class functions in js
/*function myName(name){
	return "Gabriel";
}

function sayMyName(fn){
	console.log("Just say my name:");
	console.log(fn());
}
sayMyName(myName);

//anonymous function
var what = function(){
	console.log("What?");
}
what();

sayMyName(function (){
	return "SAY WHAT AGAIN, SAY WHAT AGAIN I DARE YOU, I DOUBLE DARE YOU MOTHERFUCKER SAY WHAT ONE MORE GODDAMN TIME!";
});*/
//calls function provided by the module
//mod();
var arr = [];
arr.push(function(){
	console.log(1);
});
arr.push(function(){
	console.log(2);
});
arr.push(function(){
	console.log(3);
});
arr.forEach(function(item){
	item();
});