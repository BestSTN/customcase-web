import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as orderService from "../api/orderApi";

const orderSlice = createSlice({
  name: "order",
  initialState: { orders: [], cart: { address: "", orderItems: [] } },
  reducers: {
    loadOrder: (state, action) => {
      state.orders.push(...action.payload);
    },
    addOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },
    addAddress: (state, action) => {
      state.cart.address = action.payload;
    },
    addOrderItem: (state, action) => {
      if (
        state.cart.orderItems.find(
          (item) => item.productId === action.payload.productId
        )
      ) {
        state.cart.orderItems = state.cart.orderItems.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        state.cart.orderItems.push(action.payload);
      }
    },
    increaseAmount: (state, action) => {
      state.cart.orderItems = state.cart.orderItems.map((item) =>
        item.productId === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    },
    decreaseAmount: (state, action) => {
      const newOrderItems = state.cart.orderItems.map((item) =>
        item.productId === action.payload
          ? { ...item, amount: item.amount - 1 }
          : item
      );

      state.cart.orderItems = newOrderItems.filter((item) => item.amount !== 0);
    },
    removeCart: (state, action) => {
      state.cart = { address: "", orderItems: [] };
    },
    updateOrder: (state, action) => {
      state.orders = state.orders.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export default orderSlice.reducer;

export const {
  loadOrder,
  addOrder,
  addOrderItem,
  addAddress,
  increaseAmount,
  decreaseAmount,
  removeCart,
  updateOrder,
} = orderSlice.actions;

export const getAllOrders = () => async (dispatch) => {
  try {
    const res = await orderService.getAllOrder();
    dispatch(loadOrder(res.data.orders));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const addToCart = (input) => async (dispatch) => {
  try {
    await dispatch(addOrderItem(input));
    toast.success("Added product to cart");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const reduceFromCart = (id) => async (dispatch) => {
  try {
    await dispatch(decreaseAmount(id));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const addFromCart = (id) => async (dispatch) => {
  try {
    await dispatch(increaseAmount(id));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const createOrder = (input) => async (dispatch) => {
  try {
    const res = await orderService.createOrder(input);
    await dispatch(addOrder(res.data.order));

    toast.success("success create order");
    await dispatch(removeCart());
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const updateOrderTransaction = (id) => async (dispatch) => {
  try {
    const res = await orderService.updateOrderTransaction(id);
    await dispatch(updateOrder(res.data.order));
    toast.success("success update order");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
