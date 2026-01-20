//Based on Ben Eater's Boids https://github.com/beneater/boids/blob/master/boids.js

//Canvas size, gets updated later.
let width = 150;
let height = 150;

const numBoids = 100;
const visualRange = 75;

var boids = [];

function initBoids() {
    for (var i = 0; i< numBoids; i += 1){
       boids[boids.length] = {
        x: Math.random() * width,
        y: Math.random() * height,
        dx: Math.random() * 10-5,
        dy: Math.random() * 10-5,
        history: [],
       };
     }
}


function drawBoid(ctx, boid){
ctx.lineWidth = 10;

}

//At this current moment, takes more and more resources and causes browser to crash due to running out of memory when using LiveServer to run.
//function animationLoop(){
    for (let boid of boids){
        boid.x += boid.dx;
        boid.y += boid.dy;
        boid.history.push([boid.x, boid.y])
        boid.history = boid.history.slice(-50);

    }

//Clear canvas and redraw boids
const ctx = document.getElementById("boids").getContext("2d");
ctx.clearRect(0,0,width,height);
for (let boid of boids){
    drawBoid(ctx, boid);
    window.requestAnimationFrame(animationLoop);

}

}


window.onload = () => {

    

    initBoids();

    window.requestAnimationFrame(animationLoop);
};