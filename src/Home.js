import React, { useContext } from "react";
import "./App.css";

import BinGrid from "./components/BinGrid";
import FavouriteGrid from "./components/FavouriteGrid";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import { DataLayerContext } from "./contexts/DataLayerContext";
import useFirestore from "./hooks/useFirestore";

function Home() {
  const docs = useFirestore("users");
  const favourites = docs.filter((doc) => doc.isFav);

  const { selectedImage, tabs, settabs } = useContext(DataLayerContext);

  return (
    <div className="app">
      <Title tabs={tabs} settabs={settabs} />
      {tabs === 1 && <UploadForm />}
      {tabs === 1 && <ImageGrid docs={docs} />}
      {tabs === 2 && <FavouriteGrid favourites={favourites} />}
      {tabs === 3 && <BinGrid />}
      {selectedImage && <Modal />}
    </div>
  );
}

export default Home;
