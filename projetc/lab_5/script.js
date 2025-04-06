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
desenhar_quadrado(ctx,"red", 110, 150, 40, 10)
desenhar_quadrado(ctx,"aqua", 0, 150, 30, 10)
desenhar_quadrado(ctx,"aqua", 0, 125, 30, 10)
desenhar_quadrado(ctx,"aqua", 260, 130, 40, 10)
desenhar_quadrado(ctx,"yellow", 0, 270, 30, 10)
desenhar_quadrado(ctx,"yellow", 0, 240, 30, 10)
desenhar_quadrado(ctx,"yellow", 30, 270, 30, 10)
desenhar_quadrado(ctx,"black", 270, 270, 30, 10)
desenhar_quadrado(ctx,"black", 270, 240, 30, 10)
desenhar_quadrado(ctx,"black", 240, 270, 30, 10)

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
desenhar_linha(ctx,"grey", 150, 150, 150, 300)

function desenhar_circulo(ctx,color1,color2,x1,y1,size,p) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color1;
    ctx.strokeStyle = color2;
    ctx.arc(x1,y1,size,0,p*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
desenhar_circulo(ctx,"aqua","blue",150,110,18,2)
desenhar_circulo(ctx,"yellow","green",60,220,18,2)
desenhar_circulo(ctx,"yellow","green",230,220,18,2)
desenhar_circulo(ctx,"aqua","green",150,300,50,2)

function desenhar_arco(ctx,color1,x1,y1,size,p1,p2) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color1;
    ctx.arc(x1, y1, size, p1*Math.PI, p2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
desenhar_arco(ctx,"green",150,150,65,1,2)
desenhar_arco(ctx,"green",130,150,65,1,1.31)
desenhar_arco(ctx,"green",170,150,65,1.69,0.005)
desenhar_arco(ctx,"green",150,300,80,1,1.5)
desenhar_arco(ctx,"green",150,300,65,1.5,0)

function escrever(ctx,color,text,x,y){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = color;
    ctx.font = "30px Arial"
    ctx.textAlign = "center";
    ctx.fillText(text,x,y);
    ctx.closePath();
}
escrever(ctx,"black","Canvas",150,50)

// canvas 2

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

function circulo(ctx2,color1,x1,y1,size,p) {
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = color1;
    ctx2.arc(x1,y1,size,0,p*Math.PI);
    ctx2.fill();
    ctx2.closePath();
}
circulo(ctx2,"yellow",240,70,40,2)


function quadrado(ctx2,color, x, y, x1,y2) {
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = color;
    ctx2.strokeStyle = color;
    ctx2.fillRect(x,y,x1,x1,y2);
    ctx2.fill();
    ctx2.closePath();
}
quadrado(ctx2,"grey", 0, 230, 300, 0)
quadrado(ctx2,"#7C421A", 100, 150, 80, 0)
quadrado(ctx2,"#56B6D7", 110, 165, 23, 0)
quadrado(ctx2,"#56B6D7", 148, 165, 23, 0)

function tronco(ctx2,color,x, y, l, a){
    ctx2.beginPath();
    ctx2.fillStyle = color;
    ctx2.fillRect(x, y, l, a);
    ctx2.closePath();
}
tronco(ctx2,"#7C421A",250,210,20,60)
tronco(ctx2,"#7C421A",40,170,20,60)
tronco(ctx2,"#5c4232",133,188,15,42)

circulo(ctx2,"green",260,210,25,2)
circulo(ctx2,"green",50,180,25,2)

function desenharTriangulo(ctx2,x1, y1, x2, y2, x3, y3, color) {
    ctx2.fillStyle = color;
    ctx2.beginPath();
    ctx2.moveTo(x1, y1);
    ctx2.lineTo(x2, y2);
    ctx2.lineTo(x3, y3);
    ctx2.closePath();
    ctx2.fill();
  }
desenharTriangulo(ctx2,100, 150, 180, 150, 140, 100,"salmon")

tronco(ctx2,"blue",0,230,40,70)
quadrado(ctx2,"blue", 0, 270, 120, 0)

function perimetro(ctx2,color1,x1,y1,size,p1,p2) {
    ctx2.beginPath();
    ctx2.lineWidth = 2;
    ctx2.fillStyle = color1;
    ctx2.arc(x1, y1, size, p1*Math.PI, p2 * Math.PI);
    ctx2.fill();
    ctx2.closePath();
}
perimetro(ctx2,"blue",115,300,30,1,2)
perimetro(ctx2,"blue",0,230,40,1,2)