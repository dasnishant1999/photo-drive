import { useState } from "react";
import "./App.css";
import BinGrid from "./components/BinGrid";
import FavouriteGrid from "./components/FavouriteGrid";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import useFirestore from "./hooks/useFirestore";

function App() {
  const [selectedImage, setselectedImage] = useState(null);
  const [tabs, settabs] = useState(1);
  const docs = useFirestore("images");
  const favourites = docs.filter((doc) => doc.isFav);

  // console.log(docs,favourites);

  return (
    <ThemeContextProvider>
      <div className="app">
        <Title tabs={tabs} settabs={settabs} />
        {tabs === 1 && <UploadForm />}
        {tabs === 1 && (
          <ImageGrid setselectedImage={setselectedImage} docs={docs} />
        )}
        {tabs === 2 && (
          <FavouriteGrid
            setselectedImage={setselectedImage}
            favourites={favourites}
          />
        )}
        {tabs === 3 && <BinGrid setselectedImage={setselectedImage} />}
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            setselectedImage={setselectedImage}
          />
        )}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
