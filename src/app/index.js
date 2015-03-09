'use strict';
/*jshint esnext: true */

import NavbarCtrl from '../components/navbar/navbar.controller';

import TestsIndexCtrl from './tests/tests.index.controller';
import TestsDetailCtrl from './tests/tests.detail.controller';

angular.module('ngTestsuite', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 
  'restangular', 'ui.router', 'ui.bootstrap', 'ui.ace'
  ])
  .controller('NavbarCtrl', NavbarCtrl)

  .controller('TestsIndexCtrl', TestsIndexCtrl)
  .controller('TestsDetailCtrl', TestsDetailCtrl)
  
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        abstract: true,
        templateUrl: 'app/shell/shell.html'
      })

      .state('app.tests', {
        url: '/',
        templateUrl: 'app/tests/tests.index.html',
        controller: 'TestsIndexCtrl'
      })

      .state('app.tests.detail', {
        url: 'test/:id',
        templateUrl: 'app/tests/tests.detail.html',
        controller: 'TestsDetailCtrl'
      })

    ;

    $urlRouterProvider.otherwise('/');

  })
;
