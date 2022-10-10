import Modal from "../../components/Modal";
import LoginForm from "./LoginForm";

const RegisterLogin = () => {
  return (
    <>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">
          Register
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Login
        </button>
      </div>
      <Modal title="Login">
        <LoginForm />
      </Modal>
    </>
  );
};

export default RegisterLogin;
