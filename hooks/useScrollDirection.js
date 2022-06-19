import { useState, useEffect, useCallback } from "react";

export const useScrollDirection = () => {
  const [y, setY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true);

  const handleScroll = useCallback(() => {
    if (y > window.scrollY) setScrollDirection(true);
    if (y < window.scrollY) setScrollDirection(false);

    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    if (typeof window) setY(document.scrollingElement.scrollHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return scrollDirection;
};
