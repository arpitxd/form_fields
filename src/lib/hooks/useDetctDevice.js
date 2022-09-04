import { useEffect, useState } from 'react';

const useDetectDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    window?.innerWidth <= 768,
  );
  const handleWindowResize = () => {
    const mobiledevice = window?.innerWidth <= 768;
    if (mobiledevice !== isMobileDevice) {
      setIsMobileDevice(mobiledevice);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return isMobileDevice;
};

export default useDetectDevice;
