const { EventEmitter } = require('stream');
const emitter = new EventEmitter



emitter.on('messageLogged', (eventArg) => {
    console.log("listener called", eventArg);
})

emitter.emit('messageLogged', {id:1, url: "http//"})
