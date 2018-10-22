'use strict';

//Main P5 instance
const sketch= (p5) => {
 
  let angle = p5.PI/6;
  let minLength = 20;
  /**
   * Setups up Initial Canvas Params
   */
	p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);// Create the canvas
      p5.frameRate(60);
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
    p5.strokeWeight(2);
    p5.stroke(255);
    p5.translate(p5.windowWidth/2, p5.windowHeight);
    branch(150,minLength,.75,angle);
  
    if(p5.keyIsPressed && p5.key == 'w')
    {
        angle +=.05;
    }
    else if(p5.keyIsPressed && p5.key == 's')
    {
      angle -=.05;
    }
    else if(p5.keyIsPressed && p5.key == 'a')
    {
      minLength -= .1;
    }
    else if(p5.keyIsPressed && p5.key == 'd')
    {
      minLength += .1;
    }

  };

  /**
   * 
   * @param {*} length 
   * @param {*} minLength 
   * @param {*} divInterval 
   * @param {*} angle 
   */
  function branch(length, minLength,divInterval,angle){
    p5.stroke(255);
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


