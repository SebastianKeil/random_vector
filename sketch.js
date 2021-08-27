let vectors = [];

function setup() {
  background(0,0,0);
  frameRate(20);
  createCanvas(400, 400);
  n = createSlider(1,500,20);
  
  strokeWeight(40);
  stroke(200,50,250,20);
  fill(200,50,250,40);
  ellipse(width/2, height/2,60);
}

function draw() {
  //background(120);
  translate(width/2, height/2);
  
  for(let i= 0; i < n.value(); i++){
    vectors[i] = createVector(random(-100,100),random(-100,100));
    
    strokeWeight(2);
    alph = map(n.value(),1,1000,90,1);
    stroke(250,200-i,i, alph);
    line(0,0,vectors[i].x, vectors[i].y);
  }
  
  for(let i= 0; i < n.value()/5; i++){
    vectors[i] = p5.Vector.random2D();
    vectors[i].mult(100);
    
    strokeWeight(2);
    alph = map(n.value(),1,1000,60,1);
    stroke(200-i,i,250, alph);
    line(0,0,vectors[i].x, vectors[i].y);
  }
  
  
}
function mousePressed(){
  if(mouseY<height-20){
    background(0);
  }
}