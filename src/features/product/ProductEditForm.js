import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/productSlice";

const ProductEditForm = ({ input, handleChangeInput }) => {
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(editProduct(input, input.id));
  };

  return (
    <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="name"
          value={input.name}
          onChange={handleChangeInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          name="description"
          rows="7 "
          value={input.description}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="mb-2 d-grid">
        <button
          type="submit"
          className="btn btn-primary fw-bold rounded-md h-12 text-4.5"
          data-bs-dismiss="modal"
        >
          Save Update
        </button>
      </div>
    </form>
  );
};

export default ProductEditForm;
