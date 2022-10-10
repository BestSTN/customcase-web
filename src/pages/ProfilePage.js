import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div>ProfilePage</div>
      <div>{`Hello ${user.firstName + " " + user.lastName}`}</div>
    </>
  );
};

export default ProfilePage;
