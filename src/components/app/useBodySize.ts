import { useEffect, useState } from "react";

export const useBodySize = (): { height: number; width: number } => {
  const [resolution, setResolution] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = (): void =>
      setResolution({
        height: document.body.clientHeight,
        width: document.body.clientWidth,
      });

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...resolution };
};
