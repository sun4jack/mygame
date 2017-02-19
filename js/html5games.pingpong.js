var KEY = {
BALLLEFT:74,
BALLRIGHT:76,
BALLUP: 73,
BALLDOWN: 75,
UP: 38,
DOWN: 40,
W: 87,
S: 83
}

$(function(){
// listen to the key down event
$(document).keydown(function(e){
switch(e.which){
case KEY.BALLUP: // B pressed
// get the current Ball's top value in Int type
var top = parseInt($("#ball").css("top"));
// move the ball up 5 pixels
$("#ball").css("top",top-5);
break;
case KEY.BALLDOWN: // space pressed
var top = parseInt($("#ball").css("top"));
// move the ballle B down 5 pixels
$("#ball").css("top",top+5);
break;
case KEY.BALLLEFT: // V pressed
// get the current Ball's top value in Int type
var yleft = parseInt($("#ball").css("left"));
// move the ball up 5 pixels
$("#ball").css("left",yleft-5);
break;
case KEY.BALLRIGHT: // N pressed
var yleft = parseInt($("#ball").css("left"));
// move the ballle B down 5 pixels
$("#ball").css("left",yleft+5);
break;
case KEY.UP: // arrow-up
// get the current paddle B's top value in Int type
var top = parseInt($("#paddleB").css("top"));
// move the paddle B up 5 pixels
$("#paddleB").css("top",top-5);
break;
case KEY.DOWN: // arrow-down
var top = parseInt($("#paddleB").css("top"));
// move the paddle B down 5 pixels
$("#paddleB").css("top",top+5);
break;
case KEY.W: // w
var top = parseInt($("#paddleA").css("top"));
// move the paddle A up 5 pixels
$("#paddleA").css("top",top-5);
break;
case KEY.S: // s
var top = parseInt($("#paddleA").css("top"));
// move the paddle A drown 5 pixels
$("#paddleA").css("top",top+5);
break;
}
});
});