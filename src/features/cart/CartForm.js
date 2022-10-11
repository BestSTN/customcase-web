import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addAddress, createOrder } from "../../redux/orderSlice";

const CartForm = () => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.order.cart);

  const total = cart.orderItems.reduce((a, c) => a + c.price * c.amount, 0);

  if (!user) {
    window.location.replace('/')
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addAddress(user.address));
  }, [dispatch, user.address]);

  const handleChangeInput = (e) => {
    dispatch(addAddress(e.target.value));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    try {
      if (!cart.address || !cart.address.trim()) {
        return toast.error("address is required");
      }

      if (cart.orderItems.length === 0) {
        return toast.error("cart is empty");
      }

      dispatch(createOrder(cart));
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="col-4 border-start">
      <h5>Summary</h5>
      <hr />
      <div className="d-flex justify-content-between mb-3">
        <div className="text-muted">ITEMS {cart.orderItems.length}</div>
        <div className="text-muted">฿ {total}</div>
      </div>
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            type="text"
            className="form-control"
            id="address"
            name="address"
            rows="3"
            value={cart.address}
            onChange={handleChangeInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Coupon
          </label>
          <input
            type="text"
            className="form-control"
            id="discount"
            name="discount"
            // value={input.name}
            // onChange={handleChangeInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="payment" className="form-label">
            Payment
          </label>
          <select className="form-select" id="payment">
            <option className="text-muted">Promptpay</option>
            <option className="text-muted">SCB</option>
            <option className="text-muted">KTB</option>
            <option className="text-muted">KBank</option>
          </select>
        </div>
        <div className="d-flex justify-content-between border-top py-3 fw-bold">
          <div className="">TOTAL PRICE</div>
          <div className="">฿ {total}</div>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          CHECKOUT
        </button>
      </form>
    </div>
  );
};

export default CartForm;
