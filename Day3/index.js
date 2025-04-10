const EventEmitter = require("events")
const emitter = new EventEmitter()
const fs = require("fs")

const eventCounts = {
    login: 0,
    logout:0,
    purchase:0,
    pfp:0,
}

const logFile = "eventlog.json"

// reading the logFile / eventlog.json
if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile, "utf-8")
    Object.assign(eventCounts, JSON.parse(data)) // copies the value from one source to another
}

// write or update kr rhi hai logFile mai / eventlog.json
function saveCounts(){
    fs.writeFileSync(logFile, JSON.stringify(eventCounts,null,2))
}

emitter.on("LOGIN", (args)=>{
    eventCounts.login++
    console.log(`${args.username} logged in successfully`)
    saveCounts()
})
emitter.on("LOGOUT", (args)=>{
    eventCounts.logout++
    console.log(`${args.username} logged out successfully`)
    saveCounts()
})
emitter.on("PFP", (args)=>{
    eventCounts.pfp++
    console.log(`${args.username}'s profile picture changed successfully`)
    saveCounts()
})
emitter.on("PURCHASE", (args)=>{
    eventCounts.purchase++
    console.log(`${args.username} purchased ${args.item} successfully`)
    saveCounts()
})

emitter.emit("LOGIN", {
    username: "bhvyeah"
})
emitter.emit("LOGOUT", {
    username: "bhvyeah"
})
emitter.emit("PFP", {
    username: "bhvyeah"
})
emitter.emit("PURCHASE", {
    username: "bhvyeah",
    item: "Tshirt"
})

emitter.on("SUMMARY", ()=>{
    console.log("\nEvent Summary:")
    console.log(`Login counts are: ${eventCounts.login}`);
    console.log(`Logout counts are: ${eventCounts.logout}`);
    console.log(`pfp changes counts are: ${eventCounts.pfp}`);
    console.log(`purchasing counts are: ${eventCounts.purchase}`);
    
})
emitter.emit("SUMMARY") 

