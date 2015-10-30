/**
 * Created by Liz on 10/28/15.
 */
app.controller('GameControllerLose', ['$scope', function($scope) {

    $scope.message = "Wrong Answer...";

    if ($scope.currentLevel == 0) {
        $scope.points = 0 + " points lost" ;
    } else if
    ($scope.currentLevel == 1) {
        $scope.points = 50 + " points lost";
    }
    else {
        $scope.points = "You win " +50 + " points!";
    }
}]);