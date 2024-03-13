import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./reducer/cartReducer";


const Cart = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  });
  //   const [productState, productDispatch] = useReducer(productReducer, {
  //     byStock: false,
  //     byFastDelivery: false,
  //     byRating: 0,
  //     searchQuery: "",
  //   });

  //   console.log(productState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default CartProvider;
