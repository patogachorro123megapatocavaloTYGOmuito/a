webcam.set({width:350,
     height:300,
      image_format:"png",
       png_quality:90}),
       camer=document.getElementById("camera");
       webcam.attach("#camera");
       function take_snapshot() {
          webcam.snap(function(data_iri){
               document.getElementById("result").innerHTML='<img id="captured_image" src="+data_uri+"/>'
          })
       }
       console.log("ml5 version", ml5. version);
       classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HAyrcwhmE/model.json',modelLoaded);
        function modelLoaded() { console.log('Model Loaded!');
      }
      function check() { img = document.getElementById('captured_image');
       classifier.classify(img, gotResult);
      } function gotResult(error, results) { if (error) { console.error(error);
      } else { console.log(results);
           document.getElementById("result_object_name").innerHTML = results[0].label;
            gesture = results[0].label; toSpeak = "";
             if(gesture == "horrivel") { toSpeak = "Isso parece horrivel!";
              document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
           } else if(gesture == "ruim") { toSpeak = "Muito Ruim!";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
           } else if(gesture == "perda") { toSpeak = "perca maravilhosa!";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;"
          
           } speak();
      } }
      function speak(){
          var synth=window.speakSynthesis;
          speak_data= toSpeak;
          var utterThis= new SpeechSynthesisOtterrance(speak_data);
          synth.speak(utterThis);


      }
       