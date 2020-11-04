const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    //Converting empty fields to empty strings for validator functions
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";

    //Checking email field
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } else if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Checking password field
    if(Validator.isEmpty(data.password))  {
        errors.password = "Password is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};