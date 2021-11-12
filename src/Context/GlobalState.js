import React, {createContext, useReducer, useEffect, useState} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'


const initialState = {
    employees: []
}

function popularData(datas){
    datas.map(data => initialState.employees.push(data))
}

// Provider Component
export const GlobalProvider = ({children}) => {

    const getData = '/api/v1/employees';

    const [new_employees, setEmployees] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const request = await axios.get(getData);
                setEmployees(request.data.content)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData();
    }, []);

    
    console.log(initialState.employees)
    //popularData(new_employees)
   initialState.employees=new_employees
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //actions
    const removeEmployee = (id) => {
        axios.delete(`/api/v1/employees/${id}`)
        .then(res => dispatch({
            type: 'Remove_employee',
            payload: id
        }))
        
    }

    const addEmployee = (employee) => {
        axios.post('/api/v1/employees', employee,)
        .then(res => dispatch({
            type: 'Add_employee',
            payload: res.data.content
        })
        ).then(window.location = "/")
        .catch(e => console.log(e))
    } 

    const viewEmployee = (id) => {
        axios.get(`/api/v1/employees/${id}`)
        .then(res => dispatch({
            type: 'View_employee',
            payload: id
        }))
    }  
    

    const editEmployee = (employee) => {
        axios.put(`/api/v1/employees/${employee._id}`, employee)
        .then(res => dispatch({
            type: 'Edit_employee',
            payload: employee
        }))
        .then(window.location = "/")
    }  
    return(
        <GlobalContext.Provider value = {{
            employees: state.employees,
            removeEmployee,
            addEmployee,
            editEmployee,
            
        }}>
        {children}
        </GlobalContext.Provider>
    )
}

export const GlobalContext = createContext(initialState)

export default GlobalProvider;
