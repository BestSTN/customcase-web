import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductContainer from "../features/product/ProductContainer";

const CommunityPage = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Explore Community!</h1>
            <p className="lead text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quibusdam quasi hic non molestiae facere, veniam incidunt sed
              soluta aliquid et, blanditiis vero, iste dolores facilis! Adipisci
              accusantium id provident.
            </p>
            <p>
              <Link to="#" className="btn btn-primary my-2">
                Main call to action
              </Link>
            </p>
          </div>
        </div>
      </section>
      <ProductContainer products={products} />
    </div>
  );
};

export default CommunityPage;
