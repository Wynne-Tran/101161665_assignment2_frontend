export default function validateInfo(employee) {
    let errors = {}
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!employee.firstName.trim()) {
        errors.firstName = "First Name required"
    }

    if(!employee.lastName.trim()) {
        errors.lastName= "Last Name required"
    }

    if(!employee.emailId){
        errors.emailId = "Email required"
    }
    else if(!regEmail.test(employee.emailId)){
        errors.emailId = "Email address is invalid"
    }

    return errors;
}