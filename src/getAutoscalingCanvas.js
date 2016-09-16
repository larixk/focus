import autoscale from 'canvas-autoscale';

export default () => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  autoscale(canvas, {
    target: [0, 0],
  });

  const ctx = canvas.getContext('2d');

  return { canvas, ctx };
};
