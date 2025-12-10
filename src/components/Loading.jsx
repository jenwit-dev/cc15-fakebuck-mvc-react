import { LoaderIcon } from "../icons";

export default function Loading() {
  // Overlay with semi-transparent background (backdrop and loading spinner)
  // z-50 element is on top of z-40 element
  // The z-index property specifies the stack order of positioned elements.
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex items-center justify-center min-h-full">
          <LoaderIcon className="fill-blue-600 animate-spin" />
          {/* <div className="fill-blue-500">Sample</div> */}
        </div>
      </div>

      {/* test inset-0 */}
      {/* <div className="relative h-48 w-48 bg-gray-300">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div> */}
    </>
  );
}
