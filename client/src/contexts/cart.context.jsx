// import { createContext, useState, useReducer } from "react";

// import { createAction } from "../utils/reducer.utils";

// const CART_ACTION_TYPES = {
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_CART_COUNT: "SET_CART_COUNT",
//   SET_CART_TOTAL: "SET_CART_TOTAL",
// };

// const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       return state;
//   }
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
//     cartReducer,
//     INITIAL_STATE
//   );

//     const payload = {
//       cartItems,
//       cartCount: newCartCount,
//       cartTotal: newCartTotal,
//     };

//     dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
