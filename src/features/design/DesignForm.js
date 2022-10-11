const DesignForm = ({ input, handleSubmit, handleChangeInput }) => {
  return (
    <form
      className=" col-3 d-block bg-light border-start p-3"
      onSubmit={handleSubmit}
    >
      {/* <div className="mb-3">
        <label htmlFor="select1" className="form-label">
          Category
        </label>
        <select className="form-select" id="select1" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="select2" className="form-label">
          Brand
        </label>
        <select className="form-select" id="select2" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="select3" className="form-label">
          Model
        </label>
        <select className="form-select" id="select3" defaultValue="DEFAULT">
          <option value="DEFAULT" disabled>
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div> */}
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
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          min='100'
          placeHolder='commission cost ฿ 100'
          value={input.price}
          onChange={handleChangeInput}
        />
      </div>

      <button type="submit" className="w-100 btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default DesignForm;
