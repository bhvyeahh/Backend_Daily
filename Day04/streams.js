const {Readable, Writable} = require("stream")

const readableStream = new Readable(
    {
        highWaterMark: 4,
        read(){}
    }
)

const writableStream = new Writable({
    write(streamData){
        console.log("Writing: ",streamData.toString())
    }
})

readableStream.on("data", (chunk)=>{
    console.log("Chunk:", chunk.toString()) // to read data in string format
    writableStream.write(chunk)

})

readableStream.push("Hello")