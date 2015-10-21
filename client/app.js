var app = angular.module('app',[]);
app.controller("IndexController", ['$scope', '$http', function($scope, $http){
    $scope.luke = {};
    $scope.luke = [];
    var fetchLukes = function(){
        return $http.get('/luke').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch cats from the API');
            }
            $scope.luke = {};
            $scope.lukes = response.data;
            return response.data;
        })
    };
    $scope.add = function(luke){
        return $http.post('/add',luke).then(fetchLukes);
    };
    fetchLukes();
}]);
