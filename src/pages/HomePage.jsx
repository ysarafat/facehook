import { useEffect, useReducer } from "react";
import { actions } from "../actions";
import PostList from "../components/posts/PostList";
import useAxios from "../hooks/useAxios";
import { initialState, postReducer } from "../reucers/PostReducers";

export default function HomePage() {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATE_FETCHING });
    async function fetchPost() {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    }
    fetchPost();
  }, []);

  if (state?.loading) {
    return <div>Loading...</div>;
  }
  if (state?.error) {
    return <div>Error: {state?.error?.message}</div>;
  }
  return (
    <div>
      <PostList posts={state?.posts} />
    </div>
  );
}
