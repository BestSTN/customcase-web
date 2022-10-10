import axios from "../config/axios";

export const register = (input) => axios.post("/auth/register", input);

export const login = ({ usernameOrEmail, password }) =>
  axios.post("auth/login", { usernameOrEmail, password });

export const getMe = () => axios.get("/auth/me");
