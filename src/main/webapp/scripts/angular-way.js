var module = angular.module("app", ['ngRoute']);

module.factory("petService", ["$http", function ($http) {
    function getAllPets() {
        return $http.get("/api/pets")
    }

    function getPetById(id) {
        return $http.get("/api/pets/" + id)
    }

    return {
        pets: getAllPets,
        petById: getPetById
    }
}]);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/pets', {
            templateUrl: 'pets.html',
            controller: 'petsCtrl'
        })
        .when('/pets/:id', {
            templateUrl: 'petDetail.html',
            controller: 'petDetailCtrl'
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

module.controller('petDetailCtrl', ['$scope', '$routeParams', 'petService', function ($scope, $routeParams, petService) {
    var petId = $routeParams.id;
    petService.petById(petId).then(function (data) {
        $scope.pet = data.data;
    }, function (error) {
        return error.data;
    });
}]);