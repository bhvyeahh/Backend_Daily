const crypto = require("crypto")

const randomValues = crypto.randomBytes(8)
console.log(randomValues.toString("hex"))

// -----------------CreateHash------------------

// -------logging into the app/software---------

// username is saved as it is
// password --> Hashed;  eventPlatform does not know


const hashValue = crypto.createHash("sha256").update("Bhavya").digest("hex")

const inputValue = "Bhavya"

const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")
console.log(hashValue === matchValue)