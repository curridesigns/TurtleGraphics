const turtle = {
    //kind of a left over from when this was a class, but it works well for setting up the turtle
    constructor(tempX, tempY, tempSize,canvas){
      this.write = false;
      this.pos = [tempX,tempY];
      this.size = tempSize;
      this.orientation = 0;
      this.canvas = canvas;
      this.pixelsPerStep = 10;
      this.needsRender = true;
      this.img = new Image();
      //this.imgScale = 
    },
  
    //renders the turtle, and checks to see if needs to be updated every frame
    render(){
      if (this.needsRender){
          turtleCtx.clearRect(0,0,turtleCan.width,turtleCan.height);
          turtleCtx.translate((this.pos[0]),(this.pos[1]));
          turtleCtx.rotate(this.orientation);
          turtleCtx.drawImage(this.img,-this.img.width/4,-this.img.width/4,60,60)
          turtleCtx.rotate(-this.orientation);
          turtleCtx.translate(-(this.pos[0]),-(this.pos[1]));
          this.needsRender = false
      } else {
        return;
      }
    },
    
    //moves the turtle forward based on the orientation of the turtle
    forward(steps = 1) {
      this.pos[1] += ((steps*this.pixelsPerStep) * Math.sin(this.orientation));
      this.pos[0] += ((steps*this.pixelsPerStep) * Math.cos(this.orientation));
      this.needsRender = true;
    },
  
    back(steps = 1) {
      this.forward(-steps);
    },
    
    rotate(degrees = 15){
      let radians = (degrees * (Math.PI / 180))
      this.orientation += radians;
      this.needsRender = true;
    },
  
    rotateLeft(degrees = 15){
      this.rotate(-degrees);
    },
  
    
  }
  
  const graph = {
    constructor(){
        this.pos = turtle.pos.slice(0);
    },
    
    drawLine(){
        if (turtle.pos[0] !== graph.pos[0] || turtle.pos[1] !== graph.pos[1]) {

            lineCtx.beginPath();
            lineCtx.moveTo(...graph.pos);
            lineCtx.lineTo(...turtle.pos);
            lineCtx.stroke();
        
            // TODO: draw line from graph.pos to turtle.pos
        
            graph.pos = turtle.pos.slice(0)
          }
    }


  }