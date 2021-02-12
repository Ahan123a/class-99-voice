var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start() ; 

}

recognition.onresult = function run (event) {
    console.log("event");


 var Content = event.result[0] [0].transcript


 document.getElementById("textarea").innerHTML = "Content"
 console.log("Content");
 speak();


}

function speak() {
    var synth  = window.speechSynthesis;
   speak_data = document.getElementById("textbox").value ;

   var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
   Webcam.attach("camera");
   
}

Webcam.set({
    width:250,
    height:360,
    format : 'png',
    png_quality:90

});

camera = document.getElementById("camera");
