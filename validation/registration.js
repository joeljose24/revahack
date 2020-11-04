const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validationRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.repassword = !isEmpty(data.repassword) ? data.repassword : "";

  //Check name field
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required!";
  }

  //Checking email field
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required!";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email!";
  }

  //Checking password fields
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required!";
  }
  if (Validator.isEmpty(data.repassword)) {
    errors.password = "Retype password to confirm.";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "Password must be at least 6 characters.";
  }
  if (!Validator.equals(data.password, data.repassword)) {
    errors.repassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
