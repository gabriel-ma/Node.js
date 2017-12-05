//creating a buffer, if no encode is specified, utf8 is default
var buff = new Buffer('Dale boy', 'utf8');
console.log(buff);
//buffer can be converted to json
console.log(buff.toJSON());
//buffers can behave arraylike
console.log(buff[3]);
//buffers has a finite size of data, if I write something, its overwrites the existing value with the new
buff.write("iae ");
console.log(buff.toString());

