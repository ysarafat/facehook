import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  console.log("Auth state:", auth);
  return (
    <div>
      <h1 className="text-4xl text-red-400">Welcome to Facehook</h1>
      <p>Your social media platform for connecting with friends and family.</p>
    </div>
  );
}
