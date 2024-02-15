import { useEffect, useState } from "react";

function useDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    horizontal: window.innerWidth > window.innerHeight ? true : false,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
      horizontal: window.innerWidth > window.innerHeight ? true : false,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return dimensions;
}

export default useDimensions;
