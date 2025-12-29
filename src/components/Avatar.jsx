import defaultImage from "../assets/blank.png";
// import { useAuth } from "../hooks/use-auth";

export default function Avatar({ className = "h-10", src }) {
  const defaultClass = "rounded-full aspect-square";
  const classes = defaultClass + " " + className;
  // const { openFile } = useAuth();
  return (
    <img
      src={src || defaultImage}
      alt="user"
      className={classes}
      // onClick={openFile}
    />
  );
}
