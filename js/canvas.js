class Turtle {
  constructor(tempX, tempY, tempSize,canvas){
    this.write = false;
    this.pos = [tempX,tempY,tempSize];
    this.orientation = 0;
    this.oldPOS = [];
    this.canvas = canvas;
  }
  render(){
    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.arc(...this.pos,0,Math.PI*2,false);
    ctx.fill();
  }
  
  forward(steps = 1) {
    if (this.pos[0] != steps) {
      for(let i = 0;i <= steps; i++){
        this.pos[0]++;
      }
    }
  }
  
  rotate(degrees){

  }
}

let ctx,turtle;

function init() {
  window.requestAnimationFrame(draw);
  ctx = document.getElementById('canvas').getContext('2d');
  turtle = new Turtle(10,10,16,ctx);
}

function draw() {
  

  //ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clear canvas

  turtle.render();
  turtle.forward(100);
  //console.log("hello");

  window.requestAnimationFrame(draw);
}

init();