const http = require("http")
const fs = require("fs")


const PORT = 8080

const myServer = http.createServer((request, response)=>{
   const Log = `${Date.now()}: & From ${request.url} New Request Received\n`
   fs.appendFile("log.txt", Log, (err)=>{
    if(err){ 
        console.error("error writing to the log file: ", err)
        response.statusCode = 500
        response.end("Internal server Error")
        return;
    }
    response.end("Your logged maintained")
   })
})

myServer.listen(PORT, ()=>{
    console.log(`Server is connected at ${PORT}`)
})
