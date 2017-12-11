var fs = require('fs');

//Synchronous execution, the v8 will wait till this finishs to continue
var file = fs.readFileSync(__dirname + '/file.txt', 'utf8');
console.log(file);

//Asynchronous execution, the v8 will continue to execute the lines of code and at the end, executes the callback
var read = fs.readFile(__dirname + '/file.txt', 'utf8', function(err, data){
    console.log(data)
})
console.log('ahhh');