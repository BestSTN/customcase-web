import OrderList from "./OrderList";

const OrderContainer = ({ orders }) => {
  return (
    <div className="container">
      {orders.map((item) => (
        <OrderList key={item.id} order={item} />
      ))}
    </div>
  );
};

export default OrderContainer;
