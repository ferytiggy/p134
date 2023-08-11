img=""
status=""
objects=[]
function preload(){
    img = loadImage('dog_cat.jpg');
  }
  
  

  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(640,420);
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("h3").innerHTML="Estatus: Detectando Objetos :D"
    video.hide();
  }
  
  
  
  

  

  function modelloaded(){
    console.log("Modelo Cargado :D");
    status=true;
    
  }

  function gotresult(error,results){
    if (error) {
      console.error(error);
    }else{
      console.log(results);
      objects=results;
    }

  }
  function draw() {
    image(video, 0, 0, 640, 420);
    if(status != "")
    {
      r =  random(255);
      g =  random(255);
      b =  random(255);      
      objectDetector.detect(video, gotresult);
      for (i = 0; i < objects.length; i++) {
        document.getElementById("h3").innerHTML = "Status : Objeto detectado";
        document.getElementById("h3N").innerHTML = "El número de objetos detectados es: "+ objects.length;

        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }


   
  }
  