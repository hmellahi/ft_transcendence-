import {
  P5Sketch, // this are the type definitions
} from "vue-p5-component";
import { GameConstants } from "../Config/constants";
import Paddle from "@/Objects/Paddle";

export default class Ball {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
  color: number;

  // Constructor method
  constructor(
    tempX: number,
    tempY: number,
    tempRadius: number,
    tempColor: number
  ) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempRadius;
    this.speedX = 2;
    this.speedY = 2;
    this.color = tempColor;
  }

  // draw
  draw(sketch: P5Sketch): void {
    let { x, y, radius } = this;

    sketch.fill(255, 255, 255);
    sketch.noStroke();
    sketch.ellipse(x, y, radius, radius);
  }

  update(): void {
    let { speedY, speedX, x, y, radius } = this;
    let { canvas } = GameConstants;
    let { width, height } = canvas;

    if (x < radius / 2 || x > width - radius / 2) {
      this.speedX *= -1;
    }
    if (y < radius / 2 || y > height - radius) {
      this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
    // console.log(this.x, this.y);
  }

  checkCollison(paddle: Paddle): void {
    let { x, y, radius } = this;
    let { x: xPaddle, y: yPaddle, width } = paddle;
    if (x > xPaddle && x < xPaddle + width && y + radius / 2 >= yPaddle) {
      this.speedX *= -1;
      this.speedY *= -1;
    }
  }
}
