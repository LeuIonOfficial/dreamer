import {body} from 'express-validator'

const registerValidator = [
    body('email',"Textul intordus nu este un Email").isEmail(),
    body('password','parola trebuie sa aiba mai mult de 8 caractere').isLength({min: 8}),
]

export default registerValidator


