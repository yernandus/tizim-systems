import { useEffect, useState } from 'react';

export const MAX_MOBILE_WIDTH = 952;

const getWindowDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;
  return {
    height,
    width,
  };
};

export default function useDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...windowDimensions,
    isMobile: windowDimensions.width <= MAX_MOBILE_WIDTH,
  };
}
