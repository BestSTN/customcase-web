import { Link } from "react-router-dom";

function MenuItem({ to, active, children }) {
  return (
    <Link to={to} className={`nav-link px-2 link-${active ? "secondary" : "dark"}`}>
      {children}
    </Link>
  );
}

export default MenuItem;
