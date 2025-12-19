export default function Modal({
  title,
  children,
  maxWidth = 27,
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <>
          {/* backdrop / overlay  */}
          <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
          {/* container of modal */}
          <div className="fixed inset-0 z-30">
            {/* modal, add p-4 to keep the modal away from edge  */}
            <div className="flex justify-center items-center min-h-full p-4">
              {/* border of modal */}
              <div
                className="rounded-lg w-full bg-white shadow-2xl border"
                style={{ maxWidth: `${maxWidth}rem` }}
              >
                {/* modal header */}
                <div className="flex justify-between p-4 text-xl border-b">
                  <div className="invisible">X</div>
                  <div className="font-bold">{title}</div>
                  <div
                    className="text-gray-500 cursor-pointer"
                    onClick={onClose}
                  >
                    X
                  </div>
                </div>
                {/* modal body */}
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
