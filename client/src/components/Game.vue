<template>
  <div id="game">
    <P5 v-on="{ setup, draw, keyreleased, keypressed, preload }" />
  </div>
</template>

<script lang="ts">
import { GameConstants } from "../Config/constants";
import Ball from "./../Objects/Ball";
// import require from "http";
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
  radius: number = 10;
  sounds: Array<any> = [];
  ball: Ball = new Ball(this.xBall, this.yBall, this.radius, 0);
  isGameOver: boolean = false;
  xPaddle = GameConstants.paddle.x;
  yPaddle = GameConstants.paddle.y;
  paddleWidth = GameConstants.paddle.width;
  paddleHeight = GameConstants.paddle.height;
  paddle: Paddle = new Paddle(
    // this.xPaddle,
    40,
    this.yPaddle,
    this.paddleWidth,
    this.paddleHeight
  );

  // xPaddle2=GameConstants.paddle.firstPLayer
  // yPaddle2=GameConstants.paddle.y
  // paddleWidth=GameConstants.paddle.width
  // paddleHeight=GameConstants.paddle.height;
  paddle2: Paddle = new Paddle(
    GameConstants.canvas.width - 40 - this.paddleWidth / 2,
    this.yPaddle,
    this.paddleWidth,
    this.paddleHeight
  );

  net: Net = new Net();
  score: Score = new Score(GameConstants.canvas.width / 3 - 60, 30);
  score2: Score = new Score(
    GameConstants.canvas.width - GameConstants.canvas.width / 3,
    30,
    0
  );
  scores: Score[] = [this.score, this.score2];

  mounted() {
    const hitSound = new Audio(require("@/assets/sounds/mario_coin.mp3"));
    this.sounds.push(hitSound);
    // const hitSound = new Audio(require("@/assets/sounds/mario_coin.mp3"));
    // const hitSound = new Audio(require("@/assets/sounds/mario_coin.mp3"));
  }
  setup(sketch: P5Sketch) {
    sketch.createCanvas(
      GameConstants.canvas.width,
      GameConstants.canvas.height
    );
  }
  draw(sketch: P5Sketch) {
    if (this.isGameOver) return;
    sketch.background(this.backColor);
    this.net.draw(sketch);

    this.paddle.draw(sketch);
    this.paddle.update();
    this.paddle2.draw(sketch);

    let player: Paddle =
      this.ball.x > GameConstants.canvas.width / 2 ? this.paddle2 : this.paddle;
    if (this.ball.hits(player)) {
      this.playMusic(this.sounds[0]);
      // console.log(this.sounds[0]);
      this.ball.reverse(player, player == this.paddle);
    }
    let ballHitsBorder = this.ball.checkBorders();
    if (ballHitsBorder) {
      this.ball.reset();
      this.scores[ballHitsBorder - 1].value++;
      if (this.scores[ballHitsBorder - 1].value > 2) this.isGameOver = true;
    }
    this.ball.update();
    this.ball.draw(sketch);

    // this.score.setScore((this.score.value+1/1e)%10)
    // this.score.draw(sketch);
    // this.score2.draw(sketch);
    // this.scores.map((score) => score.draw);
    this.scores.map((score) => score.draw(sketch));
  }

  keypressed(sketch: P5Sketch) {
    this.paddle.handleKeyPressed(sketch);
  }

  keyreleased(sketch: P5Sketch) {
    this.paddle.handleKeyReleased(sketch);
  }

  reset() {
    this.ball.reset();
    // this.paddle.reset();
    // this.paddle2.reset();
  }

  async preload(sketch: P5Sketch) {
    // sketch.soundFormats("mp3");
    // sketch.soundFormats("ogg", "mp3");
    // sketch.loadSound("../assets/sounds/mario_coin.mp3");
    // this.sounds.push(hitSound);
    // this.sounds.push(sketch.loadSound("@/assets/sounds/scoreSound.js"));
    // this.sounds.push(sketch.loadSound("@/assets/sounds/wallHitSound.js"));
    // some sounds
    // /assets/sounds/hitSound.wav");
    // this.sounds.push(hitSound);
    // new Audio("../assets/sounds/Clairo - Sofia-L9l8zCOwEII.mp3")
    // );
    // this.sounds[0].type = "audio/wav";
    // const wallHitSound = new Audio("wallHitSound.wav");
  }

  async playMusic(music: any) {
    //  music = await new Audio(
    //     "../assets/sounds/Clairo - Sofia-L9l8zCOwEII.mp3"
    //   );
    try {
      await music.play();
      console.log("Playing...");
    } catch (err) {
      console.log("Failed to play..." + err);
    }
  }
}
</script>

<style>
#game {
  filter: drop-shadow(8px 10px 20px rgba(0, 0, 0, 0.5));
}
</style>
