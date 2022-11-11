import { useState } from "react";
import { useDispatch } from "react-redux";
import ConfirmModal from "../../components/ConfirmModal";
import Modal from "../../components/Modal";
import { deleteProduct } from "../../redux/productSlice";
import ProductEditForm from "./ProductEditForm";

const ProductDropdown = ({ product }) => {
  const [input, setInput] = useState(product);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClickDeleted = () => {
    dispatch(deleteProduct(product.id));
  };
  return (
    <>
      <button
        type="button"
        style={{ width: "30px", height: "30px" }}
        className="position-absolute top-0 end-0 m-3 btn btn-outline-secondary rounded-circle border-0 d-flex justify-content-center text-align-center"
        data-bs-toggle="dropdown"
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>

      <ul className="dropdown-menu px-2 mt-1 border shadow-sm ">
        <li>
          <button
            className="dropdown-item"
            data-bs-toggle="modal"
            data-bs-target={"#editProduct" + product.id}
          >
            Edit
          </button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            className="dropdown-item"
            data-bs-toggle="modal"
            data-bs-target={"#confirmDeleteProduct" + product.id}
          >
            Deleted
          </button>
        </li>
      </ul>

      <Modal title="Edit Product" id={"editProduct" + product.id}>
        <ProductEditForm input={input} handleChangeInput={handleChangeInput} />
      </Modal>

      <ConfirmModal
        handleConfirm={handleClickDeleted}
        id={"confirmDeleteProduct" + product.id}
      />
    </>
  );
};

export default ProductDropdown;
