
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false

var level = 0


$(document).keypress(function () {
     
    if (!started){
      $("#level-title").text("level " + level)
      nextSequence()
      started = true
  
      
    }
})

$(".btn").click(function (){
  var userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)
 
  checkAnswer(userClickedPattern.length - 1)
})


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] ===  userClickedPattern[currentLevel]){
    console.log("nice")
    if (userClickedPattern.length === gamePattern.length){
      setTimeout( function (){
        nextSequence()
      },1000)


    }
  }
  else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over")
    setTimeout(function(){
    $("body").removeClass("game-over")
    },200)
    startOver()
    $("#level-title").text("Game Over, Press Any Key to Restart");
  }
}




function nextSequence() {
userClickedPattern = []
  level++
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);



 

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour)

  
}
function playSound (name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}
function animatePress(currentColour){
  $("#" +currentColour).addClass("pressed")
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed")
  },100)
}
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;

  }

/*
gamePattern = [];
   userClickedPattern = [];
  
   started = false
  
   level = 0
*/








// Блять піздец я не єбу шо то за хуйня я ніхуя НЕ РОЗУМІБ

