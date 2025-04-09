// console.log("hello")

const fs = require("fs")
const os = require("os")

// ----------------------fs writeFileSync-------------------Write-------

// fs.writeFileSync("./test.txt", "hello mittar bhai")

// ----------------------fs writeFile------------------------Write-------

// fs.writeFile("./test.txt", "mittar mere", (err)=>{
//     console.log(err)
// })


// ----------------------fs readFileSync---------------------Read-------
// const res = fs.readFileSync("./test.txt", "utf-8")
// console.log(res)


// ----------------------fs readFile-------------------------Read-------
// fs.readFile("./test.txt", "utf-8", (error, response)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(response);
        
//     }
// })



// ----------------------fs appendFileSync---------------------Update/Append-------
// fs.appendFileSync("./test.txt", new Date().toDateString())


// ----------------------fs appendFile-------------------------Update/Append-------

// fs.appendFile("./new.txt", `this is bhavya's history logged in at ${new Date().toDateString()}\n`, (err,res)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(res)
//     }
// })


// -------------------cores------------------

console.log(os.cpus().length)


