import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import Menu from './Menu';
import Validation from './Validation';
import FormVaildation from './FormValidation';


function EditEmployee(props) {
    const {onChange, employee, onSubmit, errors, selectedEmployee, setSelectedEmployee} = FormVaildation(Validation);
    const currentEmployeeId = props.match.params.id;
    const { employees } = useContext(GlobalContext);

        
    useEffect(() => {
        try{
            const employeeId = currentEmployeeId;
            const selectedEmployee = employees.find(employee => employee._id === Number(employeeId));
            setSelectedEmployee(selectedEmployee);

            console.log("selected " + selectedEmployee)
        }
        catch(e) {console.log(e)}
    }, [currentEmployeeId, employees])

    return(
        
        <div >
            <Menu />
            <div style ={{marginLeft: 300}}>
                <form style = {{width: 700, marginTop: 50}} onSubmit = {onSubmit}>
                   
                    <legend style={{alignItems: 'center', fontSize: 48, fontWeight: 'bold'}}>Edit Employee</legend>

                    <div className="form-group">
                        <label >First Name</label>
                        <input type="text" className="form-control" name="firstName" value={selectedEmployee.firstName} placeholder="First Name" onChange={onChange}/>
                        {errors.firstName && <p style={{color: 'red'}}>{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="form-label mt-4">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={selectedEmployee.lastName} placeholder="Last Name" onChange={onChange}/>
                        {errors.lastName && <p style={{color: 'red'}}>{errors.lastName}</p>}
                    </div>
                    <div >
                        <label className="form-label mt-4">Email Id</label>
                        <input type="email" className="form-control" name="emailId" value={selectedEmployee.emailId} placeholder="Enter email" onChange={onChange}/>
                        {errors.emailId && <p style={{color: 'red'}}>{errors.emailId}</p>}
                    </div>
                    
                    <br/>
                    <div>
                    <button style={{margin: 10, width: 150}} type="submit" className="btn btn-primary">Save</button>
                    <Link style={{margin: 10, width: 150}} class="btn btn-danger" to='/'>Cancel</Link>
   
                    </div>
                </form>  
            </div>
            </div>
    )
            
}
export default EditEmployee;