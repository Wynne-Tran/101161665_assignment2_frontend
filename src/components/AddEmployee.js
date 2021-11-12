import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useContext} from 'react'
import Menu from './Menu'
import {Link, useHistory} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

function AddEmployee() {
    const [employee, setEmployee] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        emailId: ""
    });
    
    const{employees, addEmployee} = useContext(GlobalContext)
    const history = useHistory();
    const[isSubmit, setIsSubmit] = useState(false)
    
    const onSubmit = () => {
        if (employees.length === 0) employees.id=1
        else employees.id = employees[employees.length -1 ].id + 1
        const newEmployee = {
            id: employees.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailId: employee.emailId
        }
        addEmployee(newEmployee);
        history.push('/')
    }

    const onchangeValue= (e) =>{
        const {name, value } = e.target
        setEmployee({
            ...employee,
            [name] : value
        })
        
    }

    return(
        
        <div >
            <Menu />
            <div style ={{marginLeft: 300}}>
                <form style = {{width: 700, marginTop: 50}} onSubmit = {onSubmit}>
                   
                    <legend style ={{alignItems: 'center', fontSize: 48, fontWeight: 'bold'}}>Add Employee</legend>

                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" name="firstName" placeholder="First Name" onChange={onchangeValue}/>
                    </div>
                    <div>
                        <label for="exampleInputEmail1" class="form-label mt-4">Last Name</label>
                        <input type="text" class="form-control" name="lastName"  placeholder="Last Name" onChange={onchangeValue}/>
                    </div>
                    <div >
                        <label for="exampleInputEmail1" class="form-label mt-4">Email Id</label>
                        <input type="email" class="form-control" name="emailId" placeholder="Enter email" onChange={onchangeValue}/>
                    </div>
                    
                    <br/>
                    <div>
                    <button style={{margin: 10, width: 150}} type="submit" class="btn btn-primary">Save</button>
                    <Link style={{margin: 10, width: 150}} class="btn btn-success" to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
            </div>
    )
}


export default AddEmployee;