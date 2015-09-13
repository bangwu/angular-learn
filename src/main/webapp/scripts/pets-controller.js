/**
 * Created by bwu on 9/13/15.
 */
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