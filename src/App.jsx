import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/me" element={<ProfilePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
