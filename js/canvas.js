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

const can = document.querySelector('canvas')

can.width = 200
can.height = 200

const ctx = can.getContext('2d')


let lastTime = 0
let aggregatedTime = 0
const frameRateInMillis =  1000 / 20 // 30 FPS


let x = 0
let y = 100

function setup(){
  window.requestAnimationFrame(loop);
}

function render () {

	// Move box
	x = (x + 1) % 200
  
  // Background
  ctx.fillStyle = "blue"
	ctx.fillRect(0, 0, can.width, can.height)

	// Box
	ctx.fillStyle = "red"
  ctx.fillRect(x - 15, y - 15, 30, 30)

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
    render()
  
  }

	window.requestAnimationFrame(loop)
}


