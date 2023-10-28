function preload(){

}
function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(){
  if(Results.length > 0)
  {
    console.log(results);
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
  }
}
function modelLoaded(){
  console.log('PoseNet Is Inistialised');
}
function draw() {
Image(video,0,0,300,300);
}
function save_filltered_image(){
  
}