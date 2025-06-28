import { useState } from "react";
import { actions } from "../../actions";
import CheckIcon from "../../assets/icons/check.svg";
import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";

export default function Bio() {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMood, setEditMood] = useState(false);

  const { api } = useAxios();

  const handleBioEdit = async () => {
    dispatch(actions.profile.DATE_FETCHING);
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
        setEditMood(false);
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMood ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            value={bio}
            rows={4}
            cols={55}
            onChange={(e) => setBio(e.target.value)}
            className="p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md"
          />
        )}
      </div>
      {!editMood ? (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={() => setEditMood(true)}
        >
          <img src={EditIcon} alt="Edit" />
        </button>
      ) : (
        <button
          className="flex-center h-7 w-7 rounded-full"
          onClick={handleBioEdit}
        >
          <img src={CheckIcon} alt="check" />
        </button>
      )}
    </div>
  );
}
