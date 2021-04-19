import React from "react";
import { motion } from "framer-motion";
import ImageIcons from "./ImageIcons";

function ImageGrid({ setselectedImage ,docs}) {
  // const docs = useFirestore("images");
  console.log(docs);

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div className="image-section" key={doc.id}>
            <motion.div
              className="image-wrap"
              onClick={() => setselectedImage(doc.url)}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
            <ImageIcons doc={doc} />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
