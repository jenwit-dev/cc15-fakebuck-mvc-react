import { useEffect, useState } from "react";
import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
// import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
// import Loading from "../components/Loading";
import { useAuth } from "../hooks/use-auth";

export default function ProfilePage() {
  // const location = useLocation();
  // console.log(location); // { pathname: '/profile/3',.. }

  // const params = useParams();
  // console.log(params); // { profileId: '3' } , profileId comes from createBrowserRouter

  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState("");
  const { profileId } = useParams();
  const [profileFriends, setProfileFriends] = useState([]);

  const { authUser } = useAuth();
  const isAuthUser = authUser.id === +profileId;
  // const [loading, setLoading] = useState(true);
  // const [text, setText] = useState("");

  // console.log(`profileId : ${profileId}`);
  // console.log(typeof profileId); // profileId from useParams is always a string

  useEffect(() => {
    // console.log("Effect ran for profileId", profileId);
    // if (authUser.id === +profileId) {
    //   setProfileUser(authUser);
    // } else {
    axios
      .get(`/user/${profileId}`, {
        headers: {
          "Cache-Control": "no-cache", // Prevent caching
          Pragma: "no-cache", // HTTP/1.0 compatibility
          "If-Modified-Since": "0", // Force fresh data
        },
      })
      .then((res) => {
        // batching 3 state updates into a single render
        // setProfileUser(res.data.user);
        // setLoading(false);
        // setText("Hello");

        setProfileUser(res.data.user);
        setStatusWithAuthUser(res.data.status);
        setProfileFriends(res.data.friends);
      })
      .catch((err) => console.log(err));
    // .finally(() => setLoading(false));
    // }
  }, [profileId, statusWithAuthUser]);

  // Dependency array can be states, props, or string params that when they change, the effect will re-run

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white shadow pb-4">
      {profileUser ? (
        <>
          <ProfileCover
            coverImage={
              isAuthUser ? authUser.coverImage : profileUser?.coverImage
            }
          />
          <ProfileInfo
            profileUser={isAuthUser ? authUser : profileUser}
            statusWithAuthUser={statusWithAuthUser}
            setStatusWithAuthUser={setStatusWithAuthUser}
            profileFriends={profileFriends}
          />
        </>
      ) : (
        <h1 className="text-center p-8 text-3xl font-bold">
          404 User not found
        </h1>
      )}
    </div>
  );
}
