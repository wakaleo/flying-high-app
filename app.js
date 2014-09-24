angular.module('flyingHighApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('flyingHighApp').config(function($routeProvider) {

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
