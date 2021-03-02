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


*/