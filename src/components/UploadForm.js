import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);

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
      <input type="file" onChange={changeHandler} />
      {file && <p>{file.name}</p>}
      {error && <p>{error}</p>}
      {file && <ProgressBar file={file} setfile={setfile} />}
    </div>
  );
}

export default UploadForm;
