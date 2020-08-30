var particle =[];
var division =[];
var plinko =[];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  createCanvas(800,480);
  rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
  for (var i = 50; i < 790; i=i+80) {
 division.push(new Division(i,415,5,185))
  }
ground = new Ground(400,475,850,15)
for (var i = 50; i < 790; i=i+80) {
  plinko.push(new Plinko(i,125,15))
   }
   for (var i = 50; i < 790; i=i+80) {
    plinko.push(new Plinko(i,200,15))
     }
     for (var i = 50; i < 790; i=i+80) {
      plinko.push(new Plinko(i,50,15))
       }
       for (var i = 50; i < 790; i=i+80) {
        plinko.push(new Plinko(i,275,15))
         }

 
  

  Engine.run(engine);

}

function draw() {
  background("black");  
  Engine.update(engine);
  if(frameCount % 30 === 0) {
    particle.push(new Particle(random(10,790),10,15));
    //obstacle.debug = true;
    
  }
  console.log(division.length)
  for(var i = 0; i < division.length; i=i+1){
    division[i].display()
  }
  for(var i = 0; i < plinko.length; i=i+1){
    plinko[i].display()
  }
  ground.display()
  for(var i = 0; i < particle.length; i=i+1){
    particle[i].display()
  }
}



