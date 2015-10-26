
var app = angular.module('app', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http){

    $scope.beginner = {};
    $scope.beginners = [];

    $scope.getQuestion = function(){
        //make the call to ('/beginner'), then do a function
        $http.get('/beginner').then(function(beginner){
            console.log(beginner.data);
            console.log("will this ever work?");
            // assigning all of you tasks in a $scope.blank
            $scope.beginners=beginner.data;
        });
    };


    $scope.getQuestion();



    $scope.intermediate = {};
    $scope.intermediates = [];

    $scope.getQuestion2 = function(){
        //make the call to ('/beginner'), then do a function
        $http.get('/intermediate').then(function(intermediate){
            console.log(intermediate.data);
            console.log("will this ever work?");
            // assigning all of you tasks in a $scope.blank
            $scope.intermediates=intermediate.data;
        });
    };


    $scope.getQuestion2();


    $scope.final = {};
    $scope.finals = [];

    $scope.getQuestion3 = function(){
        //make the call to ('/beginner'), then do a function
        $http.get('/final').then(function(final){
            console.log(final.data);
            console.log("YES?");
            // assigning all of you tasks in a $scope.blank
            $scope.finals=final.data;
        });
    };


    $scope.getQuestion3();

}]);







