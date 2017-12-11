//callback is a function that we assume will be executed at some point
function first(callback){
    console.log('Hello my friend.');
    data = {
        name:'Gabriel'
    }
    callback(data);
}
first(function(data) {
    console.log('WHAT JUST HAPPENED?');
    console.log(data.name + ', WHAT JUST HAPPENED?')
});
first(function(data) {
    console.log('WAIT, AGAIN?');
    console.log('WAIT, AGAIN? HELP ME ' + data.name );
});
