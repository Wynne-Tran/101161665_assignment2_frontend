import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Menu from './Menu'
import {Link} from 'react-router-dom'
import Validation from './Validation';
import FormVaildation from './FormValidation';

function AddEmployee() {
    const {onchangeValue, employee, handleSubmit, errors} = FormVaildation(Validation);

    return(
        
        <div >
            <Menu />
            <div style ={{marginLeft: 300}}>
                <form style = {{width: 700, marginTop: 50}} onSubmit = {handleSubmit}>
                   
                    <legend style ={{alignItems: 'center', fontSize: 48, fontWeight: 'bold'}}>Add Employee</legend>

                    <div className="form-group">
                        <label >First Name</label>
                        <input value={employee.firstName} type="text" className="form-control" name="firstName" placeholder="First Name" onChange={onchangeValue}/>
                        {errors.firstName && <p style={{color: 'red'}}>{errors.firstName}</p>}
                    </div>
                    <div>
                        <label  className="form-label mt-4">Last Name</label>
                        <input value={employee.lastName} type="text" className="form-control" name="lastName"  placeholder="Last Name" onChange={onchangeValue}/>
                        {errors.lastName && <p style={{color: 'red'}}>{errors.lastName}</p>}
                    </div>
                    <div >
                        <label class="form-label mt-4">Email Id</label>
                        <input value={employee.emailId} type="email" className="form-control" name="emailId" placeholder="Enter email" onChange={onchangeValue}/>
                        {errors.emailId && <p style={{color: 'red'}}>{errors.emailId}</p>}
                    </div>
                    
                    <br/>
                    <div>
                    <button style={{margin: 10, width: 150}} type="submit" className="btn btn-primary">Save</button>
                    <Link style={{margin: 10, width: 150}} className="btn btn-success" to='/' type="button">Cancel</Link>
                    </div>
                </form>
            </div>
            </div>
    )
}


export default AddEmployee;