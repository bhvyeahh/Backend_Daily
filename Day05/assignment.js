const crypto = require("crypto")


const algorithm = "aes-256-cbc";
const secretKey = crypto.randomBytes(32); // 32 bytes key
const iv = crypto.randomBytes(16); // 16 bytes IV

const data = {
    name: "Bhavya",
    age: 21
}

const dataString = JSON.stringify(data)

function encrypt(text){
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv) // module ya algo set krta hai ki kaise encrypt krna hai
    let encrypted = cipher.update(text, "utf-8", "hex") // Yeh encrypt krta hai
    encrypted += cipher.final("hex") // final process complete krta hai
    return encrypted; // return encryption
}

function decrypt(encryptedText){
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv)
    let decrypted = decipher.update(encryptedText, "hex", "utf-8")
    decrypted += decipher.final("utf-8")
    return decrypted;
}
const encryptedData = encrypt(dataString)
console.log('encrypted Data is: \n', encryptedData);

const decryptedData = decrypt(encryptedData)
console.log('decrypted Data is: \n', decryptedData);
