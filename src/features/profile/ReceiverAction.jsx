import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import ActionButton from "./ActionButton";

export default function ReceiverAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams();

  const handleClickAccept = async () => {
    try {
      await axios.patch(`/friend/${profileId}`);
      setStatusWithAuthUser("FRIEND");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickReject = async () => {
    try {
      await axios.delete(`/friend/${profileId}/reject`);
      setStatusWithAuthUser("UNKNOWN");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex gap-4">
      <ActionButton onClick={handleClickAccept}>Accept</ActionButton>
      <ActionButton onClick={handleClickReject}>Reject</ActionButton>
    </div>
  );
}
