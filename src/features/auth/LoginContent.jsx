// import facebookLogo from "../../assets/facebook-5-logo-svgrepo-com.svg";
import facebookLogo2 from "../../assets/cdnlogo.com_facebook.svg";

export default function LoginContent() {
  return (
    <div className="max-w-[25rem] flex-1 min-[900px]:pt-[9rem] min-[1075px]:max-w-[36.25rem]">
      <div className="pb-7 flex justify-center min-[900px]:pb-6 min-[900px]:justify-start">
        {/* <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          className="-m-7 h-[6.625rem]"
          alt="fakebook-logo"
        /> */}
        <img
          src={facebookLogo2}
          className="h-[50px] p-0"
          // className="h-[250px] p-0"
          // className="absolute"
          alt="fakebook-logo"
        />
      </div>
      <h2 className="text-2xl font-medium text-center min-[900px]:text-left leading-7 min-[1075px]:text-[1.75rem] min-[1075px]:w-[31.25rem]">
        Facebook helps you connect and share with the people in your life.
      </h2>
    </div>
  );
}
