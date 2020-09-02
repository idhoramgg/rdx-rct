const saldo = {
    saldo: 0
}

const saldoReducers = (state = saldo, action) => {
    if(action.type === "ADD_ONE_TEA"){
        const newSaldo = {
            saldo: state.saldo + action.price
        }
        return newSaldo
    }if(action.type === "ADD_ONE_CHOCOLATE"){
        const newSaldo = {
            saldo: state.saldo + action.price
        }
        return newSaldo
    }if(action.type === "ADD_ONE_CAPPUCINO"){
        const newSaldo = {
            saldo: state.saldo + action.price
        }
        return newSaldo
    }if(action.type === "ADD_ONE_COFFEEMOCHA"){
        const newSaldo = {
            saldo: state.saldo + action.price
        }
        return newSaldo
    }
    return state
}

export default saldoReducers;