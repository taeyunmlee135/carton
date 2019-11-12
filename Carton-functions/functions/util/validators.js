
// helper function to determine if str is empty (no non whitespace chars)
const isEmpty = (string) => { 
    if(string.trim() == '') return true;
    else return false;
  }
  
  // helper function to determine if email is valid email
  const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false; 
  };

  exports.validateSignupData = (data) => {
      // validate data 
    let errors = {}; // init empty errors object
  
    // validate email address 
    if(isEmpty(data.email)) {
      errors.email = 'Must not be empty' 
    }
    else if (!isEmail(data.email)) {
      errors.email = 'Must be a valid email address'
    }
  
    // validate password 
    if(isEmpty(data.password)) errors.password = 'Must not be empty';
    if(data.password !== data.reenterPassword) errors.reenterPassword = 'Passwords must match';
  
    // validate username and cartonID
    if(isEmpty(data.username)) errors.username = 'Must not be empty';
    if(isEmpty(data.cartonID)) errors.cartonID = 'Must not be empty'
  
  
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
  }

  exports.validateLoginData = (data) => {
    let errors = {};
  
    if(isEmpty(data.email)) errors.email = 'Must not be empty';
    if(isEmpty(data.password)) errors.password = 'Must not be empty';
  
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
  }
  