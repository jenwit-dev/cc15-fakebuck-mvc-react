import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
import UnknownAction from "./UnknownAction";
import FriendAction from "./FriendAction";
import RequesterAction from "./RequesterACtion";
import ReceiverAction from "./ReceiverAction";

export default function ProfileInfo({
  profileUser,
  statusWithAuthUser,
  setStatusWithAuthUser,
}) {
  const mappingObj = {
    AUTH_USER: <AuthUserAction />,
    UNKNOWN: <UnknownAction setStatusWithAuthUser={setStatusWithAuthUser} />,
    FRIEND: <FriendAction />,
    REQUESTER: <RequesterAction />,
    RECEIVER: <ReceiverAction />,
  };

  return (
    <div className="max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className="-mt-8">
        <Avatar
          className="h-40 outline outline-[3px] outline-white"
          src={profileUser.profileImage}
        />
      </div>
      <div className="flex-1 mb-2">
        <h2 className="text-2xl font-bold">
          {profileUser.firstName} {profileUser.lastName}
        </h2>
        <span className="block text-gray-500 font-semibold mb-2">
          6 friends
        </span>
        <div className="flex -space-x-2">
          <Avatar className="h-8" />
          <Avatar className="h-8" />
        </div>
      </div>
      <div>{mappingObj[statusWithAuthUser]}</div>
    </div>
  );
}
