import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const Title = ({ checked, setchecked }) => {
  const handleChange = (event) => {
    if (checked) {
      setchecked(false);
    } else {
      setchecked(true);
    }
  };

  const { isLightTheme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="title">
      <div className="header">
        <h1>PhotoDrive</h1>
        {!isLightTheme && (
          <WbSunnyIcon className="theme-icon" onClick={changeTheme} />
        )}
        {isLightTheme && (
          <Brightness2Icon className="theme-icon" onClick={changeTheme} />
        )}
      </div>
      <div className="title-header">
        <h2>Your {checked ? "favourites" : "gallery"}</h2>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              name="favourites"
              color="primary"
            />
          }
          label="Favourites"
        />
      </div>
    </div>
  );
};

export default Title;
