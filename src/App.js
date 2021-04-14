import { useState } from "react";
import "./App.css";
import FavouriteGrid from "./components/FavouriteGrid";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import useFirestore from "./hooks/useFirestore";

function App() {
  const [selectedImage, setselectedImage] = useState(null);
  const [checked, setchecked] = useState(false);
  const docs = useFirestore("images");
  const favourites = docs.filter((doc) => doc.isFav);
  console.log(docs,favourites);

  return (
    <div className="app">
      <Title checked={checked} setchecked={setchecked} />
      {!checked && <UploadForm />}
      {!checked && (
        <ImageGrid setselectedImage={setselectedImage} docs={docs} />
      )}
      {checked && (
        <FavouriteGrid
          setselectedImage={setselectedImage}
          favourites={favourites}
        />
      )}
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
