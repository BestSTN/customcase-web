const CartForm = () => {
  return (
    <div className="col-4 border-start">
      <h5>Summary</h5>
      <hr />
      <div className="d-flex justify-content-between mb-3">
        <div className="text-muted">ITEMS 3</div>
        <div className="text-muted  ">฿ 132.00</div>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            type="text"
            className="form-control"
            id="address"
            name="address"
            rows="3"
            // value={input.name}
            // onChange={handleChangeInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Coupon
          </label>
          <input
            type="text"
            className="form-control"
            id="discount"
            name="discount"
            // value={input.name}
            // onChange={handleChangeInput}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="payment" className="form-label">
            Payment
          </label>
          <select className="form-select" id="payment">
            <option className="text-muted">Promptpay</option>
            <option className="text-muted">SCB</option>
            <option className="text-muted">KTB</option>
            <option className="text-muted">KBank</option>
          </select>
        </div>
      </form>
      <div className="d-flex justify-content-between border-top py-3 fw-bold">
        <div className="">TOTAL PRICE</div>
        <div className="">฿ 137.00</div>
      </div>
      <button className="btn btn-primary w-100">CHECKOUT</button>
    </div>
  );
};

export default CartForm;
