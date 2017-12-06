$(document).ready(function() {

  //Global Variables
  var wins = 0;
  var losses = 0;
  var targetRandomNumber = 0;
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

  var rand1 = hiddenMineralValue(12,1);
  // console.log(rand1);
  var rand2 = hiddenMineralValue(12,1);
  var rand3 = hiddenMineralValue(12,1);
  var rand4 = hiddenMineralValue(12,1);


   $("#mineral1").on("click", function () {
     var mineral1 = $("#mineral1")
     mineral1.attr("mineral-data", rand1);
     var hiddenMineralValue1 = ($("#mineral1").attr("mineral-data"));
     hiddenMineralValue = parseInt(hiddenMineralValue1);
     yourScore += hiddenMineralValue
  //   console.log(hiddenMineralValue1)
  //  console.log(yourScore);
     $("#yourScore").text("Your Score: " + yourScore);
           if (yourScore === targetRandomNumber) {
             alert("You win!");
             wins += 1;
             $("#scoreboard-wins").text("Wins: " + wins);
           } else if (yourScore >= targetRandomNumber) {
             alert("You lose!!");
             losses += 1;
             $("#scoreboard-losses").text("Loses: " + losses);
           }

   })
   $("#mineral2").on("click", function () {
     var mineral2 = $("#mineral2")
     mineral2.attr("mineral-data", rand2);

     var hiddenMineralValue1 = ($("#mineral2").attr("mineral-data"));
     hiddenMineralValue = parseInt(hiddenMineralValue1);
     yourScore += hiddenMineralValue
     $("#yourScore").text("Your Score: " + yourScore);
           if (yourScore === targetRandomNumber) {
             alert("You win!");
             wins += 1;
             $("#scoreboard-wins").text("Wins: " + wins);
           } else if (yourScore >= targetRandomNumber) {
             alert("You lose!!");
             losses += 1;
             $("#scoreboard-losses").text("Loses: " + losses);
           }
   })
   $("#mineral3").on("click", function () {
     var mineral3 = $("#mineral3")
     mineral3.attr("mineral-data", rand3);

     var hiddenMineralValue1 = ($("#mineral3").attr("mineral-data"));
     hiddenMineralValue = parseInt(hiddenMineralValue1);
     yourScore += hiddenMineralValue
     $("#yourScore").text("Your Score: " + yourScore);
           if (yourScore === targetRandomNumber) {
             alert("You win!");
             wins += 1;
             $("#scoreboard-wins").text("Wins: " + wins);
           } else if (yourScore >= targetRandomNumber) {
             alert("You lose!!");
             losses += 1;
             $("#scoreboard-losses").text("Loses: " + losses);
           }
   })
   $("#mineral4").on("click", function () {
     var mineral4 = $("#mineral4")
     mineral4.attr("mineral-data", rand4);

     var hiddenMineralValue1 = ($("#mineral4").attr("mineral-data"));
     hiddenMineralValue = parseInt(hiddenMineralValue1);
     yourScore += hiddenMineralValue
     $("#yourScore").text("Your Score: " + yourScore);
           if (yourScore === targetRandomNumber) {
             alert("You win!");
             wins += 1;
             $("#scoreboard-wins").text("Wins: " + wins);
           } else if (yourScore >= targetRandomNumber) {
             alert("You lose!!");
             losses += 1;
             $("#scoreboard-losses").text("Loses: " + losses);
           }
   })
  //   var hiddenMineralValueHolder = [];
  //
  //   for (var i = 0; i < 4; i++) {
  //   //  hiddenMineralValue(12, 1);
  //     hiddenMineralValueHolder.push(hiddenMineralValue(12,1));
  //   }
  //   console.log(hiddenMineralValueHolder)
  //
  //
  //   //How to connect the Mineral value to the button
  //   for (var i = 0; i < hiddenMineralValueHolder.length; i++) {
  //     var button =$(".button")
  //     button.attr("mineral-data", hiddenMineralValueHolder[i]);
  //     //have to make it append each button
  //     $("#button").append(button);
  //     // ($"#button").attr("data-mineralvalue", hiddenMineralValueHolder[i]);
  //     // $(".mineral1").attr("mineral-data", hiddenMineralValueHolder[0]);
  //     // $(".mineral2").attr("mineral-data", hiddenMineralValueHolder[1]);
  //     // $(".mineral3").attr("mineral-data", hiddenMineralValueHolder[2]);
  //     // $(".mineral4").attr("mineral-data", hiddenMineralValueHolder[3]);
  // }

// $(".button").on("click", function () {
//   var hiddenMineralValue = ($(this).attr("mineral-data"));
//   hiddenMineralValue = parseInt(hiddenMineralValue);
//   yourScore += hiddenMineralValue
//  console.log(yourScore);
//   $("#yourScore").text("Your Score: " + yourScore);
//         if (yourScore === targetRandomNumber) {
//           alert("You win!");
//           wins += 1;
//           $("#scoreboard-wins").text("Wins: " + wins);
//         } else if (yourScore >= targetRandomNumber) {
//           alert("You lose!!");
//           losses += 1;
//           $("#scoreboard-losses").text("Loses: " + losses);
//         }
//       })
}

   startGame();
});
