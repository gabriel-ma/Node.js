//expose only the methods and properties I want
var helloing = "Hiiiiii!!!1";
function hello(){
    console.log(helloing);
}
module.exports = {
    hello:hello
}