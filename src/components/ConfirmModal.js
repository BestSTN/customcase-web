import Modal from "./Modal";

const ConfirmModal = ({ children, handleConfirm, id }) => {
  return (
    <Modal title="Are your sure?" id={id}>
      <div className="mb-3">{children}</div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="btn btn-primary w-25"
          data-bs-toggle="modal"
          data-bs-target={`#${id}`}
          onClick={handleConfirm}
        >
          Yes
        </button>
        <button
          className="btn btn-outline-secondary w-25"
          data-bs-toggle="modal"
          data-bs-target={`#${id}`}
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
