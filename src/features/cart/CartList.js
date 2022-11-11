import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useSelector((state) => state.order.cart);
  return (
    <>
      {cart.orderItems.map((item) => (
        <CartItem key={item.productId} orderItem={item}/>
      ))}
    </>
  );
};

export default CartList;
