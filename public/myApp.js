var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', function ($scope) {

  $scope.centerNoise = "'-webkit-transform':'translate(-80px, -80px)','-moz-transform':'translate(-80px, -80px)','-ms-transform':'translate(-80px, -80px)','-o-transform':'translate(-80px, -80px)','transform':'translate(-80px, -80px)'";
  $scope.buttonState = "hidden";

  $scope.mouseMove = function ($event) {
    $scope.x = $event.clientX + "px";
    $scope.y = $event.clientY + "px";
  };

  $scope.tidyUp = function () {
    $scope.yRed = "100px";
    $scope.xRed = "100px";
    $scope.yOrange = "200px";
    $scope.xOrange = "200px";
    $scope.yYellow = "300px";
    $scope.xYellow = "300px";
    $scope.yGreen = "400px";
    $scope.xGreen = "400px";
    $scope.yCyan = "610px";
    $scope.xCyan = "400px";
    $scope.yBlue = "510px";
    $scope.xBlue = "300px";
    $scope.yPurple = "410px";
    $scope.xPurple = "200px";
    $scope.yPink = "310px";
    $scope.xPink = "100px";
  };

  $scope.tidyUp();

  $scope.moveNoise = false;
  $scope.noiseColor = "";
  $scope.clickNoise = function (color) {
    $scope.buttonState = "button visible";
    $scope.noiseColor = color;
    if ($scope.moveNoise == true) {
      $scope.moveNoise = false;
      switch (color) {
        case "red":
          $scope.yRed = $scope.y;
          $scope.xRed = $scope.x;
          break;
        case "orange":
          $scope.yOrange = $scope.y;
          $scope.xOrange = $scope.x;
          break;
        case "yellow":
          $scope.yYellow = $scope.y;
          $scope.xYellow = $scope.x;
          break;
        case "green":
          $scope.yGreen = $scope.y;
          $scope.xGreen = $scope.x;
          break;
        case "cyan":
          $scope.yCyan = $scope.y;
          $scope.xCyan = $scope.x;
          break;
        case "blue":
          $scope.yBlue = $scope.y;
          $scope.xBlue = $scope.x;
          break;
        case "purple":
          $scope.yPurple = $scope.y;
          $scope.xPurple = $scope.x;
          break;
        case "pink":
          $scope.yPink = $scope.y;
          $scope.xPink = $scope.x;
          break;
        default:
      }

    } else if ($scope.moveNoise == false) {
      $scope.moveNoise = true;
    }
  };

  $scope.playAudio = function (address) {
    var audio = new Audio(address);
    audio.play();
  };

});
