class Turtle {
  constructor(tempX, tempY, tempSize,canvas){
    this.write = false;
    this.pos = [tempX,tempY,tempSize];
    this.orientation = 0;
    this.oldPOS = [];
    this.canvas = canvas;
  }
  render(){
    this.canvas.fillStyle = 'red'
    this.canvas.beginPath
    this.canvas.arc(...this.pos,0,Math.PI*2,false);
    this.canvas.fill();
  }
  
  forward(steps = 1) {
    //this.canvas.clearRect(0,0,500,500);
    this.pos[0] += steps;
  }
  
  rotate(degrees){

  }
}

let turtle;

function init() {
  window.requestAnimationFrame(draw);
  
  turtle = new Turtle(10,10,16,ctx)
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  //ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'red'
  ctx.beginPath
  ctx.arc(...turtle.pos,0,Math.PI*2,false);
  ctx.fill();
  turtle.pos[0]++;
  //console.log("hello");

  window.requestAnimationFrame(draw);
}

init();