import angular from 'angular';
import HelloWorld from './hello-world/hello-world';

let componentsModule = angular.module('app.components', [
  HelloWorld.name
]);

export default componentsModule;
