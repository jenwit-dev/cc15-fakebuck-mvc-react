import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { EllipsisIcon } from "../../icons";
import formatTimeAgo from "../../utils/time-ago";
// import { useEffect, useState } from "react";
// import axios from "../../config/axios";

export default function PostHeader({ postObj }) {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`/user/${userId}`)
  //     .then((res) => setUser(res.data.user))
  //     .catch((err) => console.log(err));
  // }, [userId]);

  return (
    <div className="flex gap-3">
      {/* <Link to={`/profile/${user.id}`}> */}
      <Link to={`/profile/${postObj.user.id}`}>
        {/* <Avatar src={user.profileImage} /> */}
        <Avatar src={postObj.user.profileImage} />
      </Link>

      <div className="flex flex-col flex-1">
        {/* <Link
          to={`/profile/${user.id}`}
          className="hover:underline text-sm font-semibold self-start"
        > */}
        <Link
          to={`/profile/${postObj.user.id}`}
          className="hover:underline text-sm font-semibold self-start"
        >
          {/* {user.firstName} {user.lastName} */}
          {postObj.user.firstName} {postObj.user.lastName}
        </Link>
        <small className="text-gray-500 text-xs">
          {formatTimeAgo(postObj.createdAt)}
        </small>
      </div>

      <div className="relative">
        <div className="h-8 w-8 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full flex justify-center items-center">
          <EllipsisIcon className="fill-gray-500" />
        </div>
        {/* top-9 = translate-y-1 */}
        <ul className="bg-white absolute right-0 top-9 border rounded-lg p-2 shadow min-w-[144px] hidden">
          <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
            Edit
          </li>
          <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
}
