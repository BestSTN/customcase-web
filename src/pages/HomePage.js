import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ height: "500px" }}
    >
      <div className="text-center ">
        {/* <img
        className="d-block mx-auto mb-4"
        src={cover  }
        alt=""
        width="72"
        height="57"
      /> */}
        <h1 className="display-5 fw-bold">Customize Your Case</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            culpa consequatur rerum libero possimus? Nemo repellat suscipit
            molestiae, ut rem atque cum beatae in autem? Rerum perspiciatis
            eveniet eum quia!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to=""
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Learn more
            </Link>
            <Link
              to="/design"
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Start design
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
