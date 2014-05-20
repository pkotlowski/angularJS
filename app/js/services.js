'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
phonecatServices.factory('Vid', ['$resource',
  function($resource){
    return $resource('js/videos.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);