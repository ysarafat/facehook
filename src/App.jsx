import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoutes from "./routes/PrivateRoutes";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
