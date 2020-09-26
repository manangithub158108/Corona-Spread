// creating the variables


function preload(){
  cityImg = loadImage("city.png");
  coronaImg = loadImage("Corona.png");
  boyImg = loadImage("boy.png");
  enemyImg = loadImage("enemy.png");
}

function setup() {
  createCanvas(700,700);

  // creating the elements of the game
  boy = createSprite(25, 650, 20, 20);
  boy.shapeColor = "green";
  boy.setVelocity(5,-8);
  boy.addImage(boyImg);
  boy.scale = 0.6;

  // creating the borders.
  bar1 = createSprite(25,500+50,300,15);
  bar1.shapeColor = "blue";
  bar2 = createSprite(218-50,650,15,200);
  bar2.shapeColor = "blue";

  gameState = 0;

  time = 0;

  corona1Group = new Group();
}

function draw() {
  background(0); 
  edges = createEdgeSprites(); 
  boy.bounceOff(bar1);
  boy.bounceOff(bar2);
  boy.bounceOff(edges[3]);
  boy.bounceOff(edges[0]);

  if(gameState === 0){
    textFont("comic sans ms");
    fill("White");
    textSize(30);
    text(" Example of how corona spreads ", 130,100);

    textFont("comic sans ms");
    fill("White");
    textSize(30);
    text(" Press space to start the view ", 150,200);
  }

  if(keyDown("space") && gameState === 0){
    gameState = 1
  }

  if(gameState === 1){

    time = time + 1;

    // spawning the coronaVirus.
    if(frameCount % 40 === 0){
      var corona1 = createSprite(710,random(0,700),20,20);
      corona1.shapeColor = "red";
      corona1.setVelocity(-9,5);
      corona1.addImage(coronaImg);
      corona1.scale = 0.23;
      corona1Group.add(corona1);
    }

    corona1Group.bounceOff(bar1);
    corona1Group.bounceOff(bar2);
    corona1Group.bounceOff(edges[0]);
    corona1Group.bounceOff(edges[3]);
    corona1Group.bounceOff(edges[1]);
    corona1Group.bounceOff(edges[2]);

    if(time > 100 && time < 250){
      textFont("comic sans ms");
      fill("White");
      textSize(30);
      text("As you can see the person in the house", 90,100);

      textFont("comic sans ms");
      fill("White");
      textSize(30);
      text("doesn't get infected and is happy", 130,150);
    }
    
  if(time > 300 && time < 350){
    bar1.width = 50;
    }

  boy.bounceOff(edges[0]);
  boy.bounceOff(edges[1]);
  boy.bounceOff(edges[2]);
  boy.bounceOff(edges[3]);

  if(boy.isTouching(corona1Group)){
    boy.addImage(enemyImg);
    boy.scale = 0.5;
  }

  if(time > 550){
    bar1.destroy();
    bar2.destroy();
    corona1Group.destroyEach();
    boy.destroy();
    
    textFont("comic sans ms");
    fill("yellow");
    textSize(30);
    text(" Now as you see, once the person goes out", 40,100);

    textFont("comic sans ms");
    fill("yellow");
    textSize(30);
    text(" of his house he immediately gets infected", 50,200);

    textFont("comic sans ms");
    fill("yellow");
    textSize(30);
    text("and becomes a demon", 200,300);

    textFont("comic sans ms");
    fill("yellow");
    textSize(30);
    text(" So, ", 250,400);

    textFont("comic sans ms");
    fill("yellow");
    textSize(30);
    text(" #StayHomeStaySafe", 170,500);

    textFont("comic sans ms");
    fill("yellow");
    textSize(30);
    text(" #WeCanDoIt ", 170,600);
  }

}
  drawSprites();
}