$(document).ready(function() {

  //Global Variables
  var wins = 0;
  var losses = 0;
  var targetScore = 0;
  var yourScore = 0;
  var result = 0;

  //function to start the game
  function startGame() {
    //function to generate a random target number
    var targetRandomNumber = Math.floor(Math.random() * (120 - 19) + 19);

    $("#targetScore").text("Target Score: " + targetRandomNumber);
    //function to generate a random number value for minerals
    // For each button I want to put in a different mineral value
    // then append the value
    //Then I want to call the stored value when the button is clicked


   function hiddenMineralValue (max, min) {
     result = Math.floor(Math.random() * (max - min) + min);
     return result;
   }
    var hiddenMineralValueHolder = [];

    for (var i = 0; i < 4; i++) {
    //  hiddenMineralValue(12, 1);
      hiddenMineralValueHolder.push(hiddenMineralValue(12,1));
    }
    console.log(hiddenMineralValueHolder)


    //How to connect the Mineral value to the button
    for (var i = 0; i < hiddenMineralValueHolder.length; i++) {

      // ($"#button").attr("data-mineralvalue", hiddenMineralValueHolder[i]);
      $(".mineral1").append(hiddenMineralValueHolder[0]);
      $(".mineral2").append(hiddenMineralValueHolder[1]);
      $(".mineral3").append(hiddenMineralValueHolder[2]);
      $(".mineral4").append(hiddenMineralValueHolder[3]);
    }


    //function to let you know if you win or not
    $("#button").on("click", function() {
      // var mineralValue = ($(this).attr("data-mineralvalue"));
      // hiddenMineralValue = parseInt(hiddenMineralValue);
      yourScore += hiddenMineralValue //hiddenMineralvalue
      console.log(yourScore);
      $(".yourScore").text("Your Score: " + yourScore);

      if (yourScore === targetScore) {
        alert("You win!");
      } else if (yourScore >= targetScore) {
        alert("You lose!!");
      }
    })
  }

  startGame();
});
