import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import {useHistory} from 'react-router-dom'

const FormVaildation = validate => {

    const{employees, addEmployee, editEmployee} = useContext(GlobalContext)
    const history = useHistory();
    const[isSubmit, setIsSubmit] = useState(false)
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
    })
    const [selectedEmployee, setSelectedEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    })
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newEmployee = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailId: employee.emailId
        }
        setErrors(validate(employee))
        setIsSubmit(true);
        if(isSubmit === true){
            addEmployee(newEmployee);
        }
    }

    const onchangeValue= (e) =>{
        const {name, value } = e.target
        setEmployee({
            ...employee,
            [name] : value
        })
        
    }

    const onChange = (e) => {
        setSelectedEmployee({ ...selectedEmployee, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(selectedEmployee))
        setIsSubmit(true);
        if(isSubmit === true){
            editEmployee(selectedEmployee);
        }
    }


    return {onchangeValue, employee, handleSubmit, errors, onChange, onSubmit, selectedEmployee, setSelectedEmployee}
}

export default FormVaildation ;