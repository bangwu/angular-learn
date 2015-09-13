/**
 * Created by bwu on 9/13/15.
 */
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/pets', {
            templateUrl: '/pets/pets.html',
            controller: 'petsCtrl'
        })
        .when('/pets/:id', {
            templateUrl: '/pets/petDetail.html',
            controller: 'petDetailCtrl'
        })
        .otherwise({redirectTo: '/pets'});
}]);