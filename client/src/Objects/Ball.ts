import {
  P5Sketch, // this are the type definitions
} from "vue-p5-component";
import { GameConstants } from "../Config/constants";
import Paddle from "@/Objects/Paddle";

export default class {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  color: number;
  speed: number;
  top: number = 0;
  bottom: number = 0;
  left: number = 0;
  right: number = 0;

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
    this.velocityX = 5;
    this.velocityY = 5;
    this.speed = 4;
    this.color = tempColor;
  }

  // draw
  draw(sketch: P5Sketch): void {
    let { x, y, radius } = this;

    // sketch.fill(255, 255, 255);
    sketch.fill("red");
    sketch.noStroke();
    sketch.ellipse(x, y, radius * 2, radius * 2);
  }

  update(): void {
    let { velocityY, velocityX, x, y, radius } = this;
    let { canvas } = GameConstants;
    let { width, height } = canvas;

    if (x < radius / 2 || x > width - radius / 2) {
      this.velocityX *= -1;
    }
    if (y < radius / 2 || y > height - radius) {
      this.velocityY *= -1
    }

    this.x += this.velocityX// * (Math.random() * 10);
    this.y += this.velocityY
    // console.log(this.x, this.y);
  }

  hits(player: Paddle): boolean {
    // let { x, y, radius } = this;
    // let { x: xPaddle, y: yPaddle, width } = paddle;
    // if (x + radius > xPaddle - width/2&& x < xPaddle + width && y + radius / 2 >= yPaddle) {
    //   this.velocityX *= -1;
    //   this.velocityY *= -1;
    // }

    // returns true or false
    player.top = player.y;
    player.right = player.x + player.width;
    player.bottom = player.y + player.height;
    player.left = player.x;

    this.top = this.y - this.radius;
    this.right = this.x + this.radius;
    this.bottom = this.y + this.radius;
    this.left = this.x - this.radius;

    return (
      this.left < player.right &&
      this.top < player.bottom &&
      this.right > player.left &&
      this.bottom > player.top
    );
  }

  reverse(player: Paddle, isFirstPlayer: boolean): void {
    // play hitSound
    // hitSound.play(); todo
    // default angle is 0deg in Radian
    let angle = 0;

    // if ball hit the top of paddle
    if (this.y < player.y + player.height / 2) {
      // then -1 * Math.PI / 4 = -45deg
      angle = (-1 * Math.PI) / 4;
    } else if (this.y > player.y + player.height / 2) {
      // if it hit the bottom of paddle
      // then angle will be Math.PI / 4 = 45deg
      angle = Math.PI / 4;
    }

    /* change velocity of according to on which paddle the hitted */
    this.velocityX = (isFirstPlayer ? 1 : -1) * this.speed * Math.cos(angle);
    this.velocityY = this.speed * Math.sin(angle);

    // increase speed
    this.speed += 0.2;
  }

  reset() {
    let { canvas } = GameConstants;
    let { height: windowsHeight, width: windowsWidth } = canvas;
    this.y = windowsHeight / 2;
    this.x = windowsWidth / 2;
    this.speed = 4;
  }

  checkBorders(): number {
    if (this.x - this.radius / 2 <= 0) return 2;
    if (this.x + this.radius / 2 >= GameConstants.canvas.width) return 1;
    return 0;
  }
}
// load sounds
// => musics

// keyreleased => stop
// scoring functions
// check if someone scored
// => increase player score
// if score reaches max
// => stop the game
// => reset

// types of tests:
// Unit Testing
// Component Testing
// End-To-End (E2E) Testing
//
