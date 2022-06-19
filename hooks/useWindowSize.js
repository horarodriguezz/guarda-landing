import { useState, useEffect, useCallback } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(1025);

  const updateWidth = useCallback(() => {
    if (typeof window) {
      setWidth(window.innerWidth);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  return width;
};
