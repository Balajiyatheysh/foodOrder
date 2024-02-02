import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Cart</h1>
      <div className="cart-content">
        <button className="clear-cart-button" onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1 className="cart-empty-message">Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems}/>
      </div>
    </div>
  );
  
}

export default Cart