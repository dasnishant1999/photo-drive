import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DataLayerContext } from "../contexts/DataLayerContext";

function FavouriteGrid({ favourites }) {
  const { setselectedImage } = useContext(DataLayerContext);

  return (
    <div className="image-grid">
      {favourites &&
        favourites.map((favourite) => (
          <motion.div className="image-section" key={favourite.id}>
            <motion.div
              className="image-wrap"
              onClick={() => setselectedImage(favourite.url)}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={favourite.url}
                alt="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
}

export default FavouriteGrid;
