import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../../components/ConfirmModal";
import { updateOrderTransaction } from "../../redux/orderSlice";
import { updateOrderDelivery } from "../../redux/userSlice";
import OrderItem from "./OrderItem";

const OrderList = ({ order }) => {
  const { OrderItems, createdAt, transactionStatus, deliveryStatus, id } =
    order;

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const date = new Date(createdAt).toLocaleString();

  const handleUpdate = () => {
    if (user.role === "ADMIN") {
      dispatch(updateOrderTransaction(id));
    } else {
      dispatch(updateOrderDelivery(id));
    }
  };

  return (
    <div className="my-5 shadow rounded-5 p-4">
      <div className="d-flex justify-content-between">
        <h3>Order</h3>
        <p>{`${date}`}</p>
      </div>
      {OrderItems.map((item) => (
        <OrderItem key={"order" + item.id} orderItem={item} />
      ))}
      <div className="d-flex justify-content-between align-items-center p-3">
        <div>
          transaction status:
          <span className={`text-${transactionStatus ? "success" : "danger"}`}>
            {" "}
            {`${transactionStatus ? "completed" : "pending"}`}
          </span>
        </div>
        <div>
          delivery status:
          <span className={`text-${deliveryStatus ? "success" : "danger"}`}>
            {" "}
            {`${deliveryStatus ? "completed" : "pending"}`}
          </span>
        </div>
        {user.role === "ADMIN" ? (
          <button
            className={`btn btn-primary ${
              order.transactionStatus ? "disabled" : ""
            }`}
            data-bs-toggle="modal"
            data-bs-target={"#confirmStatus" + order.id}
          >
            Confirm Transaction
          </button>
        ) : (
          <button
            className={`btn btn-primary ${
              order.deliveryStatus ? "disabled" : ""
            }`}
            data-bs-toggle="modal"
            data-bs-target={"#confirmStatus" + order.id}
          >
            Confirm Delivery
          </button>
        )}
      </div>

      <ConfirmModal
        handleConfirm={handleUpdate}
        id={"confirmStatus" + order.id}
      ></ConfirmModal>
    </div>
  );
};

export default OrderList;
