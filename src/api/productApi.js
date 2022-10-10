import axios from "../config/axios";

export const getAllProduct = () => axios.get("/products");

export const createProduct = (input) => axios.post("/products", input);

export const updateProduct = (input, productId) =>
  axios.patch(`/products/${productId}`, input);

export const deleteProduct = (productId) =>
  axios.delete(`/products/${productId}`);
