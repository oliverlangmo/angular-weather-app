 var app =  angular.module('OWMApp', ['ngRoute'])
    .value('owmCities', ['New York', 'Dallas', 'Chicago']);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        })
          .when('/cities/:city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl',
            resolve : {
                city: function(owmCities, $route, $location) {
                    var city = $route.current.params.city;
                    if(owmCities.indexOf(city) == -1 ) {
                        $location.path('/error');
                        return;
                    }
                    return city;
                }
            }});

    app.controller('HomeCtrl', ['$scope', function($scope) {
        //empty for now
    }]);
    app.controller('CityCtrl', function($scope, city) {
    $scope.city = city;
 });
}]);
