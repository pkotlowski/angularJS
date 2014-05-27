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
                when('/start', {
                    template:'',
                    controller: 'LoadDbController'
                }).
                when('/delete/:vidId', {
                    template:'',
                    controller: 'DeleteController'
                }).
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
                            
                }).
                when('/search', {
                    templateUrl: 'subpages/search.html',
                    controller: 'searchInYtController'
                }).
                otherwise({
                    redirectTo: '/videos'
                });
    }]);

