'use strict';

/* Controllers */

var applicationControllers = angular.module('applicationControllers', []);
var a;
var result = new Array();
applicationControllers.controller('DeleteController', ['$scope', '$rootScope', 
    '$route', '$routeParams','$location',
    function ($rootScope, $route, $routeParams, $location) {        
        for (var i = 0; i < result.length; i++) {
            if ($routeParams.current.params.vidId === result[i].entry.id.$t.slice(42, 53)) {
                result.splice(i, 1);
                break;
            }
        }
        $rootScope.a = result;
        $location.path("/videos");
    }]);
applicationControllers.controller('LoadDbController', ['$http', '$rootScope', '$location',
    function ($http, $rootScope, $location) {
        $http.get('js/videos.json').success(function (data) {
            for (var i = 0; i < data.length; i++) {
                var x = new Object(data[i])
                result.push(x)
            }
        });
        $rootScope.a = result;
        $location.path("/videos")
    }]);
applicationControllers.controller('AllVideosController', ['$scope', 'Vid', '$rootScope',
    function ($scope, Vid, $rootScope) {
        $scope.videos = $rootScope.a;
        $scope.orderProp = 'gd$rating.average';
    }]);

youTubeApp.directive('myYoutube', function ($sce) {
    return {
        restrict: 'EA',
        scope: {code: '@'},
        //replace: true,
        template: '\
        <div style="width:700px height:500px;">\n\
            <iframe style="overflow:hidden " width="640" height="385"  src="{{url}}" frameborder="0" allowfullscreen>\n\
            </iframe>\n\
        </div>',
        link: function (scope) {
            //console.log('here');
            scope.$watch('code', function (newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + newVal);
                }
            });
        }
    };
});
applicationControllers.controller('ShowVideoController', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http, $rootScope) {
        for (var i = 0; i < result.length; i++) {
            if ($routeParams.videoId === result[i].entry.id.$t.slice(42, 53)) {
                $scope.video = result[i];
                break;
            }
        }
//        $http.get('videos/' + $routeParams.videoId + '.json').success(function (data) {
//            $scope.video = data;
//        });
    }]);
applicationControllers.controller('addNewVideo', function ($scope, $rootScope) {
    $scope.addVideo = function () {
        console.log($scope.videoLink)
        var link = $scope.videoLink.toString();
        var id = "";
        if (link.search("youtube.com") > -1) {
            id = link.slice(32, 53);
            $.getJSON("https://gdata.youtube.com/feeds/api/videos/" + id + "?&prettyprint=true&alt=json", function (data) {
                result.push(new Object(data))
                console.log(JSON.stringify(data, undefined, 2))
            })
        }
    };
    $rootScope.a = result
    console.log($rootScope.a)
});

applicationControllers.controller('searchVideo', function ($scope) {
    $scope.searchVideo = function () {
        result.length = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i].author[0].name.$t == $scope.searchInput || a[i].title.$t.indexOf($scope.searchInput) > -1) {
                result.push(a[i]);
            }
        }
        return result;
    };
});
applicationControllers.controller('search', ['$scope',
    function ($scope) {
        $scope.videos = result;
    }]);
