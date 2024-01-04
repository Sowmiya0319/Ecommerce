export const initialState = {
  cart: [],
  user:null,
};
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => {
    const price = parseFloat(item.price.toString().replace(/,/g, ''));
    return price ? price + amount : amount;
  }, 0);

const Reducer = (state, action) => {
 
  switch (action.type) {
    case "ADD_TO_CART":
      console.log('Adding:', action.item);
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      case 'EMPTY_CART':
        return{
          ...state,
          cart:[],
        }
     case "REMOVE_FROM_CART":
    
      const index=state.cart.findIndex(
        (cartItem)=>cartItem.id===action.id);
        let newcart=[...state.cart];
if(index>=0)
{
  newcart.splice(index,1);
}
else{
  console.warn("Cant remove product");

  }
  return{
    ...state,
    cart:newcart
  };
  case "SET_USER":
  {
    return{
      ...state,
      user:action.user,
    };
  }
    default:
      return state;
  
}
};
export default Reducer;
