import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as userService from "../api/userApi";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, orders: [], initialLoading: true },
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload;
    },
    fistLoad: (state, action) => {
      state.initialLoading = false;
    },
    loadOrder: (state, action) => {
      state.orders.push(...action.payload);
    },
    updateOrder: (state, action) => {
      state.orders = state.orders.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export default userSlice.reducer;

export const { loadUser, fistLoad, loadOrder, updateOrder } = userSlice.actions;

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await userService.getUserProduct(id);
    dispatch(loadUser(res.data.user));
  } catch (err) {
    toast.error(err.response.data.message);
  } finally {
    dispatch(fistLoad());
  }
};

export const getUserOrder = () => async (dispatch) => {
  try {
    const res = await userService.getUserOrder();
    dispatch(loadOrder(res.data.orders));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const updateOrderDelivery = (id) => async (dispatch) => {
  try {
    const res = await userService.updateOrderDelivery(id);
    await dispatch(updateOrder(res.data.order));
    toast.success("success update order");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const updateUser = (input, id) => async (dispatch) => {
  try {
    await userService.updateUser(input);
    const res = await userService.getUserProduct(id);
    dispatch(loadUser(res.data.user));
    toast.success("success update profile");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
