
export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_CART_QUANTITY = "CHANGE_CART_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.drinkID),
      };
    }
    case CHANGE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.drinkID === action.payload.drinkID ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
