import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'



const initialState = {
    employees:[{
        id: 1,
        firstName: "Wynne",
        lastName: "Tran",
        emailId: "wynne.tran@georgebrown.ca"
    },
    {
        id: 2,
        firstName: "Pritesh",
        lastName: "Patel",
        emailId: "myfavoriteProfessor@georgebrown,ca"
    },
    {
        id: 3,
        firstName: "Thi Hoang Tram",
        lastName: "Tran",
        emailId: "thihoangtram.tran@georgebrown.ca"
    }
]
}
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const removeEmployee = (id) => {
        dispatch({
            type: 'Remove_employee',
            payload: id
        })
    }

    const addEmployee = (employee) => {
        dispatch({
            type: 'Add_employee',
            payload: employee
        })
    } 

    const editEmployee = (employee) => {
        dispatch({
            type: 'Edit_employee',
            payload: employee
        })
    } 
    return(
        <GlobalContext.Provider value = {{
            employees: state.employees,
            removeEmployee,
            addEmployee,
            editEmployee
        }}>
        {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
