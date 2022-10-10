import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../components/Avatar";
import MenuItem from "./MenuItem";
import RegisterLogin from "./RegisterLogin";
import { logout } from "../../redux/authSlice";

function Header() {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="/">
          CustomeCase
        </Link>
        <div className="d-flex flex-row  navbar-nav gap-3">
          <MenuItem to="/" active={pathname === "/"}>
            Home
          </MenuItem>
          <MenuItem to="/design" active={pathname === "/design"}>
            Design
          </MenuItem>
          <MenuItem to="/community" active={pathname === "/community"}>
            Community
          </MenuItem>
          {user ? (
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
          ) : (
            <RegisterLogin />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
