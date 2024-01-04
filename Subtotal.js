import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./Reducer";
function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  const itemCountText = cart.length === 1 ? 'item' : 'items';

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} {itemCountText}): <strong>{value}</strong>
            </p>
              <input type="checkbox" /> This order contains a gift
    
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}
export default Subtotal;
