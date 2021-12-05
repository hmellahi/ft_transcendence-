import {
  P5Sketch, // this are the type definitions
} from "vue-p5-component";
import { GameConstants } from "../Config/constants";

export default class Ball {
  x: number;
  y: number;
  width: number;
  height: number;
  color: number;
  speed: number;
  velocity:number;

  // Constructor method
  constructor(
    tempX: number,
    tempY: number,
    tempWidth: number,
    tempHeight: number,
    tempColor: number = 0
  ) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempWidth;
    this.height = tempHeight;
    this.color = tempColor;
    this.speed = 3;
    this.velocity = 0;
  }

  // draw
  draw(sketch: P5Sketch) {
    let { x, y, width, height } = this;

    sketch.fill(255,255,255);
    sketch.noStroke();
    sketch.rect(x, y, width, height);
  }

  update() {
    let windowHeight = GameConstants.canvas.height;
    let nexPos = this.y + this.velocity * this.speed
    if (nexPos + this.height > windowHeight || nexPos < 0)
      return;
    this.y = nexPos;
  }

  handleKey(sketch: P5Sketch) {
    let { LEFT_ARROW, RIGHT_ARROW, keyCode } = sketch;
    // console.log(keyCode== LEFT_ARROW);
    if (keyCode === LEFT_ARROW) {
      this.velocity = 1;
    } else if (keyCode === RIGHT_ARROW) {
      this.velocity = -1;
    }
    // console.log(this.velocity);
  }
}
