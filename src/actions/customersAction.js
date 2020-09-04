import axios from 'axios';

export const getAllCustomers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return dispatch({ 
                type: "GET_ALL_CUSTOMERS",
                customers: response.data
            })
        })
        .catch(error => console.log(error))
    }
   
}