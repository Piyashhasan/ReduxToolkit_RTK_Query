import { createContext, useContext } from "react";

const ThemeManage = createContext();

// eslint-disable-next-line react/prop-types
export function ThemeController({ value, children }) {
  return <ThemeManage.Provider value={value}>{children}</ThemeManage.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeManage);
}
