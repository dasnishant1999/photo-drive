import React from "react";
import { deletePermanent, restoreFromBin } from "../hooks/utils";
import { useAuth } from "../contexts/AuthContext";

import { motion } from "framer-motion";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import RestoreRoundedIcon from "@material-ui/icons/RestoreRounded";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

function BinIcons({ bin }) {
  const [open, setOpen] = React.useState(false);
  const { currentUser } = useAuth();

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
        <RestoreRoundedIcon
          onClick={() => restoreFromBin(currentUser.uid, bin)}
        />
        <DeleteForeverRoundedIcon onClick={handleClickOpen} />
      </motion.div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Forever?</DialogTitle>

        <DialogActions>
          <button id="btn-bin" onClick={() => handleClose()}>
            No
          </button>
          <button
            id="btn-delete"
            onClick={() => deletePermanent(currentUser.uid, bin)}
          >
            Yes
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BinIcons;
