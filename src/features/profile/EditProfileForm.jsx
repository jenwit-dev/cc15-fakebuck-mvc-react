import PictureForm from "./PictureForm";
import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import Loading from "../../components/Loading";

export default function EditProfileForm({ onSuccess }) {
  const { authUser, updateProfile } = useAuth();
  const [loading, setLoading] = useState(false);

  const uploadProfileImage = async (file) => {
    try {
      // console.log(input);
      const formData = new FormData();
      formData.append("profileImage", file);
      setLoading(true);
      await updateProfile(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const uploadCoverImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("coverImage", file);
      setLoading(true);
      await updateProfile(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {loading && <Loading />}
      <PictureForm
        title="Profile picture"
        // initialSrc="https://res.cloudinary.com/dlfufc637/image/upload/v1766583962/bjxqxmajfdarqvtpkfaw.jpg"
        initialSrc={authUser.profileImage}
        onSave={uploadProfileImage}
      >
        {/* Make children props between opening and ending tags as a function like onClick (pass props into children props) */}
        {(src, onClick) => (
          <div onClick={onClick} className="cursor-pointer">
            <Avatar
              className="h-40"
              // src="https://images.unsplash.com/photo-1541336187922-bffa4ef13d45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={src}
            />
          </div>
        )}
      </PictureForm>
      <PictureForm
        title="Cover photo"
        initialSrc={authUser.coverImage}
        onSave={uploadCoverImage}
      >
        {(src, onClick) => (
          <div
            className="aspect-[3/1] overflow-hidden rounded-md flex justify-center items-center cursor-pointer"
            onClick={onClick}
          >
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}
