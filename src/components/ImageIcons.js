import React from "react";
import { deleteHandler, favouriteHandler } from "../hooks/utils";

import {motion} from "framer-motion";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

function ImageIcons({ doc }) {
  return (
    <motion.div
      className="image-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {!doc.isFav && (
        <StarBorderRoundedIcon onClick={() => favouriteHandler(doc)} />
      )}
      {doc.isFav && (
        <StarRoundedIcon
          htmlColor="#F59E0B"
          onClick={() => favouriteHandler(doc)}
        />
      )}
      <DeleteRoundedIcon onClick={() => deleteHandler(doc.id)} />
    </motion.div>
  );
}

export default ImageIcons;
