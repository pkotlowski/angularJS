'use strict';

/* App Module */

var youTubeApp = angular.module('youTubeApp', [
    'ngRoute',
    'applicationControllers',
    'applicationFilters',
    'applicationServices'
    //'phonecatDirectives'
]);
youTubeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/videos/', {
                    templateUrl: 'partials/videos.html',
                    controller: 'AllVideosController'
                }).
                when('/video/:videoId', {
                    templateUrl: 'partials/video.html',
                    controller: 'ShowVideoController'
                }).
                when('/main', {
                    templateUrl: 'partials/addVideo.html'
                    //controller: 'PhoneDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/phones'
                });
    }]);

