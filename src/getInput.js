import getPixels from 'get-pixels';


export default () => new Promise((resolve, reject) => {
  getPixels(require('../test.jpg'), (err, pixels) => {
    if (err) {
      return reject(err);
    }
    return resolve(pixels);
  });
});
