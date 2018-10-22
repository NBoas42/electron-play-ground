

class Bubble {

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    move(x,y){
        this.x=x;
        this.y=y;
    }
    
    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

     show(p5){
        p5.stroke(113, 58, 130);
        p5.strokeWeight(2);
        p5.noFill();
        p5.ellipse(this.x,this.y,50,50);
    }

}

module.exports = Bubble;