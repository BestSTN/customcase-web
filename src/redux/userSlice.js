import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as userService from "../api/userApi";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, initialLoading: true },
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload;
    },
    fistLoad: (state, action) => {
      state.initialLoading = false;
    },
  },
});

export default userSlice.reducer;

export const { loadUser, fistLoad } = userSlice.actions;

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
