status = "";

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

}


function start(){
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
    document.getElementById("input").value;
}

function modelLoaded() {
    console.log('modelLoaded');
     status = "true";
}

function draw(){
    image(video,0,0,480,380);
}