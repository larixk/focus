export default (callback) => {
  const wrappedCallback = () => {
    requestAnimationFrame(wrappedCallback);
    callback();
  };
  wrappedCallback();
};
