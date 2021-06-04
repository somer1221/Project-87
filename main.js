const {
    fabric
} = require("./fabric");

var canvas = new fabric.Canvas('MyCanvas');

var player_x = 10;
var player_y = 10;

var player_object = "";
var block_image = "";
var block_image_height = 30
var block_image_width = 30

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        }) ;canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image = Img;

    block_image.scaleToWidth(block_image_width);
    block_image.scaleToHeight(block_image_height);
    block_image.set({
        top:player_y,
        left:player_x
    })
    canvas.add(block_image);
    });

}

function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed);

     if(e.shiftKey == true && keyPressed == '80') {

      console.log("P and Shift have been pressed together.");
      block_image_height += 10;
      block_image_width += 10;
      document.getElementById("current_width").innerHTML = block_image_width;
      document.getElementById("current_height").innerHTML = block_image_height;

     }

     if(e.shiftKey == true && keyPressed == '77') {

        console.log("M and Shift have been pressed together.");
        block_image_height -= 10;
        block_image_width -= 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
      } 

      if (keyPressed == '70') {
           new_image('ironman_face.png');
           console.log("face");
      }

      if (keyPressed == '66') {

        new_image('spiderman_body.png');
        console.log("body");
      }

      if (keyPressed == '76') {
        new_image('hulk_legs.png');
        console.log("legs"); 
      }

      if (keyPressed == '82') {
          new_image('thor_right_hand.png')
          console.log("right_hand");
      }

      if (keyPressed == '72') {
      new_image('captain_america_left_hand.png');
        console.log("left_hand");
    }

    if (keyPressed == '38') {
        up();
        console.log("up")
    }

    if (keyPressed == '37') {
        left();
        console.log("left")
    }

    if (keyPressed == '39') {
        right();
        console.log("right")
    }

    if (keyPressed == '40') {
        down();
        console.log("down")
    }

    }

    function up() {
        if (player_y >= 0) {
            player_y -= block_image_height;
            console.log("block image height = " +  block_image_height);
            console.log("When Up Arrow key is pressed, X = " + player_x + ", Y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    
    }
    
    function down() {
        if (player_y <= 500) {
            player_y += block_image_height;
            console.log("block image height = " +  block_image_height);
            console.log("When Down Arrow key is pressed, X = " + player_x + ", Y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    
    }
    
    function left() {
        if (player_x > 0) {
            player_x -= block_image_width;
            console.log("block image width = " +  block_image_width);
            console.log("When Left Arrow key is pressed, X = " + player_x + ", Y = " + player_y);
            canvas.remove(player_object);
            player_update();
        }
    
    }
    
    function right() {
        if (player_x <= 850) {
            player_x += block_image_width;
            console.log("block image width = " +  block_image_width);
            console.log("When Right Arrow key is pressed, X = " + player_x + ", Y = " + player_y);
            canvas.remove(player_object);
            update();
        }
    
    }
    
    
    
    