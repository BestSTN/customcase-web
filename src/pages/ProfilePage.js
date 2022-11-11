import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import { API_ENDPOINT_URL } from "../config/env";
import ProductContainer from "../features/product/ProductContainer";
import OrderContainer from "../features/profile/OrderContainer";
import ProfileEditForm from "../features/profile/ProfileEditForm";
import { getUser, getUserOrder } from "../redux/userSlice";

const ProfilePage = () => {
  const { id } = useParams();
  const { user, initialLoading } = useSelector((state) => state.user);
  const me = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.user.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
    if (me?.id === +id) {
      dispatch(getUserOrder());
    }
  }, [dispatch, me?.id, id]);

  if (initialLoading) return <Spinner />;

  return (
    <>
      <div
        className="container shadow-lg text-center rounded-5 position-relative mb-5 pb-5"
        style={{ marginTop: "150px", paddingTop: "200px" }}
      >
        <div className="position-absolute top-0 start-50 translate-middle">
          <Avatar
            src={user.profileImage && API_ENDPOINT_URL + user.profileImage}
            size="300px"
          />
        </div>

        <div className="w-50 mx-auto">
          <h3 className="title">
            {user.firstName} {user.lastName}
          </h3>
          <h6 className="d-flex justify-content-center gap-3">
            <i className="fa-solid fa-envelope"></i> Email: {user.email}
            <i className="fa-solid fa-phone"></i> Tel: {user.phone}
          </h6>
          <p>
            <strong>Address :</strong> {user.address}
          </p>
        </div>
        {me?.id === +id && (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#editProfile"
          >
            Edit Profile
          </button>
        )}
      </div>
      <ProductContainer products={user.Products} />
      {me?.id === +id && <OrderContainer orders={orders} />}

      <Modal title="Edit Profile" id="editProfile">
        <ProfileEditForm user={user} />
      </Modal>
    </>
  );
};

export default ProfilePage;
