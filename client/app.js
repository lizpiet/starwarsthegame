var app = angular.module('app', ['ngRoute']);

/////////// get this stuff in line, ok. no simpatico

app.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/win',{
            templateUrl:'views/win_lose.html',
            controller: 'GameController'
        })
        .when('/lose',{
            templateUrl:'views/win_lose.html',
            controller: 'GameControllerLose'
        })
        .when('/',{
            templateUrl:'views/main.html'
        });

    $locationProvider.html5Mode({enabled: true});
    //$locationProvider.html5Mode(true);
}]);

///////////

app.controller("IndexController", ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.beginners = [];
    $scope.selectedAnswer={};
    $scope.currentQuestionIndex = 0;

    //////get questions

    $scope.getQuestion = function(){

        var randomID= Math.floor(Math.random()*4);

        //make the call to ('/beginner'), then do a function
        $http.get('/beginner/' + randomID).then(function(beginner){

            console.log(beginner.data[0]);
            console.log("will this ever work?");
            // assigning all of you tasks in a $scope.blank
            $scope.beginners=beginner.data;
            $scope.currentQuestion = $scope.beginners[$scope.currentQuestionIndex];
        });

    };

                //////////// check answers

    $scope.beginners = [];
    $scope.score="";

    $scope.checkAnswers = function(){

        console.log($scope.currentQuestion + " this is a crazy console, boogie on");

        for(var i = 0; i < $scope.currentQuestion.fourAnswers.length; i++){
            if($scope.selected == $scope.currentQuestion.fourAnswers[i].text){
                if($scope.currentQuestion.fourAnswers[i].answer){
                    alert('Correct!');
                    console.log($scope.currentQuestion.fourAnswers[i].answer);

                    //location redirect, add routes to app/server side
                    //  go to page /win,
                    $location.path('/win');

                    //for (var i = 0; i < 4; i++) {
                    //    $scope.currentQuestion=$scope.currentQuestionIndex;
                    //    $scope.currentQuestionIndex ++;
                    //}

                    // display "You Win X Points"  //  click Move along button
                    // request to server, Add points to the database,
                    $http.post('/points', {points:100}).success(function (res){
                        console.log('Am i working?');
                        $scope.score=res.data;
                        console.log($scope.score);
                    });

                    // append points to screen
                    //$scope.getScore = function() {
                    //
                    //};

                    //  Change current question //  Update View to next question


                } else {
                    alert('Wrong!');

                    //go to page, display "You Lose X Points"  // click Move along button
                    //$location.path('/win');

                    //Subtract points to the database, append points to screen

                    //Change current question

                    //Update View to next question

                }
            }
        }

        //if ($scope.beginners[0].fourAnswers[0].answer[0] === true) {
        //    //console.log($scope.beginners[0].fourAnswers[0].answer[0]);
        //    //console.log($scope.beginners);
        //    alert("you lose");
        //
        //}else{
        //    alert("you win");
        //    // function {add points to database}
        //    //console.log($scope.beginners[i].fourAnswers);
        //    for (var i = 0; i <= $scope.currentQuestion.fourAnswers.length; i++){
        //        console.log($scope.currentQuestion.fourAnswers[i].answer);
        //        console.log("is this doing anything?");
        //    }
        //
        //    //console.log($scope.beginner.fourAnswers[0].answer);
        //    //console.log("just stop" + $scope.beginners[0].fourAnswers[0].answer);
        //    //console.log($scope.beginner.fourAnswers[0].answer);
        //    //console.log($scope.beginners[0].fourAnswers[1].answer);
        //}

    };

    $scope.getQuestion();

    //on click  do this:
    //$scope.checkAnswers();

            // inside question, radio buttons,
            // if true, alert win -- click button to next question
            // else alert lose -- click button to next question

            // click skip and go to next question //or

            // after 3 questions, go to Intermediate questions


            //var i = 0;
            //while (i <= $scope.beginner.data.fourAnswers.(length) ){
            //    i++;
            //}

            //for(var i=0; i < 3; i++ ){
            //    var randomID= Math.floor(Math.random()*4);
            //        $scope.beginner.push(beginner.data.id.(randomID));
            //}

    //
    //
    //
    //$scope.intermediate = {};
    //$scope.intermediates = [];
    //
    //$scope.getQuestion2 = function(){
    //    //make the call to ('/intermediate'), then do a function
    //    $http.get('/intermediate').then(function(intermediate){
    //        console.log(intermediate.data);
    //        console.log("why?");
    //        // assigning all of you tasks in a $scope.blank
    //        $scope.intermediates=intermediate.data;
    //    });
    //};
    //
    //
    //$scope.getQuestion2();
    //
    //
    //$scope.final = {};
    //$scope.finals = [];
    //
    //$scope.getQuestion3 = function(){
    //    //make the call to ('/final'), then do a function
    //    $http.get('/final').then(function(final){
    //        console.log(final.data);
    //        console.log("YES?");
    //        // assigning all of you tasks in a $scope.blank
    //        $scope.finals=final.data;
    //    });
    //};
    //
    //
    //$scope.getQuestion3();

}]);







