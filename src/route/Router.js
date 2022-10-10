import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import DesignPage from "../pages/DesignPage";
import CommunityPage from "../pages/CommunityPage";
import ProfilePage from "../pages/ProfilePage";
import CartPage from "../pages/CartPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default Router;
