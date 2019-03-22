let thePet;
let names=[]
let nameSelector;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  thePet = new Tomagotchi();
  names = ["Dwight","Angela","Michael","Pam","Creed","Jim","Meredith","Oscar",
           "Kevin","Toby","Kelly","Ryan","Darryl","Phyllis","Bob Vance","Karen",
           "Jan"]
  nameSelector = int(random(0,names.length))
}

function draw() {
  background(220);
  let secs = createTimer()
  text(secs,10,10)

  fill(0)
  textFont("Megrim")
  textSize(20)
  textAlign(CENTER)
  text("MEET",width/2,height/2-150)
  textSize(40)
  text(names[nameSelector],width/2,height/2-100)

  textAlign(LEFT)
  thePet.display()
  thePet.move()
  thePet.funChange(secs)
  thePet.hungerChange(secs)

  thePet.makeButtons()

  // strokeWeight(0);
  // fill(255)
  // ellipse(200,200,200);
  // strokeWeight(3);
  // noFill(0)
  // arc(200,200,50,30,180,0);
  // arc(280,200,30,30,180,0);
  // arc(250,225,30,30,0,180);
}

function mousePressed(){
  thePet.onClick()
}
