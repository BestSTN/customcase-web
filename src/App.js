import Router from "./route/Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMe } from "./redux/authSlice";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const initialLoading = useSelector((state) => state.auth.initialLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetMe());
  }, [dispatch]);

  if (initialLoading) return <Spinner />;

  return (
    <>
      <Router />
      <ToastContainer
        autoClose="5000"
        theme="colored"
        position="bottom-center"
      />
    </>
  );
}

export default App;
