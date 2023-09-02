lipsX=0;
lipsY=0;

function preload(){
    lip_stick=loadImage('https://i.postimg.cc/mr5sHGLD/png-clipart-lipstick-lipstick.png')
}

function setup() {
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lipsX=results[0].pose.lips.x;
        lipsY=results[0].pose.lips.y;
        console.log("nose x=" +results[0].pose.nose.x+5);
        console.log("nose y=" +results[0].pose.nose.y+5);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(lip_stick,lipsX,lipsY,50,50);
}

function take_snapshot(){
    save('myFilterImage.png');
}
