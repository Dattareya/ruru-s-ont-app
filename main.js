nosex=0;
nosey=0;
rwristx=0;
lwristx=0;
distance=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,500);
    canvas.position(640,160);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}

function modelloaded()
{
    console.log("model is loaded");
}

function gotposes(results)
{
    if (results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        rwristx=results[0].pose.rightWrist.x;
        lwristx=results[0].pose.leftWrist.x;
        distance=floor(lwristx-rwristx);
    }
}

function draw()
{
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    color="rgb("+r+","+g+","+b+")";
    background("rgb(18, 114, 58)");
    fill("#00ff08");
    textSize(distance);
    stroke("Black");
    text(Ambareesha Dattareya Jenamani,50,400);
}