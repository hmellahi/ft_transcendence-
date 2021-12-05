<template>
  <P5 v-on="{ setup, draw, keypressed }" />
</template>

<script lang="ts">
import { GameConstants } from "../Config/constants";
import Ball from "./../Objects/Ball";
import Net from "./../Objects/Net";
import { Component, Vue } from "vue-property-decorator";
import P5, {
  P5Element,
  P5Sketch, // this are the type definitions
} from "vue-p5-component";
import Paddle from "@/Objects/Paddle";
import Score from "@/Objects/Score";

@Component({
  components: { P5 },
})
export default class Game extends Vue {
  // ({ canvas, backColor } = GameConstants)
  backColor: number = GameConstants.backColor; //todo change
  // xBall: number = Math.floor(Math.random() * 300) + GameConstants.ball.x;
  xBall: number = GameConstants.ball.x;
  yBall: number = GameConstants.ball.y;
  radius: number = 15;
  ball: Ball = new Ball(this.xBall, this.yBall, this.radius, 0);
  isGameOver: boolean = true;
  xPaddle = GameConstants.paddle.x;
  yPaddle = GameConstants.paddle.y;
  paddleWidth = GameConstants.paddle.width;
  paddleHeight = GameConstants.paddle.height;
  paddle: Paddle = new Paddle(
    this.xPaddle,
    this.yPaddle,
    this.paddleWidth,
    this.paddleHeight
  );

  // xPaddle2=GameConstants.paddle.firstPLayer
  // yPaddle2=GameConstants.paddle.y
  // paddleWidth=GameConstants.paddle.width
  // paddleHeight=GameConstants.paddle.height;
  paddle2: Paddle = new Paddle(
    400 - 40,
    170,
    this.paddleWidth,
    this.paddleHeight
  );

  net: Net = new Net();
  score: Score = new Score(140, 30, 3);
  score2: Score = new Score(240, 30, 9);

  setup(sketch: P5Sketch) {
    sketch.createCanvas(
      GameConstants.canvas.width,
      GameConstants.canvas.height
    );
  
  }
  draw(sketch: P5Sketch) {
    if (!this.isGameOver) {
    
    }
    sketch.background(this.backColor);
    this.net.draw(sketch);
    
    this.paddle.draw(sketch);
    this.paddle.update();
    this.paddle2.draw(sketch);

    this.ball.checkCollison(this.paddle);
    this.ball.update();
    this.ball.draw(sketch);

    // this.ball.checkCollison(this.paddle2);


    // this.score.setScore((this.score.value+1/1e)%10)
    this.score.draw(sketch);
    this.score2.draw(sketch);
  }

  keypressed(sketch: P5Sketch) {
    this.paddle.handleKey(sketch);
  }
}
</script>
