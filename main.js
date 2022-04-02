function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CTouJbEGE/model.json", modelready);
}
function modelready() {
    console.log("the model is ready");
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result").innerHTML="I can hear: "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(0)+"%";
        img1=document.getElementById("1");
        img2=document.getElementById("2");
        img3=document.getElementById("3");
        img4=document.getElementById("4");
        if(results[0].label=="keyboard"){
        img1.src="alien1.gif";
        img2.src="happy alien.png";
        img3.src-"alien 3.png";
        img4.src="banana.png";
        }
        else if(results[0].label=="clap"){
            img1.src="alien1.png";
        img2.src="happy-alien.gif";
        img3.src-"alien 3.png";
        img4.src="banana.png";
        }
        else if(results[0].label=="ball"){
            img1.src="alien1.png";
        img2.src="happy alien.png";
        img3.src-"banana.png";
        img4.src="banana.png";
        }
        else if(results[0].label=="Background Noise"){
            img1.src="alien1.png";
        img2.src="happy alien.png";
        img3.src-"alien 3.png";
        img4.src="banana-1.gif";
        }
    }
}