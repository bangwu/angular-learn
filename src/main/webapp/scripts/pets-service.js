/**
 * Created by bwu on 9/13/15.
 */
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