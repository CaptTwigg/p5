var balls = [];
let ball;

function setup() {
  createCanvas(300, 300);
  for (let i = 0; i < 100; i++) {

    balls.push(new Ball())
  }

}

function draw() {
  background(0);



  for (let i = balls.length - 1; i > 0; i--) {
    balls[i].show();
    balls[i].move();
    balls[i].update();
    // print(balls[i].getX());
  }
  // for (let i = balls.length; i > 0; i--) {
  //   for (let j = balls.length; j > 0; j--) {
  //     if (balls[i].getX == balls[j].getX) {
  //       balls[i].getVX = balls[i].setVX(-balls[i].getVX);
  //       balls[j].getVX = balls[j].setVX(-balls[j].getVX);
  //     }
  //   }
  // }

}

function colide(array) {

}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 16);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  update() {
    if (this.x > width || this.x < 0) {
      this.vx = -this.vx;
    }

    if (this.y > height || this.y < 0) {
      this.vy = -this.vy;
    }
  }
  getX() {
    return this.x;
  }
  getVX() {
    return thix.vx;
  }
  setVX(vx) {
    this.vx = vx;
  }


}
