import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as productService from "../api/productApi";

const productSlice = createSlice({
  name: "product",
  initialState: { products: [] },
  reducers: {
    saveProduct: (state, action) => {
      state.products.unshift(...action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default productSlice.reducer;

export const { saveProduct, removeProduct } = productSlice.actions;

export const getAllProduct = () => async (dispatch) => {
  try {
    const res = await productService.getAllProduct();
    dispatch(saveProduct(res.data.products));
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = () => async (dispatch) => {
  try {
    toast.success("success create product");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await productService.deleteProduct(id);
    await dispatch(removeProduct(id));
    toast.success("success delete product");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
