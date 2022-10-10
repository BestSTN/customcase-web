import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import RegisterLogin from "./RegisterLogin";
import ProfileIcon from "./ProfileIcon";

function Header() {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.order.cart);

  return (
    <div className="d-flex w-100 shadow">
      <div className="container ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">CustomeCase</span>
          </Link>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <MenuItem to="/" active={pathname === "/"}>
                Home
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/design" active={pathname === "/design"}>
                Design
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/community" active={pathname === "/community"}>
                Community
              </MenuItem>
            </li>
            {user && (
              <li>
                <MenuItem to="/cart" active={pathname === "/cart"}>
                  Shopping Cart
                  <i className="fa-solid fa-cart-shopping cart ms-1">
                    {!!cart.orderItems.length && (
                      <span>{cart.orderItems.length}</span>
                    )}
                  </i>
                </MenuItem>
              </li>
            )}
          </ul>

          <div className="col-md-3 text-end">
            {user ? <ProfileIcon user={user} /> : <RegisterLogin />}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
