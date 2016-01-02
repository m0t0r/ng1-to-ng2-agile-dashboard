import helloWorldModule from './hello-world';

describe('Hello world component', () => {
  "use strict";

  let $compile, scope, elm;

  beforeEach(window.module(helloWorldModule.name));

  beforeEach(inject(($injector, $rootScope) => {
    $compile = $injector.get('$compile');
    scope = $rootScope.$new();
  }));

  function renderComponent() {
    elm = angular.element('<hello-world></hello-world>');

    $compile(elm)(scope);
    scope.$digest();

    return elm;
  }

  it('should be able to greet with the classical message "Hello World!"', () => {
    let component = renderComponent();
    
    expect(component.text()).toEqual('Hello World!');
  });
});
