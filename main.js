rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
song1="";



song2="";
function preLoad()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music.mp3");
}


function setup()
{
    canvas=createCanvas(500, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,500,500);
}

function play()
{
    song.play();
}