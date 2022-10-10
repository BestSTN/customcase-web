import Modal from "../../components/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const RegisterLogin = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary me-2"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
      >
        Sign-up
      </button>
      <Modal title="Login" id="loginModal">
        <LoginForm />
      </Modal>
      <Modal title="Sign-up" id="registerModal">
        <RegisterForm />
      </Modal>
    </>
  );
};

export default RegisterLogin;
