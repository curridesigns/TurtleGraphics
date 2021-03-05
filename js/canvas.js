class Turtle {
  constructor(tempX, tempY, tempSize,canvas){
    this.write = false;
    this.pos = [tempX,tempY];
    this.size = tempSize;
    this.orientation = 0;
    this.oldPOS = [];
    this.canvas = canvas;
    this.numberOfCommands = {
      commandOrder:[],
      forward:[],
      right:[],
    }
  }
  render(){
    ctx.fillStyle = 'red'
    ctx.beginPath();
    ctx.arc(...this.pos,this.size,0,Math.PI*2,false);
    ctx.fill();
  }
  
  forward(steps = 1) {
    if(this.numberOfCommands.forward[commandNumber]===undefined){
      this.numberOfCommands.commandOrder[commandNumber] = [this._forward(steps)]
    } 
    commandNumber++;
  }
  
  rotate(degrees){

  }

  _forward(steps){
    this.oldPOS[0] = this.pos;
    
  }
}

const can = document.querySelector('canvas')

can.width = 200
can.height = 200

const ctx = can.getContext('2d')


let lastTime = 0
let aggregatedTime = 0
const frameRateInMillis =  1000 / 20 // 30 FPS


let x = 0
let y = 100

let turtle,commandNumber;

function setup(){
  window.requestAnimationFrame(loop);
  turtle = new Turtle(50,50,8,ctx);
}

function draw () {
  ctx.fillStyle = "blue"
  ctx.fillRect(0, 0, can.width, can.height)
  commandNumber = 0;
  turtle.render();
  turtle.forward();
  console.log(turtle.numberOfCommands.commandOrder)
  turtle.forward(5)
	// // Move box
	// x = (x + 1) % 200
  
  // // Background
  

	// // Box
	// ctx.fillStyle = "red"
  // ctx.fillRect(x - 15, y - 15, 30, 30)

}

function loop (time) { // Add the time parameter, and requestAnimation frame fills it in with the total time since starting
	
  let timeDifference = time - lastTime
  //console.log(timeDifference) // Should be constant, probably around 16 (milliseconds)
  lastTime = time
	
  // Add timeDifference to aggregatedTime
  aggregatedTime += timeDifference
  
  if (aggregatedTime > frameRateInMillis) { // Divide by 1000 to get FPS
  
  	aggregatedTime = 0 // Reset aggregated time, it can also be carried over.
  	
    // DRAW HERE!
    draw()
  
  }

	window.requestAnimationFrame(loop)
}


