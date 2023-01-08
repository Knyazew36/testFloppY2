import Config from "./config.js";
export default class Score {
  constructor(context) {
    this.config = new Config();
    this.context = context;
    this.img = new Image();
    this.img.src = this.config.spriteSrc;
    this.score = 0;
    this.scoreX = this.config.scoreX;
    this.scoreY = this.config.scoreY;
    this.recScoreX = this.config.recScoreX;
    this.recScoreY = this.config.recScoreY;
    this.recScore = !localStorage.getItem("myRecord")
      ? (this.recScore = 0)
      : localStorage.getItem("myRecord");
  }
  update() {}
  draw() {
    this.context.fillStyle = "red";
    this.context.font = "15px sans-serif";
    this.context.fillText(this.score, this.scoreX, this.scoreY);
    this.context.fillText(this.recScore, this.recScoreX, this.recScoreY);
  }
  up() {
    this.score += 1;
  }
  record() {
    if (this.score > localStorage.getItem("myRecord")) {
      this.recScore = this.score;
      localStorage.setItem("myRecord", this.recScore);
    }
  }
  // medal() {
  //   if (this.score >= 10 && this.score <= 19) {
  //     this.medalParametrs.sx = 312;
  //     this.medalParametrs.sy = 112;
  //   } else if (this.score >= 20 && this.score <= 29) {
  //     this.medalParametrs.sx = 360;
  //     this.medalParametrs.sy = 158;
  //   } else if (this.score >= 30 && this.score <= 39) {
  //     this.medalParametrs.sx = 360;
  //     this.medalParametrs.sy = 112;
  //   } else if (this.score >= 40) {
  //     this.medalParametrs.sx = 312;
  //     this.medalParametrs.sy = 158;
  //   }
  // }
  end() {
    this.scoreX = 205;
    this.scoreY = 154;
    this.recScoreX = 205;
    this.recScoreY = 196;
    this.record();
  }
}
