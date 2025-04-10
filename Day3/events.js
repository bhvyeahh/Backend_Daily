const EventEmitter = require("events")

const emitter = new EventEmitter()


// key methods

// on   (eventName, Listener) --- create

emitter.on("GREET", (args)=>{
    console.log(`Hello ${args.username} and your id is ${args.id}`)
})

emitter.emit("GREET", {
    username: "bhyeahh",
    id: "1aed23vajbvgnw"
})

// emit (eventName, [args])--- execute

