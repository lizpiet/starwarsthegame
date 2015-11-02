/**
 * Created by Liz on 10/28/15.
 */

app.controller('GameController', ['$scope', function($scope) {


    $scope.message = "Correct Answer!!!";
    $scope.points = $scope.win;
    //$scope.points = "";
    //getPoints = function() {
        if ($scope.currentLevel == 1) {
            $scope.win = 100;
        } else if
        ($scope.currentLevel == 2) {
            $scope.win = 200;
        }
        else {
            $scope.win = 300;
        }


}]);
