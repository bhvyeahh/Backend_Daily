const http = require("http")
const fs = require("fs")
const PORT = 8080
const server = http.createServer((req,res)=>{
// const file = fs.readFileSync("sample.txt")
// const readableStream = fs.createReadStream("sample.txt")
// readableStream.pipe(res)

    // BADWAY to upload or share the large file on server
// res.end(file)
})
//  Downloading the data in chunks

// res.end()

// two types of stream----- readable stream and writable stream

// Left side 
// 2nd method--------to copy the large data

// ------------------------BAD WAY--------------------
// const file = fs.readFileSync("sample.txt")
// fs.writeFileSync("output.txt", file)
// res.end()



// ------------------------GOOD WAY--------------------
// const readStream = fs.createReadStream("sample.txt")
// const writeStream = fs.createWriteStream("output.txt")

// readStream.on("data", (chunk)=>{
//     console.log("Chunks: ", chunk)
//     writeStream.write(chunk)
// })




server.listen(8080, ()=>{
    console.log(`server is connected at ${PORT}`)
}) 
