var engine, world;
var gameState = "creation";
var level = 0;
// level 0 = menu
var bg;
var groundCollide = true;
var radius = 30;

function preload() {
	ballImg = loadImage("ball.png")
	bg=loadImage("background.jpg")
}

function setup() {
	createCanvas(windowWidth - 20, windowHeight - 20)

	engine = Matter.Engine.create()
	world = engine.world

	// console.log(width);

	//    1580 ~~ 1600
	//    1800 ~~ 1821


	if (level == 0) {
		button1 = createButton('1')
		button1.position(width / 8, height / 3 - 100)
		button1.style('backgroundColor', '#fed8b1')
		button1.style('width', '50px')
		button1.style('height', '50px')

		button2 = createButton('2')
		button2.position(width / 4, height / 3 - 100)
		button2.style('backgroundColor', '#90EE90')
		button2.style('width', '50px')
		button2.style('height', '50px')

		button3 = createButton('3')
		button3.position(width / 4 + 200, height / 3 - 100)
		button3.style('backgroundColor', '#fed8b1')
		button3.style('width', '50px')
		button3.style('height', '50px')

		button4 = createButton('4')
		button4.position(width / 8 + 600, height / 3 - 100)
		button4.style('backgroundColor', '#90EE90')
		button4.style('width', '50px')
		button4.style('height', '50px')

		button5 = createButton('5')
		button5.position(width / 8 + 800, height / 3 - 100)
		button5.style('backgroundColor', '#fed8b1')
		button5.style('width', '50px')
		button5.style('height', '50px')

		button6 = createButton('6')
		button6.position(width / 8 + 1000, height / 3 - 100);
		button6.style('backgroundColor', '#90EE90')
		button6.style('width', '50px')
		button6.style('height', '50px')

	}



	// if (level == 1) {

	//}






	Matter.Engine.run(engine);
}

function draw() {

	background(bg);



	if (level == 0) {
		button1.mousePressed(function () {
			level = 1
			console.log("it worked1")
		})
		button2.mousePressed(function () {
			level = 2
			console.log("it worked2")
		})
		button3.mousePressed(function () {
			level = 3
			console.log("it worked3")
		})
		button4.mousePressed(function () {
			level = 4
			console.log("it worked4")
		})

		button5.mousePressed(function () {
			level = 5
			console.log("it worked5")
		})
		button6.mousePressed(function () {
			level = 6
			console.log("it worked6")
		})

	}



	if (level == 1) {

		if (gameState == "creation") {
			button1.hide();
			button2.hide();
			button3.hide();
			button4.hide();
			button5.hide();
			button6.hide();
			var options = { friction: 1.1, frictionAir: 0.02 }
			ball = Matter.Bodies.circle(width / 8, 200, radius, options);// CREATION of the ball
			Matter.World.add(world, ball)
			goal = new GOAL(width-100, height-50, 70)
			ground = new GROUND(width / 4 - 200, height / 2 + 200, width / 4-100, 30)
			ground1 = new GROUND(width / 4+200, height / 2+100, width / 8, 30)
			ground2 = new GROUND(width/2 + 200, height / 2 , 250, 30)
			gameState = "play";
		}

		if (gameState == "play") {

			// if (Math.round(ball.speed) < 6) {
			if (keyDown("d") || keyDown("RIGHT_ARROW"))
				Matter.Body.applyForce(ball, ball.position, { x: 0.005, y: 0 });
			if (keyDown("a") || keyDown("LEFT_ARROW"))
				Matter.Body.applyForce(ball, ball.position, { x: -0.005, y: 0 });
			if ((keyWentDown("w") || keyWentDown("UP_ARROW")) && groundCollide == true)
				Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.1 });
			// }


			ground.display();
			ground1.display();
			ground2.display();
			goal.display();

			imageMode(CENTER);
			image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2);
		}



	}
    
    if(level===2){

	if (gameState == "creation") {
		button1.hide();
		button2.hide();
		button3.hide();
		button4.hide();
		button5.hide();
		button6.hide();
		var options = { friction: 1.1, frictionAir: 0.02 }
		ball = Matter.Bodies.circle(width / 8, 200, radius, options);// CREATION of the ball
		Matter.World.add(world, ball)
		goal = new GOAL(width-100, height-50, 70)
		ground = new GROUND(width / 4 - 200, height / 2 , width / 4-100, 30)
		ground1 = new GROUND(width /2, height / 2+100, width / 4-100, 30)
		ground2 = new GROUND(width/2 + 450, height / 2 , 300, 30)
		gameState = "play";
	}

	if (gameState == "play") {

		// if (Math.round(ball.speed) < 6) {
		if (keyDown("d") || keyDown("RIGHT_ARROW"))
			Matter.Body.applyForce(ball, ball.position, { x: 0.005, y: 0 });
		if (keyDown("a") || keyDown("LEFT_ARROW"))
			Matter.Body.applyForce(ball, ball.position, { x: -0.005, y: 0 });
		if ((keyWentDown("w") || keyWentDown("UP_ARROW")) && groundCollide == true)
			Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.1 });
		// }


		ground.display();
		ground1.display();
		ground2.display();
		goal.display();

		imageMode(CENTER);
		image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2);
	}

}
    if(level===3){
		if (gameState == "creation") {
			button1.hide();
			button2.hide();
			button3.hide();
			button4.hide();
			button5.hide();
			button6.hide();
			var options = { friction: 1.1, frictionAir: 0.02 }
			ball = Matter.Bodies.circle(width / 8, 200, radius, options);// CREATION of the ball
			Matter.World.add(world, ball)
			goal = new GOAL(width-100, height-50, 70)
			ground = new GROUND(width / 4 , height / 2+300, width/2, 30)
			ground1 = new GROUND(width/ 2+15, height / 2+165, 30, 300)
			ground2 = new GROUND(width/2 + 125, height / 2 , 250, 30)
			//ground3=new GROUND(width/4,height/2+300,width/2,30)
			gameState = "play";
		}

		if (gameState == "play") {

			// if (Math.round(ball.speed) < 6) {
			if (keyDown("d") || keyDown("RIGHT_ARROW"))
				Matter.Body.applyForce(ball, ball.position, { x: 0.005, y: 0 });
			if (keyDown("a") || keyDown("LEFT_ARROW"))
				Matter.Body.applyForce(ball, ball.position, { x: -0.005, y: 0 });
			if ((keyWentDown("w") || keyWentDown("UP_ARROW")) && groundCollide == true)
				Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.1 });
			// }


			ground.display();
			ground1.display();
			ground2.display();
			//ground3.display();
			goal.display();

			imageMode(CENTER);
			image(ballImg, ball.position.x, ball.position.y, radius * 2, radius * 2);
		}
	}

	drawSprites();
}

