import { useState } from "react";

const CartItem = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="border-top border-bottom">
      <div className="row align-items-center justify-content-between">
        <div className="col-2">
          <img
            className="img-fluid p-3"
            src="https://i.imgur.com/1GrakTl.jpg"
            alt=""
          />
        </div>

        <div className="col-2">
          <div className="text-muted">iphone14</div>
          <div className="">MyPhone</div>
        </div>

        <div className="col-2">฿ 44.00</div>

        <div className="col-2">
          <input
            type="number"
            className="w-100"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="col-2">฿ 44.00</div>
      </div>
    </div>
  );
};

export default CartItem;
