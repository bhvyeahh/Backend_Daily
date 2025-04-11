const {Transform} = require("stream")
const fs = require("fs")


// ------------String Processing---------------
const readStream = fs.createReadStream("sample.txt")
const writeStream = fs.createWriteStream("output.txt")


// Bad approach for string processing
readStream.on("data",(chunk)=>{
    const modifiedWords = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Bhavya")
    writeStream.write(modifiedWords)
})

readStream.pipe(writeStream)

// Good approach for string processing

const transformStream = new Transform({
    transform(chunk, encoding, callback){
 const modifiedWords = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Bhavya")
 callback(null , modifiedWords)

    }
})

readStream.pipe(transformStream).pipe(writeStream)


// res.end()


// transformStream ---> Readable and writable stream both