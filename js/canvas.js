const turtle = {
  constructor(tempX, tempY, tempSize,canvas){
    this.write = false;
    this.pos = [tempX,tempY];
    this.size = tempSize;
    this.orientation = 1.5708;
    this.canvas = canvas;
    this.pixelsPerStep = 50
    this.needsRender = true;
  },
  render(){
    if (this.needsRender){
      turtleCtx.clearRect(0,0,turtleCan.width,turtleCan.height);
      // turtleCtx.translate((this.pos[0]+5),(this.pos[1]+10));
      //turtleCtx.rotate(this.orientation);
      turtleCtx.fillStyle = 'red'
      turtleCtx.fillRect(this.pos[0],this.pos[1],10,20);
      // turtleCtx.translate(-(this.pos[0]+5),-(this.pos[1]+10));
      this.needsRender = false
    } else {
      return;
    }
  },
  
  forward(steps = 1) {
    this.pos[1] += ((steps*this.pixelsPerStep) * Math.sin(this.orientation));
    this.pos[0] += ((steps*this.pixelsPerStep) * Math.cos(this.orientation));
    this.needsRender = true;
  },

  back(steps = 1) {
    this.forward(-steps);
  },
  
  rotate(degrees = 15){
    this.orientation += (degrees * (Math.PI / 180));
    this.needsRender = true;
  },

  rotateLeft(degrees = 15){
    this.rotate(-degrees);
  }
}

const graph = {
  pos: undefined
}

const lineCan = document.querySelector('#lineCanvas');
const turtleCan = document.createElement('canvas');

const lineCtx = lineCan.getContext('2d');
const turtleCtx = turtleCan.getContext('2d');

const canvasSquare = 1000;

turtleCan.width = canvasSquare;
turtleCan.height = canvasSquare;
lineCan.width = canvasSquare;
lineCan.height = canvasSquare;



let lastTime = 0
let aggregatedTime = 0
const frameRateInMillis =  1000 / 20 // 30 FPS


let x = 0
let y = 100
const forwardButt = document.querySelector('.forward');
forwardButt.addEventListener('click', () => {turtle.forward();});
const backButt = document.querySelector('.back');
backButt.addEventListener('click', () => {turtle.back();});
const rotateButt = document.querySelector('.rotate');
rotateButt.addEventListener('click', () => {turtle.rotate();});
const rotateLeftButt = document.querySelector('.rotateLeft');
rotateLeftButt.addEventListener('click', () => {turtle.rotateLeft();});

//rotateLeftButt.addEventListener('pointerdown', leftButtonDown);
//rotateLeftButt.addEventListener('pointerup', leftButtonUp);


// function leftButtonDown (event) {
//   console.log(event)
//   console.log('Down')
//  // rotateLeftButt.addEventListener('pointerup', leftButtonUp, {once:true});
//  // rotateLeftButt.removeEventListener('pointerdown', leftButtonDown)
// }

// function leftButtonUp(event) {
//   console.log("Up")
// }


function setup(){
  window.requestAnimationFrame(loop);
  turtle.constructor(50,50,8,turtleCtx);
  graph.pos = turtle.pos.slice(0)
  lineCtx.fillStyle = "blue"
  lineCtx.fillRect(0, 0, turtleCan.width, turtleCan.height);
}

function draw () {
  turtle.render();
  lineCtx.drawImage(turtleCan,0,0)
  // TODO: Did the turtle POS change?
  // If it did, then draw a line from oldPOS to turtlePOS

  if (turtle.pos[0] !== graph.pos[0] || turtle.pos[1] !== graph.pos[1]) {

    lineCtx.beginPath();
    lineCtx.moveTo(...graph.pos);
    lineCtx.lineTo(...turtle.pos);
    lineCtx.stroke();

    // TODO: draw line from graph.pos to turtle.pos

    graph.pos = turtle.pos.slice(0)
  }

  //turtle.forward();
  //console.log(turtle.numberOfCommands.commandOrder)
	// // Move box
	// x = (x + 1) % 200
  
  // // Background
  

	// // Box
	// turtleCtx.fillStyle = "red"
  // turtleCtx.fillRect(x - 15, y - 15, 30, 30)

}

function loop (time) { // Add the time parameter, and requestAnimation frame fills it in with the total time since starting
	
  let timeDifference = time - lastTime
  //console.log(timeDifference) // Should be constant, probably around 16 (milliseconds)
  lastTime = time
	
  // Add timeDifference to aggregatedTime
  aggregatedTime += timeDifference
  
  if (aggregatedTime > frameRateInMillis) { // Divide by 1000 to get FPS
  
  	aggregatedTime = 0 // Reset aggregated time, it turtleCan also be carried over.
  	
    // DRAW HERE!
    draw()
  
  }

	window.requestAnimationFrame(loop)
}

setup();


