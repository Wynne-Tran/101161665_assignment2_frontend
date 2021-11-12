import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useContext} from 'react'
import Table from 'react-bootstrap/Table'
import * as Icon from 'react-bootstrap-icons';
import { GlobalContext } from '../Context/GlobalState'
import {Link} from 'react-router-dom'
import AddEmployee from './AddEmployee';


function EmployeeList() {

    const{employees, removeEmployee} = useContext(GlobalContext)

    return(
        
        <div >
            <div >
                <Link style={{marginLeft: 120, marginTop: 80, width: 200}} className="btn btn-info" to="/add" ><Icon.Plus /> Add Employee</Link>
            </div>

            <div style ={{marginLeft: 120}}>
            
            <Table class="table table-hover" style = {{width: 1000, marginTop: 50}}>
            
                <thead>
                    <tr class="table-secondary">
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((e) => (
                       (<tr key = {e.id} class="table-default">
                        <td>{e.id}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.emailId}</td>
                        <td style={{alignItems: 'center'}}>
                            <Link style={{marginLeft: 35}} className="btn btn-outline-info" to= {`/view/${e.id}`} > <Icon.Eye /></Link>
                            <Link style={{marginLeft: 5}} className="btn btn-outline-success" to= {`/edit/${e.id}`} > <Icon.Pencil /></Link>
                            <Link style={{marginLeft: 5}} className="btn btn-outline-danger" onClick = {() => removeEmployee(e.id)}> <Icon.Trash /></Link>
                        </td>
                        </tr>)
                    ))
                    }
                    
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default EmployeeList

