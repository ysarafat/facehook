import useProfile from "../../hooks/useProfile";
import PostList from "../posts/PostList";

export default function MyPosts() {
  const { state } = useProfile();
  return (
    <div>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>

      <PostList posts={state?.posts} />
    </div>
  );
}
