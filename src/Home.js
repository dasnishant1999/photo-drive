import React, { useState } from "react";
import "./App.css";

import BinGrid from "./components/BinGrid";
import FavouriteGrid from "./components/FavouriteGrid";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import useFirestore from "./hooks/useFirestore";

function Home() {
  const [selectedImage, setselectedImage] = useState(null);
  const [tabs, settabs] = useState(1);
  const docs = useFirestore("users");
  const favourites = docs.filter((doc) => doc.isFav);
  return (
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
  );
}

export default Home;
