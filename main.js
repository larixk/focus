import getAutoscalingCanvas from './src/getAutoscalingCanvas';
import everyFrame from './src/everyFrame';
import draw from './src/draw';
import getInput from './src/getInput';

getInput()
  .then((input) => {
    const { canvas, ctx } = getAutoscalingCanvas();
    everyFrame(() => draw({ canvas, ctx, input }));
  });
