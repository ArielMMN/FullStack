let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(0,0,70,70);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(75,10);
ctx.lineTo(75,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'purple';
ctx.strokeStyle = 'red';
ctx.arc(260,200,50,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'black';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Formas",200,350);
ctx.strokeText("Formas",200,350)
ctx.closePath();


ctx.closePath();

// exemplo 2

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');


ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.fillRect(0,0,50,50);
ctx2.fillStyle = 'blue';
ctx2.fillRect(350,0,50,50);
ctx2.fillStyle = 'yellow';
ctx2.fillRect(0,350,50,50);
ctx2.fillStyle = 'green';
ctx2.fillRect(350,350,50,50);

ctx2.moveTo(400,0);
ctx2.lineTo(0,400);
ctx2.strokeStyle = 'blue';
ctx2.stroke();

ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(0,0);
ctx2.lineTo(400,400);
ctx2.strokeStyle = 'red';
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.strokeStyle = 'green';
ctx2.stroke();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,50,0,1*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(320,130,20,0,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(80,130,20,0,2*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();


// exemplo 3

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');

ctx3.beginPath();
ctx3.lineWidth = 5;
ctx3.fillStyle = 'yellow';
ctx3.arc(260,100,50,0,2*Math.PI);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'grey';
ctx3.fillRect(0,280,400,400);

ctx3.beginPath();
ctx3.lineWidth = 2;
ctx3.fillStyle = 'brown';
ctx3.fillRect(100,100,400,400);