/**
 * Created by Liz on 10/28/15.
 */

app.controller('GameController', ['$scope', function($scope) {


    $scope.message = "Correct Answer!!!";

    //getPoints = function() {
        if ($scope.currentLevel == 1) {
            $scope.points = 100;
        } else if
        ($scope.currentLevel == 2) {
            $scope.points = 200;
        }
        else {
            $scope.points = 300;
        }


}]);
