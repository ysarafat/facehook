import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {auth.authToken ? (
        <ProfileProvider>
          <Header />
          <main>
            <div className="container">
              <Outlet />
            </div>
          </main>
        </ProfileProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
