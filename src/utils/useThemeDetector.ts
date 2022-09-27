import { useState, useEffect } from "react";

// Detecting theme in React
// https://medium.com/hypersphere-codes/detecting-system-theme-in-javascript-css-react-f6b961916d48

export const useThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = ((e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
    setIsDarkTheme(e.matches);
  });

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme;
}