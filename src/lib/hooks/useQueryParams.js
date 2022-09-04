import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const searchParams = useLocation()?.search;
  const [params, setParams] = useState({});
  useEffect(() => {
    setParams(queryString.parse(searchParams));
  }, [searchParams]);

  return params;
};

export default useQueryParams;
