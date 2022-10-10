import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as authService from "../api/authApi";
import { API_ENDPOINT_URL } from "../config/env";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/localStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, initialLoading: true },
  reducers: {
    getMe: (state, action) => {
      state.user = action.payload;
      state.user.profileImage = API_ENDPOINT_URL + state.user.profileImage
    },
    logout: (state, action) => {
      state.user = null;
      removeAccessToken();
    },
    fistLoad: (state, action) => {
      state.initialLoading = false;
    },
  },
});

export default authSlice.reducer;

export const { logout, getMe, fistLoad } = authSlice.actions;

export const thunkGetMe = () => async (dispatch) => {
  try {
    if (getAccessToken()) {
      const res = await authService.getMe();
      dispatch(getMe(res.data.user));
    }
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(fistLoad());
  }
};

export const login = (input) => async (dispatch) => {
  try {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    const resMe = await authService.getMe();
    dispatch(getMe(resMe.data.user));
    toast.success("success login");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const register = (input) => async (dispatch) => {
  try {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    const resMe = await authService.getMe();
    setTimeout(() => dispatch(getMe(resMe.data.user)), 1);
    toast.success("success register");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
