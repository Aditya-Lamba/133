img = "";
status = "";
objects = [];

function TV()
{
    window.location = "tv.html";
}
function back()
{
    window.location = "index.html";
}
function Bottle()
{
    window.location = "bottle.html";
}
function Desk()
{
    window.location = "desk.html";
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    FileList("Red");

    if(status != "")
    {
        for (i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(bojects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("gold");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult()
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}