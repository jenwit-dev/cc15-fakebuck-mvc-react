import defaultImage from "../../assets/cover-1.jpeg";

export default function CoverImage({ src }) {
  return <img src={src || defaultImage} alt="cover-1" />;
}
