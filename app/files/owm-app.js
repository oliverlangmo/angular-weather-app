angular.module('OWMApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'CityCtrl'
        }).when('/city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl'
        });
    }])

    .controller('CityCtrl', function($scope) {
        $scope.city = 'New York';



    });