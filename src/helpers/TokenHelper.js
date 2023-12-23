const jwt = require('jsonwebtoken');

exports.EncodeToken = (email, user_id) => {
    let PAYLOAD = { email: email, id: user_id }
    let KEY = "ABC-123-XYZ"
    let EXPIRY = { expiresIn: '24h' }

    return jwt.sign(PAYLOAD, KEY, EXPIRY);
}

exports.DecodeToken = (token) => {
    let KEY = "ABC-123-XYZ"
    try {
        return jwt.verify(token, KEY);
    }
    catch (err) {
        return null;
    }
}