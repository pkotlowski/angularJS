'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

//phonecatControllers.controller(

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Vid',
  function($scope, Vid) {
    $scope.phones = Vid.query();
    //$scope.orderProp = 'age';
  }]);
phonecatApp.directive('myYoutube', function ($sce) {
    return {
        restrict: 'EA',
        scope: {code: '@'},
        //replace: true,
        template: '<div style="height:100px;"><iframe style="overflow:hidden"  src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
        link: function (scope) {
            console.log('here');
            scope.$watch('code', function (newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + newVal);
                }
            });
        }
    };
});
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
