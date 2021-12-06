export const GameConstants = {
  canvas: { width: 600, height: 400 },
  /* some extra variables */
  netWidth: 4,
  backColor: 0,
  //   netHeight : canvas.height,

  paddleWidth: 10,
  paddleHeight: 100,
  upArrowPressed: false,
  downArrowPressed: false,

  /* some extra variables ends */

  /* objects */
  // net
  paddle: {
    // x: canvas.width / 2 - netWidth / 2,
    x: 40,
    y: 200 - 60/2,
    width: 10,
    height: 60,
    color: "#FFF",
  },

  // user paddle
  user: {
    x: 10,
    // y: canvas.height / 2 - paddleHeight / 2,
    // width: paddleWidth,
    // height: paddleHeight,
    color: "#FFF",
    score: 0,
  },

  //   ai :{
  //     x: canvas.width - (paddleWidth + 10),
  //     y: canvas.height / 2 - paddleHeight / 2,
  //     width: paddleWidth,
  //     height: paddleHeight,
  //     color: "#FFF",
  //     score: 0,
  //   },

  // ball
  ball: {
    x: 400 / 2, // todo
    // x: this.canvas.width / 2,
    // y: canvas.height / 2,
    y: 400 / 2,
    radius: 7,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: "#05EDFF",
  },

  /* objects declaration ends */

  /* drawing functions */

  /* drawing functions end */
};

// console.log(Constants.netWidth)
// export class constants;
