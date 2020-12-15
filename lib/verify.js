//make functions to elimitate repetitive if statements
const validateInput = value =>{
    if (value != "") {
        return true;
    }else{
        return "Please answer the question.";
    }
}
const validateEmail = value =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
        {return true
        }else{
            return "This email address is invalid!";
        }
}
const validatePhone = value => {
    if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)){
        return true
    }else{
        return "please enter a 10 digit phone number"
    }
}
const validateId = value =>{
   if(/^\d{6}(\s*,\s*\d{6})*$/.test(value)){
       return true
   }else{
       return "please enter a six digit number"
   }
}

module.exports = {validateEmail, validateId,validatePhone,validateInput};
