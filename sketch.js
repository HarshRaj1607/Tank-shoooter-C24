// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine, world;
var ground;
var cannoBase1, cannonBase2;
var cannon1;
var tanker1;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
     createCanvas(800,400);
     engine = Engine.create();
     world = engine.world;
     ground = new Ground(400,300,800,20);
     cannonBase1 = new Ground(300,330,60,20);
     cannonBase2 = new Ground(300,360,60,20);
     tanker1 = new Tanker(300,360,100);
     cannon1 = new Cannon(300,400,80,50);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
ground.display();
tanker1.display();
cannonBase1.display();
cannonBase2.display();
console.log(ground.x);
cannon1.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}