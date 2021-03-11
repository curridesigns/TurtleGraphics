/*
makes a smiley face
from MDN tutorial on Canvas 2d
 ctx.beginPath();
 ctx.arc(75,75,50,0,Math.PI * 2,true);
 ctx.moveTo(110,75);
 ctx.arc(75,75,35,0,Math.PI,false);
 ctx.moveTo(65,65);
 ctx.arc(60,65,5,0,Math.PI*2,true);
 ctx.moveTo(95,95);
 ctx.arc(90,65,5,0,Math.PI*2,true);
 ctx.stroke();


another one from MDN
this one makes  a bunch of different arcs
for (var i = 0; i<4;i++){
    for(var j = 0; j<3;j++){
        ctx.beginPath();
            var x = 25 + j * 50;
            var y = 25 + i * 50;
            var radius = 20;
            var startAngle = 0;
            var endAngle = Math.PI + (Math.PI * j)/2;
            var anticlockwise = i%2 !==0;

            ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise);

            if(i>1){
                ctx.fill();
            } else {
                ctx.stroke();
            }
    }
}

this is an interesting function, I might be able to hollow it out and reconfigure it to do what I need
A utility function to draw a rectangle with rounded corners. shamelessly stolen from MDN
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

this makes a Pac-man esc corner with a ghost
stolen from MDN
    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();


//this whole section makes a "Solar System" that is animated
var sun = new Image();
var moon = new Image();
var earth = new Image();
var time = {};
function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
  
  time.seconds = 0;
  time.milliseconds = 0;
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  time.secons++;
  time.milliseconds += 2 ;
  ctx.rotate(((2 * Math.PI) / 60) *  time.seconds + ((2 * Math.PI) / 60000) * time.milliseconds);
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.seconds + ((2 * Math.PI) / 6000) * time.milliseconds);
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

//   ctx.beginPath();
//   ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
//   ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();


//some stuff that Jeffrey showed me
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

*/