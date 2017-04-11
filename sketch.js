var newWidth = 50;
var newHeight = 50;


function setup(){
    createCanvas(600,400);
    background(234,9,242);
}
    
function draw(){
     // background();
    if(mouseIsPressed){
        noStroke();
        fill(246,255,0);
        rect(mouseX,mouseY,newWidth,newHeight); 
        
    }
}