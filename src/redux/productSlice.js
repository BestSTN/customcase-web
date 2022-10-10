import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as productService from "../api/productApi";

const productSlice = createSlice({
  name: "product",
  initialState: { products: [] },
  reducers: {
    loadProduct: (state, action) => {
      state.products.unshift(...action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
  },
});

export default productSlice.reducer;

export const { loadProduct, removeProduct, addProduct } = productSlice.actions;

export const getAllProduct = () => async (dispatch) => {
  try {
    const res = await productService.getAllProduct();
    dispatch(loadProduct(res.data.products));
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = (input) => async (dispatch) => {
  try {
    const res = await productService.createProduct(input);
    dispatch(addProduct(res.data.product));
    toast.success("success create product");

    setTimeout(() => {
      window.location.replace("/community");
    }, 1500);
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
