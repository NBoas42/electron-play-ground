

'use strict';


const p5Dom = require('./NoNPMDependencies/P5/p5.dom.js');

//Main P5 instance
const sketch= (p5) => {

  let angle = p5.PI/4;
  let slider;
  /**
   * Setups up Initial Canvas Params
   */
	p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);// Create the canvas
      p5.frameRate(60);//Set draw function to execute 60 times persecond
      slider = p5Dom.createSlider(0,p5.TWO_PI,p5.PI/4,.1);
      
  };
  /**
   * Main Logic updates
   */
  function update(){
  }
  /**
   * Main graphic rendering Loop
   */
	p5.draw = () => {
    p5.background(51);
    p5.stroke(255);
    p5.translate(p5.windowWidth/2, p5.windowHeight);
    branch(150,6.5,.75,p5.PI/8);
  };

  /**
   * 
   * @param {*} length 
   * @param {*} minLength 
   * @param {*} divInterval 
   * @param {*} angle 
   */
  function branch(length, minLength,divInterval,angle){
    p5.line(0,0,0,-length);
    p5.translate(0, -length);
    if(length > minLength)
    {
      p5.push();
      p5.rotate(angle);
      branch(length*divInterval,minLength,divInterval,angle);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(length*divInterval,minLength,divInterval,angle);
      p5.pop();
    }

  }
  /**
   * Window Resize Handler
   */
	p5.windowResized = () => {
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
	}
}

//Helper Methods
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


