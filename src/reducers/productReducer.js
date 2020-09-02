const products = {
  coffeeMocha: {stock: 20, price: 50000},
  cappucino: {stock: 10, price:35000},
  chocolate: {stock: 10, price: 25000},
  tea: {stock: 5, price: 30000},
};

const productReducers = (state = products, action) => {
  if (action.type === "BUY_ONE_TEA") {
    const newBuy = {
      ...state,
      tea: {stock: state.tea.stock -1, price: state.tea.price},
    };
    return newBuy;
  } else if (action.type === "BUY_ONE_CHOCOLATE") {
    const newBuy = {
      ...state,
      chocolate: {stock: state.chocolate.stock -1, price: state.chocolate.price},
    };
    return newBuy;
  } else if (action.type === "BUY_ONE_CAPPUCINO") {
    const newBuy = {
      ...state,
      cappucino: {stock: state.cappucino.stock -1, price: state.cappucino.price}
    };
    return newBuy;
  } else if (action.type === "BUY_ONE_COFFEEMOCHA") {
    const newBuy = {
      ...state,
      coffeeMocha: {stock: state.coffeeMocha.stock -1, price: state.coffeeMocha.price},
    };
    return newBuy;
  }
  return state;
};

export default productReducers;
