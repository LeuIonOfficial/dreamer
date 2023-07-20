const { body } = require('express-validator');

const registerValidator = [
    body('email', "Textul introdus nu este un Email").isEmail(),
    body('password', 'Parola trebuie să aibă cel puțin 8 caractere').isLength({ min: 8 }),
];

module.exports = registerValidator;
