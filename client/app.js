var app = angular.module('app', ['ngRoute']);

//make a get call to user on page load to append the score

/////////// Angular routing

app.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/win',{
            templateUrl:'views/win.html',
            controller: 'GameController'
        })
        .when('/lose',{
            templateUrl:'views/lose.html',
            controller: 'GameControllerLose'
        })
        .when('/',{
            templateUrl:'views/main.html'
        });

            $locationProvider.html5Mode({enabled: true});
        }]);

///////////

app.controller("IndexController", ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.beginners = [];
    $scope.selectedAnswer={};

    $scope.currentQuestionIndex = 0;
    $scope.currentLevel = 0;

    //////get questions

    $scope.getQuestion = function(){

        //if current level is = 0 url = '/beginner/';
        //else if
        //else

        var randomID= Math.floor(Math.random() * 4);

            //if / else, // check questions so they aren't repeated

        //make the call to ('/beginner'), then do a function
        $http.get('/beginner/' + randomID).then(function(beginner){

            console.log(beginner.data[0]);
            console.log("will this ever work?");
            // assigning all of you tasks in a $scope.blank
            $scope.beginners=beginner.data;
            $scope.currentQuestion = $scope.beginners[$scope.currentQuestionIndex];

                //increment counter

        });

    };
                //////////// check answers /// go to next question

    $scope.beginners = [];
    $scope.score="";
    $scope.beginnerPoints = 100;

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

                    // display "You Win X Points"
                    // request to server, Add points to the database,
                    $http.post('/points', {points:100}).then(function (res){
                        console.log('Am i working?');
                        $scope.score=res.data;
                        console.log($scope.score);
                    });

                    // append points to screen // done on userHome.html {{score.score}}

                        //On either move along or skip,
                    //  Change current question //  Update View to next question
                    // Use  $scope.currentQuestionIndex = 0; above to do that.


                    //for (var i = 0; i < 4; i++) {
                    //    $scope.currentQuestion=$scope.currentQuestionIndex;
                    //    $scope.currentQuestionIndex ++;
                    //}


                } else {
                    alert('Wrong!');

                    //go to page, display "You Lose X Points"  // click Move along button
                    $location.path('/lose');

                    //Subtract points to the database, append points to screen

                    //Change current question  //Update View to next question

                }
            }
        }

    };

    $scope.getQuestion();

            // click skip and go to next question //or

            // after 3 questions, go to Intermediate questions

    //$scope.intermediate = {};
    //$scope.intermediates = [];
    //
    //$scope.getQuestion2 = function(){
    //    //make the call to ('/intermediate'), then do a function
    //    $http.get('/intermediate/').then(function(intermediate){
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
    // // click skip and go to next question //or

    // after 3 questions, go to Intermediate questions

    //$scope.final = {};
    //$scope.finals = [];
    //
    //$scope.getQuestion3 = function(){
    //    //make the call to ('/final'), then do a function
    //    $http.get('/final/').then(function(final){
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







