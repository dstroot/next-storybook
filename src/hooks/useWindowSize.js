import { useState, useEffect } from 'react';

// extracted and reusable!
const useWindowSize = () => {
  // dimensions
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return { width, height };
};

export default useWindowSize;
