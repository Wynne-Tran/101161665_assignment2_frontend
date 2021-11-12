
export default (state, action) => {
    switch(action.type){
        case 'Remove_employee':
            return{
                ...state,
                employees: state.employees.filter(employee => {
                    return employee.id !== action.payload
                })
            }
        case 'Add_employee':
            return{
                employees: [ ...state.employees, action.payload,]
            }
        case 'Edit_employee':
            const updateEmployee = action.payload
            const updateEmployees = state.employees.map(employee => {
                if(employee.id === updateEmployee.id){
                    return updateEmployee;
                }
                return employee;
            })
            return {
                ...state,
                employees: updateEmployees
            }
           
        default:
            return state
    }
}

