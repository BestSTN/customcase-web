import { API_ENDPOINT_URL } from "../../config/env";

const OrderItem = ({ orderItem }) => {
  const {
    Product: { thumbnail, name, description, Model },
  } = orderItem;
  return (
    <div className="border-top border-bottom">
      <div className="row align-items-center justify-content-between">
        <div className="col-2 text-center">
          <img
            className="img-fluid p-1"
            style={{ height: "150px" }}
            src={API_ENDPOINT_URL + thumbnail}
            alt="thumbnail"
          />
        </div>

        <div className="col-2">
          <div className="text-muted">{Model.name}</div>
          <h3 className="">{name}</h3>
        </div>

        <div className="col-6">{description}</div>
        <div className="col-1 text-center text-muted">
          {orderItem.price} x {orderItem.amount}
        </div>

        <div className="col-1 text-center">
          ฿ {orderItem.price * orderItem.amount}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
