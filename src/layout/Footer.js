import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="d-flex w-100 shadow-lg">
      <div className="container ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              CustomeCase
            </Link>
            <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <i class="fa-brands fa-twitter fs-4"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <i class="fa-brands fa-instagram fs-4"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to="/">
                <i class="fa-brands fa-facebook fs-4"></i>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
