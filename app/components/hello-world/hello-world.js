import angular from 'angular';

let helloWorldModule = angular.module('helloWorld', []);

helloWorldModule.directive('helloWorld', helloWorld);

function helloWorld() {
  "use strict";
  return {
    restrict: 'E',
    template: '<h1>Hello World!<h1>'
  }
}

export default helloWorldModule;