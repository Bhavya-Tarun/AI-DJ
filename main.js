song = " ";
LeftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;

function preload(){
 song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet =ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
    circle(LeftX, leftY, 20);
    circle(rightX, rightY, 20);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("Posenet is ready");
}

function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     LeftX=results[0].pose.leftWrist.x;
     leftY=results[0].pose.leftWrist.y;
     rightX=results[0].pose.rightWrist.x;
     rightY=results[0].pose.rightWrist.y;
 }
}
