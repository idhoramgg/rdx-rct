import { createStore, combineReducers } from 'redux';

import productReducers from '../reducers/productReducer';
import saldoReducers from '../reducers/saldoReducer';

const rootReducers = combineReducers({
    product: productReducers,
    saldo: saldoReducers
})

const store = createStore(rootReducers)

export default store;