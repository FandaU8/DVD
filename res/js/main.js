const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
let image = new Image();
image.src= "./res/img/esch.jpg";
let x = 0;
let y = 0;
let xVelocity = 1;
let yVelocity = 1;
let imageWidth = 200;
let imageHeight = 200;

window.addEventListener("resize", () => {
    resizeCanvas();
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
}
// ctx.fillStyle = "red";
// ctx.fillRect(0, canvas.height - 60, 60 , 60);

window.onload = () => {
    resizeCanvas();
    setInterval(() => {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        x += xVelocity;
        y += yVelocity;
        if (y + 60 >= canvas.height || y <= 0){
          yVelocity *= -1;
          
        }
        if (x + 60 >= canvas.width || x <= 0){
          xVelocity *= -1;
         
        }
        ctx.drawImage(image ,x, y, imageWidth, imageHeight);
      }, 1);
}

// ctx.fillStyle = "orange";
// ctx.fillRect(115, 250, 80, 150);

// ctx.strokeStyle= "blue";
// ctx.strokeRect(225, 250, 80, 150);

// ctx.fillStyle= "pink";
// ctx.fillRect(115, 450, 80, 150);
// ctx.beginPath();
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.beginPath();
// ctx.moveTo(200, 100);
// ctx.lineTo(50,800);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(50, 100);
// ctx.lineTo(100, 100);
// ctx.lineTo(50, 50);
// ctx.fill();
// ctx.stroke();
