
var app = angular.module('app', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http){

    $scope.getQuestion = function(){
        //make the call to ('/question'), then do a function
        $http.get('/question').then(function(item){
            console.log(item);
            console.log("what the heck, man?");
            // assigning all of you tasks in a $scope.blank
            //$scope.beginner=item.data;
        });
    };


    $scope.getQuestion();

}]);














//var app = angular.module('app',[]);
//app.controller("IndexController", ['$scope', '$http', function($scope, $http){
//    //$scope.question = {};
//    //$scope.question = [];
//    $scope.Beginner = response.data;
//    console.log($scope.Beginner);
//    var fetchQuestions = function(){
//        return $http.get('/users/home').then(function(response){
//            if(response.status !== 200){
//                throw new Error('Failed to fetch questions from the API');
//            }
//            $scope.question = {};
//            $scope.question = response.data;
//            return response.data;
//        })
//    };
//
//    fetchQuestions();
//}]);





//    $scope.question = {};
//    $scope.question = [];
//    var fetchQuestions = function(){
//        return $http.get('/users/home').then(function(response){
//            if(response.status !== 200){
//                throw new Error('Failed to fetch questions from the API');
//            }
//            $scope.question = {};
//            $scope.question = response.data;
//            return response.data;
//        })
//    };
//    $scope.add = function(questions){
//        return $http.post('/userHome',questions).then(fetchQuestions);
//    };
//    fetchQuestions();
//}]);

//
//$http.get('/getQuestions').then(function(response) {
//    $scope.djinfo = response.data;
//    console.log($scope.djinfo);
//
//
//});