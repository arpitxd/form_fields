export const delayed = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, [5000]);
  });
  const response = await promise;
  return response;
};

export const addScrollClsOnBody = () => {
  document.body.classList.add('scroll-disabled');
};

export const removeScrollClsOnBody = () => {
  document.body.classList.remove('scroll-disabled');
};
