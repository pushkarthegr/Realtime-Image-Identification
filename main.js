function preload(){
    console.log("screen width is - "+screen.width);
}
function setup(){
    step1 = screen.width/2;
    step2 = step1 - 150;
    canvas = createCanvas(300,300);
    canvas.position(step2,400);

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Bll7ONOx-/model.json",conferm);
}
function conferm(){
    console.log("model loaded!!!");
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,results);
}
function results(error,result){
    if(error){
        console.error(error);
    }else{
        document.getElementById("person").innerHTML = result[0].label;
        percent = result[0].confidence*100;
        percentage = Math.round(percent);
        document.getElementById("percentage").innerHTML = percentage+"%";
    }
}