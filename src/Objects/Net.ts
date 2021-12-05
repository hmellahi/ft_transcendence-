import {
  P5Sketch, // this are the type definitions
} from "vue-p5-component";
import { GameConstants } from "../Config/constants";

export default class Net {
  //   x: number;
  //   y: number;
  //   width: number;
  //   height: number;
  //   color: number;
  //   speed: number;

  // Constructor method
  constructor() {
    //   tempColor: number = 0 //   tempHeight: number, //   tempWidth: number, //   tempY: number, //   tempX: number,
    //   this.x = tempX;
    //   this.y = tempY;
    //   this.width = tempWidth;
    //   this.height = tempHeight;
    //   this.color = tempColor;
    //   this.speed = 10;
  }

  // draw
  draw(sketch: P5Sketch) {
    // let { x, y } = this;

    let { canvas } = GameConstants;
    let { width, height } = canvas;

    let ratio = Math.floor(height / 20);
    let x = width / 2;
    sketch.fill(255, 255, 255);
    sketch.noStroke();
    for (let i = 0; i < height; i += ratio*2) {
      sketch.rect(x, i, 10, ratio);
    }
    // console.log("ratio " + ratio + " " + height);
  }
}
