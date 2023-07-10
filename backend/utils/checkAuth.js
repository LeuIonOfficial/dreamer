import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config({path: './config/config.env'})

export default (req, res, next) => {
    const token = (req.headers.authorization).replace(/Bearer\s?/,'')
    if(!token)
    {
        res.status(401).json({"message": "Utilizator Neautorizat"})
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decode.id
    next()
};

