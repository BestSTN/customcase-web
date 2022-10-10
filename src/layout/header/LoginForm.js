import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

const LoginForm = () => {
  const [input, setInput] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(login(input));
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-md h-13"
          placeholder="Username or Email address"
          name="usernameOrEmail"
          value={input.usernameOrEmail}
          onChange={handleChangeInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control rounded-md h-13"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <div className="mb-2 d-grid">
        <button
          className="btn btn-primary fw-bold rounded-md h-12 text-4.5 "
          data-bs-dismiss="modal"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
