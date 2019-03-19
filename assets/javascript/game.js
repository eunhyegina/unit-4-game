$(document).ready(function () {
  var win = 0;
  $("#win").text(win);
  console.log("Wins: " + win)
  var loss = 0;
  $("#loss").text(loss);
  console.log("Losses: " + loss);
  var score = 0;
  $("#totalScore").text(score);
  console.log("Score: " + score);
  var randomNumber = [];
  $("#crystalOne").html("<img src='assets/images/crystalOne.jpg'/>");
  $("#crystalTwo").html("<img src='assets/images/crystalTwo.jpg'/>");
  $("#crystalThree").html("<img src='assets/images/crystalThree.jpg'/>");
  $("#crystalFour").html("<img src='assets/images/crystalFour.jpg'/>");
  randomNumber = Math.floor(Math.random() * 101) + 19;
  console.log(randomNumber);
  $("#numberGenerated").text(randomNumber);

  function winner() {
    alert("Yay, You Won!");
    win++;
    $("#win").html("<h6>" + win + "</h6>");
    restartGame();
  }

  function loser() {
    alert("Sorry, You Lost!");
    loss++;
    $("#loss").html("<h6>" + loss + "</h6>");
    restartGame();
  }
  var crystalOne = Math.floor(Math.random() * 12) + 1;
  console.log("Crystal 1 " + crystalOne);
  $("#crystalOne").on("click", function () {
    score = score + crystalOne;
    console.log(score);
    $("#totalScore").text(score);
    if (score === randomNumber) {
      winner();
    } else if (score > randomNumber) {
      loser();
    }
  });
  var crystalTwo = Math.floor(Math.random() * 12) + 1;
  console.log("Crystal 2 " + crystalTwo);
  $("#crystalTwo").on("click", function () {
    score = score + crystalTwo;
    console.log(score);
    $("#totalScore").text(score);
    if (score === randomNumber) {
      winner();
    } else if (score > randomNumber) {
      loser();
    }
  });
  var crystalThree = Math.floor(Math.random() * 12) + 1;
  console.log("Crystal 3 " + crystalThree);
  $("#crystalThree").on("click", function () {
    score = score + crystalThree;
    console.log(score);
    $("#totalScore").text(score);
    if (score === randomNumber) {
      winner();
    } else if (score > randomNumber) {
      loser();
    }
  });
  var crystalFour = Math.floor(Math.random() * 12) + 1;
  console.log("Crystal 4 " + crystalFour);
  $("#crystalFour").on("click", function () {
    score = score + crystalFour;
    console.log(score);
    $("#totalScore").text(score);
    if (score === randomNumber) {
      winner();
    } else if (score > randomNumber) {
      loser();
    }
  });
  restartGame = function () {
    score = 0;
    $("#totalScore").text(score);
    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log(randomNumber);
    $("#numberGenerated").text(randomNumber);
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
  }
});
