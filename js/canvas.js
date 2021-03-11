

const lineCan = document.querySelector('#lineCanvas');
const turtleCan = document.querySelector('#turtleCanvas');

const lineCtx = lineCan.getContext('2d');
const turtleCtx = turtleCan.getContext('2d');

const canvasSquare = 800;

turtleCan.width = canvasSquare;
turtleCan.height = canvasSquare;
lineCan.width = canvasSquare;
lineCan.height = canvasSquare;



let lastTime = 0
let aggregatedTime = 0
const frameRateInMillis =  1000 / 20 // 30 FPS






function setup(){
  turtle.constructor(50,50,8,turtleCtx);
  graph.constructor();
  turtle.img.src = './images/Turtle.png'
  graph.pos = turtle.pos.slice(0)
  lineCtx.fillStyle = "blue"
  lineCtx.fillRect(0, 0, turtleCan.width, turtleCan.height);
  window.requestAnimationFrame(loop);
}

function draw () {
  turtle.render();
  turtleCtx.fillStyle = "yellow";
  turtleCtx.fillRect(turtleCan.width/2,turtleCan.height,10,20);
  //lineCtx.drawImage(turtleCan,0,0)
  // TODO: Did the turtle POS change?
  // If it did, then draw a line from oldPOS to turtlePOS

  graph.drawLine();

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


