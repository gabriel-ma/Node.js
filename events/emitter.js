class Emitter {
    constructor() {
        this.events = {};
    }
    //events is a array of events and each event is a array of functions
    //type is the name of the event, like goodbye
    //listenter is the function that will be executed after calling the event
    on(type, listener) {
        //if type exists in the array, return itself, otherwise, return a new array
        this.events[type] = this.events[type] || [];
        //push the function inside the array
        this.events[type].push(listener);
    }
    //calls the event
    emit(type) {
        //check if the event exists in the array
        if (this.events[type]) {
            //loop trough the functions of the event and execute them
            this.events[type].forEach(function (listener) {
                listener();
            });
        }
    }
}
module.exports = Emitter;