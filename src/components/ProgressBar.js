import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

function ProgressBar({ file, setfile }) {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{width:0}}
      animate={{width:progress+'%'}}
    ></motion.div>
  );
}

export default ProgressBar;
