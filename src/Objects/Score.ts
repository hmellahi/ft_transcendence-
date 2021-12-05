// this.CHARS = [
//     '111101101101111',
//     '010010010010010',
//     '111001111100111',
//     '111001111001111',
//     '101101111001001',
//     '111100111001111',
//     '111100111101111',
//     '111001001001001',
//     '111101111101111',
//     '111101111001111',

import {
  P5Sketch, // this are the type definitions
} from "vue-p5-component";
import { GameConstants } from "../Config/constants";

export default class Score {
  x: number;
  y: number;
  value: number;
  color: number;
  CHARS: Array<string>;
  BLOCK_SIZE: number;

  // Constructor method
  constructor(
    tempX: number,
    tempY: number,
    tempNumber: number = 0,
    tempColor: number = 0
  ) {
    this.BLOCK_SIZE = 10;
    this.value = tempNumber;
    this.x = tempX;
    this.y = tempY;
    this.CHARS = [
      "111101101101111",
      "010010010010010",
      "111001111100111",
      "111001111001111",
      "101101111001001",
      "111100111001111",
      "111100111101111",
      "111001001001001",
      "111101111101111",
      "111101111001111",
    ];
    this.color = tempColor;
  }

  // draw
  draw(sketch: P5Sketch): void {
    let { x, y, BLOCK_SIZE, CHARS, value } = this;

    sketch.fill(255, 255, 255);
    sketch.noStroke();
    // sketch.rect(x, y, radius, radius);
    let numStr = CHARS[value];
    numStr.split("").map((char, index) => {
      if (char == "0") return;
      let offsetX = x + (index%3) * BLOCK_SIZE;
      let offsetY = y + BLOCK_SIZE * Math.floor(index / 3);
      sketch.rect(offsetX, offsetY, BLOCK_SIZE, BLOCK_SIZE);
    });
  }

  setScore(newScore: number): void {
    this.value = newScore;
  }
}
