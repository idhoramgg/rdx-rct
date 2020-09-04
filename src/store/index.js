import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import productReducers from '../reducers/productReducer';
import saldoReducers from '../reducers/saldoReducer';
import customersReducers from '../reducers/customerReducers';

const midleware = applyMiddleware(reduxThunk)

const rootReducers = combineReducers({
    product: productReducers,
    saldo: saldoReducers,
    customers: customersReducers
})

const store = createStore(rootReducers, midleware)

export default store;