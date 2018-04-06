import p5 from 'p5';
import Matrix from './matrix.js';
//
// function setup() {
//   // put setup code here
//   createCanvas(800,800);
// }
//
// function draw() {
//   // put drawing code here
//   background(0,0,0);
//   fill(255);
//   // noFill();
//   stroke(255);
//   ellipse(400,400,600,700);
//   fill(0);
//   ellipse(400,400,350,450);
//   rect(50,50,20,20);
  // rect(50,50,200,100);
  // rect(250,50,200,100);
  // rect(450,50,200,100);
  // rect(450,50,200,100);
// }

const sketch = () => {

  // Variables scoped within p5
  const canvasWidth = 800;
  const canvasHeight = 800;

  // make library globally available
  window.p5 = p5;

  // Setup function
  // ======================================
  p5.setup = () => {
    createCanvas(800, 800);
    // canvas.parent('sketch');
    // p5.frameRate(60);
  };

  // Draw function
  // ======================================
  p5.draw = () => {
    background(0,0,0);
    fill(255);
    // noFill();
    stroke(255);
    ellipse(400,400,600,700);
    fill(0);
    ellipse(400,400,350,450);
    rect(50,50,20,20);
  };
  window.setup = p5.setup;
  window.draw = p5.draw;
};

const P5 = new p5(sketch);


