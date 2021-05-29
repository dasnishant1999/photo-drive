import React, { useContext } from "react";
import { DataLayerContext } from "../contexts/DataLayerContext";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const { error, seterror, file, setfile } = useContext(DataLayerContext);

  const types = ["image/png", "image/jpeg", "image/gif"];

  function changeHandler(e) {
    var selectedFile = e.target.files[0];

    if (selectedFile && types.includes(selectedFile.type)) {
      //   console.log(selectedFile);
      setfile(selectedFile);
      seterror(null);
    } else {
      setfile(null);
      seterror("please select an image file");
      //   console.log("Please select an image file");
    }
  }

  return (
    <div>
      <label className="upload-file-label">
        <input type="file" className="upload-file" onChange={changeHandler} />
        Upload Image
      </label>
      {/* {file && <p>{file.name}</p>} */}
      {error && <p>{error}</p>}
      {file && <ProgressBar />}
    </div>
  );
}

export default UploadForm;
