import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../components/Avatar";
import MenuItem from "./header/MenuItem";
import RegisterLogin from "./header/RegisterLogin";
import { logout } from "../redux/authSlice";

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
                <Avatar size="40" />
              </div>
              <ul className="dropdown-menu dropdown-menu-end px-2 mt-1 border shadow-sm ">
                <li>
                  <Link className="dropdown-item" to={`/profile/${user.id}`}>
                    See your profile
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
