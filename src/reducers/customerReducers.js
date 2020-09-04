const customers = []

const customersReducers = (state=customers, action) => {
    if(action.type === "GET_ALL_CUSTOMERS"){
        return action.customers
    }
    return state
}
export default customersReducers;