import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import Menu from './Menu';

export const EmployeeDetail = (props) => {
    const { employees, viewEmployee } = useContext(GlobalContext);
    
    const currentEmployeeId = props.match.params.id;
    const [selectedEmployee, setSelectedEmployee] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        emailId: ''
    })
    useEffect(() => {
        const employeeId = currentEmployeeId;
        const selectedEmployee = employees.find(employee => employee._id === Number(employeeId) );
        setSelectedEmployee(selectedEmployee);
    }, [currentEmployeeId, employees])
    


    return (
        <div>
            <Menu/>
        <div >             
            <table className="card border-info mb-3 " style={{marginLeft: 350, marginTop: 50, maxWidth: 500}}>
            <caption className="card-header" style={{fontSize: 38, fontWeight: 'bold', color: 'red', captionSide: 'top' }}>View Employee Details</caption>
                <tr className="card-body"> 
                    <td className="card-title" style={{fontSize: 18, fontWeight: 'bold', color: 'green', textAlign: 'left'}}>Employee First Name: </td> 
                    <td className="card-title" style={{textAlign: 'left', padding: 3}}>{selectedEmployee.firstName}</td>
                </tr>
                <tr className="card-body">
                    <td className="card-title" style={{fontSize: 18, fontWeight: 'bold', color: 'green', textAlign: 'left'}}>Employee Last Name: </td> 
                    <td className="card-title" style={{textAlign: 'left', padding: 3}}>{selectedEmployee.lastName}</td>
                </tr>
                <tr className="card-body">
                    <td className="card-title" style={{fontSize: 18, fontWeight: 'bold', color: 'green', textAlign: 'left'}}>Employee Email ID: </td> 
                    <td className="card-title" style={{textAlign: 'left', padding: 3}}>{selectedEmployee.emailId} </td>
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
