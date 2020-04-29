import React, { useState, useCallback, useMemo, useEffect, Suspense } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';
//import Users from './Users';
const Users = React.lazy(()=> import('./Users'));

const ParentCallbackComponent = () => {
    const arr1 = ['One', 'Two', 'Three'];
    const [age, setAge] = useState(35);
    const arr = useMemo(()=>{
        return ['One', 'Two', 'Three'];
    },[]); 
    
    const [salary, setSalary] = useState(150000);    
    const [form, setForm] = useState({
        name: 'Vikas Salvi',
        age: 35
    });       
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000);
    }, [salary]);
    
    const updateForm = useCallback(() => {
        setForm({
            name: 'Dhaval Balsara',
            age: 35
        });
    }, [form]);

    const fetchData = useCallback(id => {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => console.log(json))
    },[]);

    useEffect(()=>{
        fetchData(1); 
    },[]);

    return (
        <div>
            <Title title="This is the Title" fetchData={fetchData} arr={arr}></Title>
            <Count text="Age" count={age}></Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}></Count>
            <Button handleClick={incrementSalary} >Increment Salary</Button>
            <div>
                <h4>{form.name}</h4>
                <h4>{form.age}</h4>
            </div>
            <Button handleClick={updateForm}>Update Form</Button>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Users></Users>
            </Suspense>
            
        </div>
    )

}

export default ParentCallbackComponent