//attach the constructor
function Over(){
    this.overing = "Hello 4";
    this.over = function(){
        console.log(this.overing);
    }
}

module.exports = Over;