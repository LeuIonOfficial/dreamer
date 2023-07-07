import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config({path: './config/config.env'})

export default (req, res, next) => {
    const token = (req.headers.authorization).replace(/Bearer\s?/,'')
    if(token)
    {
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.userEmail = decode.email
            next()
        }
        catch (err){
            console.log(err)
            res.status(401).json({"message": "Utilizator Neautorizat"})
        }
    }
    else{
        res.status(401).json({"message": "Utilizator Neautorizat"})
    }

};

