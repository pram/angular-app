'use strict';

/**
 * @ngdoc function
 * @name testappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testappApp
 */
angular.module('testappApp')
  .controller('MainCtrl', function ($scope) {
	$scope.todos = ['Item 1', 'Item 2', 'Item 3'];
  });
