import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";

const RegisterForm = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(register(input));
  };

  return (
    <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          name="username"
          value={input.username}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Email address"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn d-flex justify-content-center align-items-center btn-primary text-4.5 h-9 tw-px-10"
          data-dismiss="modal"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
