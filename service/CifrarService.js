const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const CryptoJS = require('crypto-js')

exports.secretKey = 'eFfFsJ2023*';

secretKey = 'eFfFsJ2023*';
iv = CryptoJS.enc.Utf8.parse('1234567890123456');

exports.checkPassword = function checkPassword(password, encrypted) {
    return bcrypt.compareSync(password, encrypted);
}

exports.encryptPassword = function encryptPassword(data) {
    const saltRounds = 10;
    let salt = bcrypt.genSaltSync(saltRounds);
    let encodedPassword = bcrypt.hashSync(data, salt);
    return encodedPassword;
}

exports.decryptFrontData = function decryptFrontData(data) {
    const decrypted = CryptoJS.AES.decrypt(data, secretKey, { iv: iv });
    let originalText = decrypted.toString(CryptoJS.enc.Utf8);
    return originalText;
}