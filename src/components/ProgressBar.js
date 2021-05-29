import React, { useContext, useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
import { DataLayerContext } from "../contexts/DataLayerContext";

function ProgressBar() {
  const { file, setfile } = useContext(DataLayerContext);
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBar;
