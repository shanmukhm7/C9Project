
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createSprite(100,200);
  btn_red.scale = .5
  btn_green = createSprite(300,200);
  btn_green.scale = .5
  
  
  
  
  
}

function draw() {
  if(mousePressedOver(btn_red)){
    red_bg()
  }
  
  if(mousePressedOver(btn_green)){
    green_bg()
  }
  
  function red_bg(){
  r = 255;
  g = 0;
  b = 0;
}

function green_bg(){
  r = 0;
  g = 255;
  b = 0;
}
  background(r, g, b)
  drawSprites();
}

