let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function desenhar_quadrado(ctx,color, x, y, x1,y2) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.fillRect(x,y,x1,x1,y2);
    ctx.fill();
    ctx.closePath();
}
desenhar_quadrado(ctx,"blue", 0, 0, 50, 10)
desenhar_quadrado(ctx,"red", 250, 0, 50, 10)
desenhar_quadrado(ctx,"red", 100, 150, 50, 10)
desenhar_quadrado(ctx,"aqua", 0, 150, 25, 10)
desenhar_quadrado(ctx,"aqua", 0, 125, 25, 10)
desenhar_quadrado(ctx,"aqua", 250, 125, 50, 10)


function desenhar_linha(ctx,color, xi, yi, xf,yf) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.moveTo(xi,yi);
    ctx.lineTo(xf,yf);
    ctx.stroke();
}

desenhar_linha(ctx,"blue", 0, 0, 150,150)
desenhar_linha(ctx,"red", 300, 0, 150,150)
desenhar_linha(ctx,"green", 0, 150, 300,150)
desenhar_linha(ctx,"black", 150, 150, 150, 300)



let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');