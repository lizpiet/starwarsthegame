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

    $scope.levelTitle = "Beginner Level";
    $scope.movieQuote = "Hokey religions and ancient weapons are no match for a good blaster at your side, kid.";
    $scope.person = "- Han Solo";
    $scope.questions = [];
    $scope.selectedAnswer={};

    $scope.currentQuestionIndex = 0;
    $scope.currentLevel = 1;
    $scope.questionIndex = 0;

    $scope.showRightWrong = false;

    //////get questions

    $scope.getQuestion = function(){
        console.log("Current level is: ", $scope.currentLevel);

        $scope.showRightWrong = false;

        //if($scope.questionIndex == 2 && $scope.currentLevel < 3){
        //    $scope.currentLevel++;
        //    $scope.levelTitle = "Intermediate Level";
        //    $scope.movieQuote = "“Don't call me a mindless philosopher, you overweight glob of grease.”";
        //    $scope.person = "- C-3PO";
        //    $scope.questionIndex = 0;
        //
        //} else if ($scope.questionIndex == 2 && $scope.currentLevel == 3) {
        //    $scope.currentLevel = 1;
        //    $scope.levelTitle = "Advanced Level";
        //    $scope.movieQuote = "They never even ask me any questions....";
        //    $scope.person = "- Han Solo";
        //    $scope.questionIndex = 0;
        //}

        var urlSet ="";
        if ($scope.currentLevel == 1)
        {urlSet = '/beginner/'}
        else if ($scope.currentLevel == 2)
        {urlSet = '/intermediate/'}
        else {urlSet = '/final/'}

        var randomID= Math.floor(Math.random() * 9);

            //if / else, // check questions so they aren't repeated

        //make the call to ('/beginner'), then do a function
        $http.get(urlSet + randomID).then(function(response){

            console.log(response.data[0]);
            console.log("will this ever work?");
            // assigning all of you tasks in a $scope.blank

            $scope.questions = response.data;

            $scope.currentQuestion = $scope.questions[0];

            $scope.questionIndex++;

            if($scope.questionIndex == 2 && $scope.currentLevel < 3){
                $scope.currentLevel++;
                $scope.levelTitle = "Intermediate Level";
                $scope.movieQuote = "“Don't call me a mindless philosopher, you overweight glob of grease.”";
                $scope.person = "- C-3PO";
                $scope.questionIndex = 0;

            } else if ($scope.questionIndex == 2 && $scope.currentLevel == 3) {
                $scope.currentLevel = 1;
                $scope.levelTitle = "Advanced Level";
                $scope.movieQuote = "They never even ask me any questions....";
                $scope.person = "- Han Solo";
                $scope.questionIndex = 0;
            }
        });
    };

    //////////// check answers /// go to next question

    $scope.questions = [];
    $scope.score="";
    //$scope.points = 100;

    $scope.checkAnswers = function(){

        console.log($scope.currentQuestion + " this is a crazy console, boogie on");

        for(var i = 0; i < $scope.currentQuestion.fourAnswers.length; i++){
            if($scope.selected == $scope.currentQuestion.fourAnswers[i].text){
                if($scope.currentQuestion.fourAnswers[i].answer){

                    $scope.showRightWrong = true;

                    console.log($scope.currentQuestion.fourAnswers[i].answer);

                    //location redirect, add routes to app/server side
                    //  go to page /win,
                    $location.path('/win');

                   // do if else here //
                    // display "You Win X Points"
                    // request to server, Add points to the database,

                    $http.post('/points', {points: $scope.points}).then(function (res){
                        console.log('Am i working?');
                        //console.log($scope.score);

                        if ($scope.currentLevel == 1){
                            $scope.points = 100;
                        }else if($scope.currentLevel == 2)
                        {$scope.points = 200;}
                        else{$scope.points = 300;}

                        //console.log(res.data);
                        console.log($scope.points);
                        $scope.score=res.data;

                        // this is adding previous score to the total score on the screen
                        // do not change
                        if(res.data){
                            $scope.score=res.data;
                        } else {
                            $scope.score = 0;
                        }
                        //console.log($scope.score);

                    });

                    // append points to screen // done on userHome.html {{score.score}}

                    //On either move along or skip,
                    //  Change current question //  Update View to next question

                } else {
                    $scope.showRightWrong = true;

                    //go to page, display "You Lose X Points"  // click Move along button
                    $location.path('/lose');

                    $http.post('/points', {points: $scope.points}).then(function (res) {
                        console.log('Am i working part 2?');
                        //console.log($scope.score);

                        //Subtract points to the database, append points to screen
                        if ($scope.currentLevel == 1) {
                            $scope.points = 0;
                        } else if ($scope.currentLevel == 2) {
                            $scope.points = -50;
                        }
                        else {
                            $scope.points = 50;
                        }

                        //console.log(res.data);
                        console.log($scope.points);
                        $scope.score=res.data;

                        //Change current question  //Update View to next question
                    })
                }
            }
        }
    };

    $scope.getQuestion();

    $http.post('/points', {points: $scope.points}).then(function (res){
        console.log('Am i working?');
        console.log(res.data);
        if(res.data){
            $scope.score=res.data;
        } else {
            $scope.score = 0;
        }
        console.log($scope.score);
    });

}]);

