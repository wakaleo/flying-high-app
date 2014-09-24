angular.module('flyingHighApp', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngResource', 'ngAnimate', 'myaccount','config']);

angular.module('flyingHighApp').config(function($routeProvider) {

    $routeProvider.when('/myaccount',{templateUrl: 'partial/myaccount/myaccount.html'});
    $routeProvider.when('/home',{templateUrl: 'partial/home/home.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('flyingHighApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
