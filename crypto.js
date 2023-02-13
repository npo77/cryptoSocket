const crypto = require('crypto');

// Mã hóa
function encrypt(text, password) {
  let cipher = crypto.createCipher('aes-256-cbc', password);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Giải mã
function decrypt(encrypted, password) {
  let decipher = crypto.createDecipher('aes-256-cbc', password);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Sử dụng
let text = "This is a secret message.";
let password = "password123";

let encrypted = encrypt(text, password);
console.log("Encrypted: " + encrypted);

let decrypted = decrypt(encrypted, password);
console.log("Decrypted: " + decrypted);
