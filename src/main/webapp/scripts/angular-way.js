var module = angular.module("app", ['ngRoute']);

module.factory("petService", ["$http", function ($http) {
    function getAllPets() {
        return $http.get("/api/pets")
    }
    return {
        pets: getAllPets
    }
}]);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/pets', {
            templateUrl: 'pets.html',
            controller: 'petsCtrl'
        })
        .otherwise({redirectTo: '/pets'});
}]);

module.controller('petsCtrl', ['$scope', 'petService', function ($scope, petService) {
    petService.pets().then(function (data) {
        $scope.pets = data.data;
    }, function (error) {
        return error.data;
    });
}]);