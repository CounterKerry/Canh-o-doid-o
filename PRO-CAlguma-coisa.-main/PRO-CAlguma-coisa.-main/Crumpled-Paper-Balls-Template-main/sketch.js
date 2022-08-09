const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var restriction;

var rectangle;

var cannon;

function preload() {

}

function setup() {
	createCanvas(700, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.95,
		frictionAir: 0.01,
	}

	var ground_option = {
		isStatic: true,
	}

	ball = Bodies.circle(350, 350, 30, ball_options);
	World.add(world, ball);

	ground = Bodies.rectangle(350, 600, 600, 20, ground_option);
	World.add(world, ground);

	restriction = Matter.Constraint.create(
		{
			pointA: {x: 350, y: 0},
			bodyB: ball,
			pointB: {x: 0, y: 0},
			length: 100,
			stiffness: 0.01,
		}
	);
	World.add(world, restriction);

	rectangle = new Rectangle(350, 50, 70, 20);

	angle = -PI/4;

	cannon = new Cannon(350, 595, 100, 50, angle);

	ellipseMode(RADIUS);
	rectMode(CENTER);
}

function draw() {
	background(51);

	Engine.update(engine);

	push();
	strokeWeight(2);
	stroke(255);
	line(restriction.pointA.x, restriction.pointB.y, ball.position.x, ball.position.y);
	ellipse(ball.position.x, ball.position.y, 30);
	pop();

	rect(ground.position.x, ground.position.y, 600, 20);

	cannon.display();
}