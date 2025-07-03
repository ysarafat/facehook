import { useState } from "react";
import CommentIcon from "../../assets/icons/comment.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

export default function PostAction({ post, commentCount }) {
  const { auth } = useAuth();
  const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));
  const { api } = useAxios();

  const handleLike = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
      );
      if (response.status === 200) {
        setLiked(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button
        onClick={handleLike}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
        {liked ? (
          <svg
            fill="#ffffff"
            height="20px"
            width="20px"
            version="1.1"
            id="Filled_Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Like-Filled">
                {" "}
                <path d="M23,10v10c0,1.66-1.34,3-3,3H6V11h2c1.66,0,3-1.24,3-2.9V1h2.1C14.76,1,16,2.34,16,4v6H23z M1,23h3V11H1V23z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        ) : (
          <img src={LikeIcon} alt="Like" />
        )}
        <span>{liked ? "Liked" : "Like"}</span>
      </button>

      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={CommentIcon} alt="Comment" />
        <span>Comment({commentCount ?? 0})</span>
      </button>

      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}
