import Modal from "../../components/Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const RegisterLogin = () => {
  return (
    <>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#registerModal"
        >
          Register
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Login
        </button>
      </div>
      <Modal title="Login" id='loginModal'>
        <LoginForm />
      </Modal>
      <Modal title="Register" id='registerModal'>
        <RegisterForm />
      </Modal>
    </>
  );
};

export default RegisterLogin;
