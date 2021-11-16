import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react'
import Table from 'react-bootstrap/Table'
import * as Icon from 'react-bootstrap-icons';
import { GlobalContext } from '../Context/GlobalState'
import {Link} from 'react-router-dom'


function EmployeeList() {

    const{employees, removeEmployee, viewEmployee} = useContext(GlobalContext)
    return(
        <div >
            <div >
                <Link style={{marginLeft: 200, marginTop: 80, width: 200}} className="btn btn-warning" to="/add-employee/_add" ><Icon.Plus /> Add Employee</Link>
            </div>
            <div style ={{marginLeft: 200}}>
            
            <Table class="table table-hover" style = {{width: 900, marginTop: 50}}>
            
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
                       (<tr key = {e._id} className="table-default">
                        <td>{e._id}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.emailId}</td>
                        <td style={{alignItems: 'center'}}>
                            <Link style={{marginLeft: 35}} className="btn btn-outline-info" to= {`/view-employee/${e._id}`}> <Icon.Eye /></Link>
                            <Link style={{marginLeft: 5}} className="btn btn-outline-success" to= {`/add-employee/${e._id}`} > <Icon.Pencil /></Link>
                            <Link style={{marginLeft: 5}} className="btn btn-outline-danger" onClick = {() => removeEmployee(e._id)}> <Icon.Trash /></Link>
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

