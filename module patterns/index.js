//overwrite module.exports with a function.
var mod1 = require("./module1");
mod1();

//add a function to exports object
var mod2 = require("./module2");
//or
var mod2_ = require("./module2").hello;
mod2.hello();
mod2_();

//overwrite exports with an object
var mod3 = require("./module3");
mod3.over();
//the second require will return a cached version of module3.js
mod3.overing = "ué, mudou?";
var mod3_ = require("./module3");
mod3_.over();

//the variable will receive the constructor
var Mod4 = require("./module4");
var mod_over = new Mod4();
mod_over.over();

var mod5 = require("./module5");
mod5.hello();