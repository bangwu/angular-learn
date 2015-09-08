var module = angular.module("app", []);
module.controller("one", ["$scope", "petService", function ($scope, petService) {
    petService.pets().then(function (data) {
        $scope.pets = data.data;
    }, function (error) {
        return error.data;
    });
}]);

module.factory("petService", ["$http", function ($http) {
    function getPets() {
        return $http.get("/api/pets")
    }

    return {
        pets: getPets
    }
}]);