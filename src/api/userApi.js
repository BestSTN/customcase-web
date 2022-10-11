import axios from "../config/axios";

export const getUserProduct = (id) => axios.get(`/users/${id}`);

export const getUserOrder = () => axios.get("/users/orders");

export const updateOrderDelivery = (id) => axios.patch(`/users/orders/${id}`);

export const updateUser = () => axios.patch("/users/");
