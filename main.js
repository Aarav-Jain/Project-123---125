leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 400);

    canvas = createCanvas(800 ,400);
    canvas.position(430, 130);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');

}


function gotPoses(results)
{   
   if(results.length > 0)
   {
    console.log(results); 

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
      
    difference = floor(leftWristX - rightWristX);
    console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + rightWristX + ", Difference = " + difference);
  }
}

function draw()
{ 
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    text('Aarav',50,400);
       
}



































