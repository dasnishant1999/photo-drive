import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const Title = ({ checked, setchecked }) => {
  const handleChange = (event) => {
    if (checked) {
      setchecked(false);
    } else {
      setchecked(true);
    }
  };

  return (
    <div className="title">
      <h1>PhotoDrive</h1>
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
