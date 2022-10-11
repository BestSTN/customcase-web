import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Spinner from "../components/Spinner";
import { API_ENDPOINT_URL } from "../config/env";
import ProductContainer from "../features/product/ProductContainer";
import { getUser } from "../redux/userSlice";

const ProfilePage = () => {
  const { id } = useParams();
  const { user, initialLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  if (initialLoading) return <Spinner />;

  return (
    <>
      <div
        className="container shadow-lg text-center rounded-5 position-relative mb-5 pb-5"
        style={{ marginTop: "150px", paddingTop: "200px" }}
      >
        <div className="position-absolute top-0 start-50 translate-middle">
          <Avatar src={API_ENDPOINT_URL + user.profileImage} size="300px" />
        </div>

        <div className="w-50 mx-auto">
          <h3 className="title">Christian Louboutin</h3>
          <h6>Designer</h6>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quas
            quaerat harum debitis dolorum cum a? At vitae, laboriosam nesciunt
            id repellendus vel numquam, suscipit, eum exercitationem a soluta
            quae?
          </p>
        </div>
      </div>
      <ProductContainer products={user.Products} />
    </>
  );
};

export default ProfilePage;
