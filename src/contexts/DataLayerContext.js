import React, { createContext, useState } from "react";

export const DataLayerContext = createContext();

function DataLayerContextProvider({ children }) {
  const [selectedImage, setselectedImage] = useState(null);
  const [tabs, settabs] = useState(1);
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);

  const value = {
    selectedImage,
    setselectedImage,
    tabs,
    settabs,
    file,
    setfile,
    error,
    seterror,
  };

  return (
    <DataLayerContext.Provider value={value}>
      {children}
    </DataLayerContext.Provider>
  );
}

export default DataLayerContextProvider;
