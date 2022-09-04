import { useEffect, useState } from 'react';

const useOutsideClick = (ref) => {
  const [isOutsideClicked, setIsOutsideClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref?.current && !ref?.current?.contains(event.target)) {
        setIsOutsideClicked(true);
      } else {
        setIsOutsideClicked(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return isOutsideClicked;
};

export default useOutsideClick;
