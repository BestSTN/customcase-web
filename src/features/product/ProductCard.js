import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_ENDPOINT_URL } from "../../config/env";
import { deleteProduct } from "../../redux/productSlice";

const ProductCard = ({
  product: { id, name, thumbnail, price, User: user, Model: model },
}) => {
  const me = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()

  const handleClickDeleted = () => {
    dispatch(deleteProduct(id))
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <button
          type="button"
          className={`position-absolute top-0 end-0 m-2 btn-close ${
            user.id === me?.id ? "" : "d-none"
          }`}
          onClick={handleClickDeleted}
        ></button>
        <div
          style={{ height: "225px" }}
          className="d-flex justify-content-center bd-placeholder-img card-img-top"
   
        >
          <img
            style={{ objectFit: "cover", height: "100%" }}
            src={API_ENDPOINT_URL + thumbnail}
            alt="thumbnail"
          />
        </div>

        <div className="card-body">
          <h5 className="card-text">{name}</h5>
          <div className="d-flex row card-text mb-3">
            <span className="text-muted">{`model: ${model.name}`}</span>
            <span className="text-muted">{`price: ${price} ฿`}</span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <Link className="text-decoration-none" to={`/`}>
              <Avatar size="40" src={API_ENDPOINT_URL + user.profileImage} />
              <small className="px-3 text-muted">
                {`${user.firstName} ${user.lastName}`}
              </small>
            </Link>

            <button type="button" className="btn btn-sm btn-outline-secondary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
