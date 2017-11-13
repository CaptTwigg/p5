let bubbles = [];


function setup() {
  createCanvas(1440, 900);

}

function draw() {
  background(0);

  bubbles.push(new bubble(random(0, width), -10, 0));
  bubbles.push(new bubble(random(0, width), -10, 0));
  bubbles.push(new bubble(random(0, width), 900, 1));
  bubbles.push(new bubble(random(0, width), 900, 1));


  for (let i = bubbles.length - 1; i > 0; i--) {
    bubbles[i].move();
    bubbles[i].show();
    if (bubbles[i].remove()) {
      bubbles.splice(i, 1);
    }
  }
}

class bubble {

  constructor(x, y, up) {
    this.x = x;
    this.y = y;
    this.r;
    this.up = up;
    this.vx = random(-1, 1);
    if (up == 1) {
      this.vy = random(-1, -3);
    } else {
      this.vy = random(1, 3);
    }
    this.alpha = 255;
    this.red = random(0, 255);
    this.blue = random(0, 255);
    this.green = random(0, 255);
    this.r = random(8, 17);

  }

  remove() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.x, this.y, this.r);
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= random(0.1, 2);
  }
  pulse() {
    this.r = random(1, 16);
  }
}
