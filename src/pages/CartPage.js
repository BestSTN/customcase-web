import CartForm from "../features/cart/CartForm";
import CartList from "../features/cart/CartList";

const CartPage = () => {
  return (
    <div className="container shadow p-5 rounded-5">
      <div className="row g-5">
        <div className="col-8">
          <h3>Shopping Cart</h3>
          <CartList />
        </div>
        <CartForm />
      </div>
    </div>
  );
};

export default CartPage;
