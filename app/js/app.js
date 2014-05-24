'use strict';

/* App Module */

var youTubeApp = angular.module('youTubeApp', [
    'ngRoute',
    'applicationControllers',
    'applicationServices',
    //'applicationFilters'
    //'phonecatDirectives'
]);

youTubeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/videos/', {
                    templateUrl: 'subpages/videos.html',
                    controller: 'AllVideosController'
                }).
                when('/video/:videoId', {
                    templateUrl: 'subpages/video.html',
                    controller: 'ShowVideoController'
                }).
                when('/main', {
                    templateUrl: 'subpages/addVideo.html'
                    //controller: 'PhoneDetailCtrl'
                }).
                when('/search', {
                    templateUrl: 'subpages/search.html',
                    controller: 'search'
                }).
                otherwise({
                    redirectTo: '/videos'
                });
    }]);

