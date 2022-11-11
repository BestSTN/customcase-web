import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../redux/userSlice";

const ProfileEditForm = ({ user }) => {
  const [input, setInput] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    address: user.address,
    profileImage: user.profileImage,
  });

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      for (let key in input) {
        formData.append(`${key}`, input[key]);
      }

      dispatch(updateUser(formData, user.id));
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
      <div className="col-6">
        <label htmlFor="firstName" className="form-label">
          first name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
        />
      </div>

      <div className="col-6">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="col-6">
        <label htmlFor="phone" className="form-label">
          phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={input.phone}
          onChange={handleChangeInput}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          address
        </label>
        <textarea
          type="text"
          className="form-control"
          id="address"
          name="address"
          rows="7 "
          value={input.address}
          onChange={handleChangeInput}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="profileImage" className="form-label">
          profile image
        </label>
        <input
          type="file"
          id="profileImage"
          name="profileImage"
          className="form-control"
          onChange={(e) => {
            if (e.target.files[0]) {
              setInput({ ...input, profileImage: e.target.files[0] });
            }
          }}
        ></input>
      </div>

      <div className="mb-2 d-grid">
        <button
          type="submit"
          className="btn btn-primary fw-bold rounded-md h-12 text-4.5"
          data-bs-dismiss="modal"
        >
          Save Update
        </button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
