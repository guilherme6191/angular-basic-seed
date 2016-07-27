'use strict';

angular.module('myApp', [
	 'ui.router', 'ui.bootstrap'
	]).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

	  $stateProvider

	  	.state('main', {
		  url: '/',
		  controller: 'MainController',
		  controllerAs: 'vm',
		  templateUrl: 'app/views/main.html'
	  	});

	});