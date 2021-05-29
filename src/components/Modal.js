import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DataLayerContext } from "../contexts/DataLayerContext";

function Modal() {
  const { selectedImage, setselectedImage } = useContext(DataLayerContext);

  function handleClick(e) {
    if (e.target.classList.contains("back-drop")) {
      setselectedImage(null);
    }
  }

  return (
    <motion.div
      className="back-drop"
      onClick={handleClick}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="modal_image"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
}

export default Modal;
