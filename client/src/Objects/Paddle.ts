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
  top: number = 0;
  bottom: number = 0;
  left: number= 0;
  right: number= 0;

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

  handleKeyPressed(sketch: P5Sketch) {
    let { UP_ARROW, DOWN_ARROW, keyCode } = sketch;
    // console.log(keyCode== LEFT_ARROW);
    if (keyCode === UP_ARROW) {
      this.velocity = -1;
    } else if (keyCode === DOWN_ARROW) {
      this.velocity = 1;
    }
    // console.log(this.velocity);
  }

  handleKeyReleased(sketch: P5Sketch) {
    let { UP_ARROW, DOWN_ARROW, keyCode } = sketch;
    // console.log(keyCode== LEFT_ARROW);
    if (keyCode === UP_ARROW) {
      this.velocity = 0;
    } else if (keyCode === DOWN_ARROW) {
      this.velocity = 0;
    }
    // console.log(this.velocity);
  }
}
