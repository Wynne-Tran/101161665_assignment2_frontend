import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import Menu from './Menu';

function EditEmployee(props) {
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

        const onChange = (e) => {
            setSelectedEmployee({ ...selectedEmployee, [e.target.name]: e.target.value })
        }

        const onSubmit = () => {
            editEmployee(selectedEmployee);
            history.push("/")
        }
    return(
        
        <div >
            <Menu />
            <div style ={{marginLeft: 300}}>
                <form style = {{width: 700, marginTop: 50}} onSubmit = {onSubmit}>
                   
                    <legend style={{alignItems: 'center', fontSize: 48, fontWeight: 'bold'}}>Edit Employee</legend>

                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" name="firstName" value={selectedEmployee.firstName} placeholder="First Name" onChange={onChange}/>
                    </div>
                    <div>
                        <label for="exampleInputEmail1" class="form-label mt-4">Last Name</label>
                        <input type="text" class="form-control" name="lastName" value={selectedEmployee.lastName} placeholder="Last Name" onChange={onChange}/>
                    </div>
                    <div >
                        <label for="exampleInputEmail1" class="form-label mt-4">Email Id</label>
                        <input type="email" class="form-control" name="emailId" value={selectedEmployee.emailId} placeholder="Enter email" onChange={onChange}/>
                    </div>
                    
                    <br/>
                    <div>
                    <button style={{margin: 10, width: 150}} type="submit" class="btn btn-primary">Save</button>
                    <Link style={{margin: 10, width: 150}} class="btn btn-danger" to='/'>Cancel</Link>
   
                    </div>
                </form>  
            </div>
            </div>
    )
            
}
export default EditEmployee;