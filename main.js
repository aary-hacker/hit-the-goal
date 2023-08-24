
// Create canvas variable
var canvas = document.getElementById('myCanvas');


//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img()
{
	
	fabric.image.fromURL("golf-h.png" , function(img){
      hole_obj=img;
	  hole_obj.scaleToWidth(50);
	  hole_obj.scaleToHeight(50);
	  hole_obj.set({
		top:hole_y,
		left:hole_x

	});
	canvas.add(hole_obj);
    });
}
	
	new_image();


function new_image()
{
	// write code to Upload ball image on canvas
	
	fabric.image.fromURL("ball.png" , function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		  top:ball_y,
		  left:ball_x
  
	  });
	  canvas.add(ball_obj);
  });
  }


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj)
	}
	document.getElementById(hd3).innerHTML="You have hit the goal !!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
			  if(bally_y>=0){
    ball_y=ball_y-block_image_height;
	console.log("block_image_height = " + block_image_height);
    console.log("when down arrow is pressed ,x= "+ball_x+" ,y= "+ball_y);
    canvas.remove();
    new_image();
		
	}}

	function down()
	{
		 // Write a code to move ball downward.
		  if(bally_y<=450){
    ball_y=ball_y+block_image_height;
	console.log("block_image_height = " + block_image_height);
    console.log("when down arrow is pressed ,x= "+ball_x+" ,y= "+ball_y);
    canvas.remove();
    new_image();
	}}

	function left()
	{
		if(ball_x >500)
		{
			// Write a code to move ball left side.
			if(bally_x>=0){
				ball_x=ball_x-block_image_width;
				console.log("block_image_width = " + block_image_width);
				console.log("when down arrow is pressed ,x= "+ball_x+" ,y= "+ball_y);
				canvas.remove();
				new_image();
				}}

			
		}
	

	function right()
	{
	
		{
			// Write a code to move ball right side.
			if(bally_x<=500){
				ball_x=ball_x+block_image_width;
				console.log("block_image_width = " + block_image_width);
				console.log("when down arrow is pressed ,x= "+ball_x+" ,y= "+ball_y);
				canvas.remove();
				new_image();
				}}
		}
	
	

