var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){  
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking Your Next Selfie In 10 Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    setTimeout(function()
    {
        img_id="selfie1";
        take_snapshot();
        speak_data = "Taking Your Next Selfie In 10 Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function()
    {
        img_id="selfie2";
        speak_data = "Taking Your Next Selfie In 10 Seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        take_snapshot();
        synth.speak(utterThis);
    }, 20000);
    setTimeout(function()
    {
        img_id="selfie3";
        take_snapshot();
    }, 30000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uti) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie2" class="pic1" src="'+data_uti+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" class="pic2" src="'+data_uti+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML ='<img id="selfie3" class="pic3" src="'+data_uti+'"/>';
        }
    });
}