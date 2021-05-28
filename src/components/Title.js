import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const Title = ({ tabs, settabs }) => {
  const { isLightTheme, changeTheme } = useContext(ThemeContext);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function logoutHandler() {
    try {
      await logout();
      history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="title">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to logout?</DialogTitle>
        <DialogActions>
          <button id="btn-bin" onClick={handleClose}>
            No
          </button>
          <button id="btn-delete" onClick={logoutHandler}>
            Yes
          </button>
        </DialogActions>
      </Dialog>
      <div className="header">
        <h1>PhotoDrive</h1>
        <div className="header-right">
          {!isLightTheme && (
            <WbSunnyIcon className="theme-icon" onClick={changeTheme} />
          )}
          {isLightTheme && (
            <Brightness2Icon className="theme-icon" onClick={changeTheme} />
          )}
          <button className="btn-logout" onClick={handleClickOpen}>
            {currentUser.email[0].toUpperCase()}
          </button>
        </div>
      </div>
      <div className="title-header">
        <h2>
          Your {tabs === 1 ? "gallery" : tabs === 2 ? "favourites" : "bin"}
        </h2>
        <div className="tabs">
          <button className="btn-tab" onClick={() => settabs(1)}>
            Photos
          </button>
          <button className="btn-tab" onClick={() => settabs(2)}>
            Favourites
          </button>
          <button className="btn-tab" onClick={() => settabs(3)}>
            Bin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
