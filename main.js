img="";
status="";
objects=[]
function preload () {
    img=loadImage("dog_cat.jpg")
}

function setup() {
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
objectDetector=ml5.objectDetector("copossd",model_loaud)
document.getElementById("estatus").innerHTML="estado detectando objetos"
video.hide()
}

function draw() {
    image(video,0,0,380,380);
    if(status!="") {

objectDetector.detect(video,got_result);
for(i=0;i<objects.length;i++) {
    document.getElementById("numero_de_objetos").innerHTML="numero de objetos detectado"+objects.length;
    fill("blue");
text(objects[i].label,objects[i].x,objects[i].y);

noFill();
stroke("red")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function model_loaud(){
    console.log("modelocargado");
    status=true;
    
}

function got_result(error,results){
if(error){
    console.log(error)
}
console.log(results);
objects=results
}