//overwrite exports with an object
function Over(){
    this.overing = "Hello 3";
    this.over = function(){
        console.log(this.overing);
    }
}

module.exports = new Over();