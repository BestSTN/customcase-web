import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const ProfileIcon = ({ user }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="nav-item dropdown">
      <div className="" role="button" data-bs-toggle="dropdown">
        <Avatar size="40" src={user.profileImage} />
      </div>
      <ul className="dropdown-menu dropdown-menu-end px-2 mt-1 border shadow-sm ">
        <li>
          <Link className="dropdown-item" to={`/profile/${user.id}`}>
            <div className="d-flex flex-column">
              <span className="text-black fw-bold">
                {user.firstName} {user.lastName}
              </span>
              <small className="text-muted">See your profile</small>
            </div>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileIcon;
