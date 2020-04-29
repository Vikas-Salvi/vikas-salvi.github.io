import {useState, useEffect} from 'react';

const useLogin = (initialform, submit, validate, errorform) => {

    const [form, setForm] = useState(initialform);
    const [errors, setErrors] = useState(errorform);
    const [formValidated, setFormValidated] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });        
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormValidated(true);
        setErrors(validate(form)); 
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0){
            submit();
        }
    },[errors]);
        
    return {
        handleChange, 
        handleSubmit, 
        form, 
        errors,
        formValidated
    }
}

export default useLogin