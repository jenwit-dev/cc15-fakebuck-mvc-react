import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

// double destructure / nested destructure
// export default function PostItem({ postObj: { message, image, userId } }) {
export default function PostItem({ postObj }) {
  // const { message, image, userId } = postObj;

  return (
    <div className="bg-white px-4 pt-3 border shadow rounded-lg">
      <PostHeader postObj={postObj} />
      <PostContent message={postObj.message} image={postObj.image} />
      <PostFooter />
    </div>
  );
}
