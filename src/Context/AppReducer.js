
export default (state, action) => {
    
    switch(action.type){
        case 'Remove_employee':
            return{
                employees: state.employees.filter(employee => {
                    return employee._id !== action.payload
                })
            }
        case 'Add_employee':
            return{
                ...state,
                employees: [ ...state.employees, action.payload,]
            }
        case 'View_employee':
            const id = action.payload
            const viewEmployee = state.employees.find(employee => employee._id === Number(id))
            return {
                viewEmployee
            }
        case 'Edit_employee':
            const updateEmployee = action.payload
            const updateEmployees = state.employees.map(employee => {
                if(employee._id === updateEmployee._id){
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

