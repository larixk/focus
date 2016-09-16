import mousePosition from 'mouse-position';

const mouse = mousePosition();

const drawLine = ({ canvas, ctx, input }) => {
  const inputWidth = input.shape[0];
  const inputHeight = input.shape[1];

  const x = Math.floor(Math.random() * inputWidth);
  const y = Math.floor(Math.random() * inputHeight);

  const r = input.data[4 * (x + (y * inputWidth))];
  const g = input.data[(4 * (x + (y * inputWidth))) + 1];
  const b = input.data[(4 * (x + (y * inputWidth))) + 2];

  const color = `rgba(${r},${g},${b}, 1)`;

  ctx.strokeStyle = color;
  ctx.lineWidth = 1 + (Math.random() * 5);
  ctx.beginPath();
  ctx.moveTo(
    ((canvas.width / 2) - (inputWidth / 2)) + x,
    ((canvas.height / 2) - (inputHeight / 2)) + y
  );
  ctx.lineTo(mouse[0], mouse[1]);
  ctx.stroke();
};

export default ({ ctx, input, canvas }) => {
  canvas.width = canvas.width;
  Array.from(Array(800)).forEach(() => drawLine({ ctx, input, canvas }));
};
