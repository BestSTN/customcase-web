import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderContainer from "../features/profile/OrderContainer";
import { getAllOrders } from "../redux/orderSlice";

const AdminPage = () => {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return <OrderContainer orders={orders} />;
};

export default AdminPage;
