let validateInput = value =>{
    if (value != "") {
        return true;
    }else{
        return "Please answer the question.";
    }
}
let validateEmail = value =>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
        {return true
        }else{
            return "This email address is invalid!";
        }
}
let validatePhone = value => {
    if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)){
        return true
    }else{
        return "please enter a 10 digit phone number"
    }
}
let validateId = value =>{
   if(/^\d{6}(\s*,\s*\d{6})*$/.test(value)){
       return true
   }else{
       return "please enter a six digit number"
   }
}
