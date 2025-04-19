const path = require("path")

// console.log("FILENAME: ", __filename)
// console.log("DIRNAME: ", __dirname)

const filePath = path.join("folder", "student", "data.txt")

console.log(filePath)

const parsedData = path.parse(filePath)
const resolvedPath = path.resolve(filePath)
const extName = path.extname(filePath)
const baseName = path.basename(filePath)
const dirName = path.dirname(filePath)

console.log({
    parsedData,
    resolvedPath,
    extName,
    baseName,
    dirName
})