import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState();

  const updateWidth = () => {
    if (typeof window) {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  useEffect(() => {
    updateWidth();
  }, []);

  return width;
};
