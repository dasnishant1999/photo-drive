import React, { useContext } from "react";
import { motion } from "framer-motion";
import useBin from "../hooks/useBin";
import BinIcons from "./BinIcons";
import { DataLayerContext } from "../contexts/DataLayerContext";

function BinGrid() {
  const bin = useBin("users");

  const { setselectedImage } = useContext(DataLayerContext);

  return (
    <div className="image-grid">
      {bin &&
        bin.map((binImage) => (
          <motion.div className="image-section" key={binImage.id}>
            <motion.div
              className="image-wrap"
              onClick={() => setselectedImage(binImage.url)}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={binImage.url}
                alt="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <BinIcons bin={binImage} />
          </motion.div>
        ))}
    </div>
  );
}

export default BinGrid;
