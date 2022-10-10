import { useDispatch, useSelector } from "react-redux";
import { API_ENDPOINT_URL } from "../../config/env";
import { addFromCart, reduceFromCart } from "../../redux/orderSlice";

const CartItem = ({ orderItem }) => {
  const allProducts = useSelector((state) => state.product.products);
  const product = allProducts.find((item) => item.id === orderItem.productId);

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addFromCart(product.id));
  };

  const handleDecrease = () => {
    dispatch(reduceFromCart(product.id));
  };

  return (
    <div className="border-top border-bottom">
      <div className="row align-items-center justify-content-between">
        <div className="col-2">
          <img
            className="img-fluid p-1"
            src={API_ENDPOINT_URL + product.thumbnail}
            alt="thumbnail"
          />
        </div>

        <div className="col-2">
          <div className="text-muted">{product.Model.name}</div>
          <div className="">{product.name}</div>
        </div>

        <div className="col-2">฿ {orderItem.price}</div>

        <div className="col-2">
          <div className="d-flex  align-items-center justify-content-between">
            <button
              className="btn btn-outline-secondary btn-sm"
              style={{ width: "30px" }}
              onClick={handleDecrease}
            >
              -
            </button>
            <div className="align-self-center">{orderItem.amount}</div>

            <button
              className="btn btn-outline-secondary btn-sm"
              style={{ width: "30px" }}
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2">฿ {orderItem.price * orderItem.amount}</div>
      </div>
    </div>
  );
};

export default CartItem;
