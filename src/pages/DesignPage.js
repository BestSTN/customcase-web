import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DesignContent from "../features/design/DesignContent";
import DesignForm from "../features/design/DesignForm";
import { createProduct } from "../redux/productSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DesignPage = () => {
  const [input, setInput] = useState({
    name: "iphone14",
    price: "300",
    description: "",
    modelId: 2,
    image: null,
    thumbnail: null,
  });

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSetImage = useCallback((image, thumbnail) => {
    setInput((prev) => {
      return { ...prev, image, thumbnail };
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        return toast.error("Please login before continue.");
      }

      if (!input.name || !input.price) {
        return toast.error("title and price is required");
      }

      if (!input.image || !input.thumbnail) {
        return toast.error("image is required");
      }
      const formData = new FormData();

      for (let key in input) {
        formData.append(`${key}`, input[key]);
      }
      dispatch(createProduct(formData));
      setInput({
        name: "iphone14",
        price: "300",
        modelId: 2,
        image: null,
        thumbnail: null,
      });
      navigate("/community");
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="container-fluid h-100 pb-3">
      <div className="row">
        <DesignContent handleSetImage={handleSetImage} />
        <DesignForm
          input={input}
          handleSubmit={handleSubmit}
          handleChangeInput={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default DesignPage;
