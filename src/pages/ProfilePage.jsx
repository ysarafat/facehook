import { useEffect } from "react";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch(actions.profile.DATE_FETCHING);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: error });
      }
    };
    fetchProfile();
  }, [auth?.user?.id]);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProfileInfo />
    </>
  );
}
