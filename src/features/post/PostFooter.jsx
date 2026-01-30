import { ThumbsUpAltIcon, ThumbsUpIcon, MessageIcon } from "../../icons";
import ActionButton from "./ActionButton";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";
import { useState } from "react";

// export default function PostFooter({ postObj: { totalLike, id, likes } }) {
export default function PostFooter({ postObj }) {
  const { id } = postObj;
  const { authUser } = useAuth();
  const [likes, setLikes] = useState(postObj.likes);

  // [ { userId: 1 }, { userId: 2 } ]
  const isLiked = likes.find((el) => el.userId === authUser.id);

  const handleClickLike = async () => {
    try {
      await axios.post(`/post/${id}/like`);
      if (isLiked) {
        return setLikes(likes.filter((el) => el.userId !== authUser.id));
      }
      setLikes([...likes, { userId: authUser.id }]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        {likes.length > 0 && (
          <div className="flex gap-1 items-center">
            <div className="bg-blue-500 w-5 h-5 rounded-full flex justify-center items-center">
              <ThumbsUpIcon />
            </div>
            <span className="text-sm text-gray-500">{likes.length}</span>
          </div>
        )}
        <span className="text-sm text-gray-500 hover:underline cursor-pointer">
          8 comments
        </span>
      </div>
      <hr />
      <div className="flex gap-1 py-1">
        <ActionButton active={isLiked} onClick={handleClickLike}>
          <div className="flex justify-center items-center gap-2">
            <ThumbsUpAltIcon
              className={isLiked ? "fill-blue-500" : "fill-gray-500"}
            />
            <span>Like</span>
          </div>
        </ActionButton>

        <ActionButton>
          <div className="flex justify-center items-center gap-2">
            <MessageIcon className="fill-gray-500" />
            <span>Comment</span>
          </div>
        </ActionButton>
      </div>
    </div>
  );
}
