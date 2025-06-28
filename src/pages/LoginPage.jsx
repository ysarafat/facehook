import { Link } from "react-router-dom";
import AuthIllustration from "../assets/images/auth_illustration.png";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main class="flex min-h-screen items-center justify-center bg-deepDark py-8">
      <div class="max-w-[1368px] flex-1">
        <div class="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <img
              class="mb-12 max-w-full max-lg:hidden"
              src={AuthIllustration}
              alt="auth_illustration"
            />
            <div>
              <h1 class="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
              <p class="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          <div className="card">
            <LoginForm />
            <div class="py-4 lg:py-6">
              <p class="text-center text-xs text-gray-600/95 lg:text-sm">
                Don't have account?{" "}
                <Link
                  class="text-white transition-all hover:text-lwsGreen hover:underline"
                  to="/register"
                >
                  Create New
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
