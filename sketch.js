let circles = [];



function setup() {
  createCanvas(1920, 1080);
    
}


function mouseMoved(){
  
  let circleadd = new Circle(mouseX+10, mouseY+10, 20)
  circles.push(circleadd);
  
  }


function draw() {
  
  background(0);
  
    // blendMode(OVERLAY);
  
    for (let i=0; i< circles.length; i++){
      
  
    circles[i].show();
    circles[i].move();
    
    }
  
   // blendMode(BLEND);
  
  
}

class Circle{

  constructor (x, y, r){
    this.x = x
    this.y = y
    this.r = r
    this.color = color(random(0,255), random(0,255), random(0,255), 200);
    
  }
  
  show(){
    
    fill(this.color);
    noStroke();
    circle (this.x - this.r / 2, this.y - this.r / 2, this.r);
  
    
    
  }
  
  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
    
  }


  
}
