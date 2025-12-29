import FormButton from "./FormButton";
import { useRef, useState } from "react";

export default function PictureForm({ title, children, initialSrc, onSave }) {
  const inputEl = useRef(null);
  const [file, setFile] = useState(null);
  // if (file) console.log(URL.createObjectURL(file));

  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        // onChange={(e) => console.log(e)} // SyntheticBaseEvent object
        // onChange={(e) => console.dir(e.target)} // tag input.hidden object
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
            // access JS built in class object called FileList using [] like accessing arrays
          }
        }}
        // multiple // select multiple files when uploading
      />
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton onClick={() => onSave(file)}>Save</FormButton>
              <FormButton
                onClick={() => {
                  inputEl.current.value = "";
                  // to let onChange detect in case that you select the same picture after canceling
                  setFile(null);
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton
            onClick={() => {
              inputEl.current.click();
            }}
          >
            Edit
          </FormButton>
        </div>
      </div>
      <div className="flex justify-center">
        {children(file ? URL.createObjectURL(file) : initialSrc, () =>
          inputEl.current.click()
        )}
      </div>
    </div>
  );
}
