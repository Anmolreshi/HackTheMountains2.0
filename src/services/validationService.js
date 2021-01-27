/**
 *
 * Features Required ( MUST ) 
 * Logic
 * Step 1 : Identify the validation service
 * 1 for Email Validation
 * 2 for Name Validation ( cannot include numbers)
 * 3 for GitHub Link Validation, must start with https://github.com/
 * 4 for Resume Link Validation, must start with https://
 * 5 Mobile number validation ( 10 digits)
 * 6 Linkedin Profile Link validation, must have https://linkedin.com/in/
 * 7. Organization Name Validation ( It can have numbers in it, for example: Dare2C)
 * 
 * Step 2: Create a function, which returns true / false based on validation check.
 * Step 3: Function can use regex expressions for strict checking
 * This file is should be put in abstraction, the main logic validation code should be written in 
 * src/validators/
 * 
    * For example *this* file can contain like this.
    * 
    * import {EmailValidation} from "../validators/emailValidationLogic.js"
    * const ValidationService=(serviceno, data)=>{
    * 
    * if(service===1)
    * {
    *      return Emailvalidation(data)
    * }
    * 
    * if(service===2)
    * {
    *      return NameValidation(data)
    * }
    * 
    * }
    * The main logic of the EmailValidation should be written in
    *  (src/validators/emailValidationLogic.js)
    * -------------------------------------------------------------
 * Developer Notes -- by Abir ( https://github.com/imabp)
 * These features cannot be neglected. And is an important measure for
 * maintianing data consistency in the servers.
 * 
 */