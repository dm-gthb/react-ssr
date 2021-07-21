export const resolvePromise = (promise) => {
  if (promise) {
    return new Promise((res, rej) => {
      promise.then(res).catch(res);
    });
  }
};
