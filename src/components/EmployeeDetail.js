import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import Menu from './Menu';

export const EmployeeDetail = (props) => {
    const { editEmployee, employees } = useContext(GlobalContext);
    const [selectedEmployee, setSelectedEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    })
    const history = useHistory();
    const currentEmployeeId = props.match.params.id;

    useEffect(() => {
        const employeeId = currentEmployeeId;
        const selectedEmployee = employees.find(employee => employee.id === Number(employeeId));
        setSelectedEmployee(selectedEmployee);
        console.log(selectedEmployee)
    }, [currentEmployeeId, employees])

    return (
        <div>
            <Menu/>
        <div >             
            <table class="card border-info mb-3 " style={{marginLeft: 350, marginTop: 50, maxWidth: 500}}>
            <caption class="card-header" style={{fontSize: 38, fontWeight: 'bold', color: 'red', captionSide: 'top' }}>View Employee Details</caption>
                <tr class="card-body"> 
                    <td class="card-title" style={{fontSize: 18, fontWeight: 'bold', color: 'green', textAlign: 'left'}}>Employee First Name: </td> 
                    <td class="card-title" style={{textAlign: 'left', padding: 3}}>{selectedEmployee.firstName}</td>
                </tr>
                <tr class="card-body">
                    <td class="card-title" style={{fontSize: 18, fontWeight: 'bold', color: 'green', textAlign: 'left'}}>Employee Last Name: </td> 
                    <td class="card-title" style={{textAlign: 'left', padding: 3}}>{selectedEmployee.lastName}</td>
                </tr>
                <tr class="card-body">
                    <td class="card-title" style={{fontSize: 18, fontWeight: 'bold', color: 'green', textAlign: 'left'}}>Employee Email ID: </td> 
                    <td class="card-title" style={{textAlign: 'left', padding: 3}}>{selectedEmployee.emailId} </td>
                </tr>
                <br/>
                <tr >
                    <Link style={{margin: 30, width: 100}} class="btn btn-info" to='/'>Cancel</Link>
                </tr>
            </table>
       </div>
       </div>
    )
    
}
