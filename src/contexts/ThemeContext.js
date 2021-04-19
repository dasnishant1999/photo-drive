import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [isLightTheme, settheme] = useState(false);

  const theme = {
    light: { bg: "#ddd", color: "#4e4e4e" },
    dark: { bg: "#333", color: "#ddd" },
  };

  const changeTheme = () => {
    const bodyStyle = document.body.style;
    if (isLightTheme) {
      bodyStyle.backgroundColor = theme.dark.bg;
      bodyStyle.color = theme.dark.color;
    } else {
      bodyStyle.backgroundColor = theme.light.bg;
      bodyStyle.color = theme.light.color;
    }
    settheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, isLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
