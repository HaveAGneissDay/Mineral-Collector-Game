$(document).ready(function(){

//Global Variables
 var wins = 0;
 var losses = 0;
 var targetScore = 0;
 var yourScore = 0;

//function to start the game

//function to generate a random target number
var targetRandomNumber = Math.floor(Math.random() * (120-19)+19);

$("#targetScore").text("Target Score: " + targetRandomNumber);
//function to generate a random number value for minerals
var hiddenMineralValue =Math.floor(Math.random() * (12-1)+1);

//function to keep score
//How to connect the Mineral value to the buttons
for (var i = 0; i < button.length; i++) {
  $(".button").append(hiddenMineralValue);
  //console.log(hiddenMineralValue)
}
//function to let you know if you win or not
$(".button").on("click", function () {
   yourScore +=   //hiddenMineralvalue

   $(".yourScore").text("Your Score: " + yourScore);

   if (yourScore === targetScore) {
     alert("You win!");
   }

   else if (yourScore >= targetScore) {
     alert("You lose!!");
}
})

});
