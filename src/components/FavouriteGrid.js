import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function FavouriteGrid({ setselectedImage, favourites }) {
  //   const docs = useFirestore("favourites");
  console.log(favourites);

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
