let bubbles = [];
function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 20; i++){
    bubbles[i] = new bubble(width / 2,height / 2 ,50);
  }
}

function draw() {
  background(0);

  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
    bubbles[i].pulse();
  }
}


class bubble{
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r);
  }
  move(){
    this.x += random(-5,5);
    this.y += random(-5,5);
  }
  pulse(){
    this.r += random(-1,1);
  }
}
