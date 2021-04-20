import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const Title = ({ tabs, settabs }) => {
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
        <h2>
          Your {tabs === 1 ? "gallery" : tabs === 2 ? "favourites" : "bin"}
        </h2>
        <div className="tabs">
          <button className='btn-tab' onClick={() => settabs(1)}>Photos</button>
          <button className='btn-tab' onClick={() => settabs(2)}>Favourites</button>
          <button className='btn-tab' onClick={() => settabs(3)}>Bin</button>
        </div>
      </div>
    </div>
  );
};

export default Title;
