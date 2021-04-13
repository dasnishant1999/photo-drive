import { useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";

function App() {
  const [selectedImage, setselectedImage] = useState(null);

  return (
    <div className="app">
      <Title />
      <UploadForm />
      <ImageGrid setselectedImage={setselectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setselectedImage={setselectedImage}
        />
      )}
    </div>
  );
}

export default App;
