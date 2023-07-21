const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

module.exports = (req, res, next) => {
    const token = (req.headers.authorization).replace(/Bearer\s?/, '');
    if (!token) {
        res.status(401).json({ "message": "Utilizator Neautorizat" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decode.id;
    next();
};
