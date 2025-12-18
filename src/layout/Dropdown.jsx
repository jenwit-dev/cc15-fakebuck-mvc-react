import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { useRef } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // 3 usage of useRef
  // 1. Accessing DOM element
  // In this Dropdown component, useRef is used to access the dropdwon element (the biggest div container in this Dropdwon componenet via ref attribute) in order to detect clicks outside the dropdown
  // 2. Managing uncontrolled componenets like <input /> or <textarea>
  // React does not control the form elements, let DOM do the job instead by using useRef
  // 3. Persisting mutable values
  // like storing a counter across renders without triggering a re-render
  const dropDownEl = useRef(null);

  const { logout, authUser } = useAuth();

  // pattern 1 without useEffect
  // 1.1 if click outside dropdown, increment by 1 each click
  // 1.2 if click at dropdown, increment many times for each click, for example, if you click at dropdown 6 times, it will be 2 5 9 14 20 27, this is due to onClick={() => setIsOpen(!isOpen)} at dropdown
  // document.addEventListener("click", () => {
  //   console.log("click somewhere");
  // });

  // pattern 2 with useEffect
  // this helps clicking more consistent
  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     console.log("click somewhere 2");
  //   });
  // }, []);

  // pattern 3 test event object
  // useEffect(() => {
  //   const handleClickOutside = (eventObject) => {
  //     console.log(eventObject); // PointerEvent object
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

  // for real
  useEffect(() => {
    const handleClickOutside = (e) => {
      // console.log(e.target);
      if (!dropDownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropDownEl}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Avatar src={authUser.profileImage} />
      </div>
      {isOpen && (
        // Dropdown menu
        // translate-y-1 or top-12 to move the dropdown menu down a bit relative to the avatar
        <div className="w-96 absolute bg-white right-0 top-12 border rounded-xl shadow-xl p-2">
          <Link to={`/profile/${authUser.id}`} onClick={() => setIsOpen(false)}>
            <div className="flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
              <Avatar className="h-14" src={authUser.profileImage} />
              <div>
                <div className="font-semibold">
                  {authUser.firstName} {authUser.lastName}
                </div>
                <div className="text-sm text-gray-500">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="m-2 border" />
          <div
            className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
            onClick={logout}
          >
            <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <div className="font-semibold text-sm">Log out</div>
          </div>
        </div>
      )}
    </div>
  );
}
