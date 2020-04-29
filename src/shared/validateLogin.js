export default function validate(values){
    let errors = {};

    if(!values.username){
        errors.username = "User name is required";   
    }
    if(!values.age){
        errors.age = "Age is required";
    }
    else if(isNaN(values.age)){
        errors.age = "Age should be a number";
    }
    else if(values.age < 5 && values.age > 15){
        errors.age = "Age should be between 5 and 15";
    }
    if(!values.grade){
        errors.grade = "Grade is required";
    }

    return errors;
}