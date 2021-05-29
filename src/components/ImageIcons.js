import React, { useState } from "react";
import { deleteHandler, favouriteHandler, moveToBin } from "../hooks/utils";
import { useAuth } from "../contexts/AuthContext";

import { motion } from "framer-motion";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function ImageIcons({ doc }) {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();

  // var afterSlash = doc.url.split('/')[7];
  // var filename=afterSlash.split('?')[0];
  // console.log(filename)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <motion.div
        className="image-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {!doc.isFav && (
          <StarBorderRoundedIcon
            onClick={() => favouriteHandler(currentUser.uid, doc)}
          />
        )}
        {doc.isFav && (
          <StarRoundedIcon
            htmlColor="#F59E0B"
            onClick={() => favouriteHandler(currentUser.uid, doc)}
          />
        )}
        <DeleteRoundedIcon onClick={handleClickOpen} />
      </motion.div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deleting will permanently delete the photo from your gallery.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button id="btn-bin" onClick={() => moveToBin(currentUser.uid, doc)}>
            Move to bin
          </button>
          <button
            id="btn-delete"
            onClick={() => deleteHandler(currentUser.uid, doc)}
          >
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ImageIcons;
