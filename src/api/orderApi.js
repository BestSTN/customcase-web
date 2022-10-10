import axios from "../config/axios";

export const getAllOrder = () => axios.get("/orders");

export const createOrder = (input) => axios.post("/orders", input);

export const updateOrderTransaction = (id) => axios.patch(`orders/${id}`);
