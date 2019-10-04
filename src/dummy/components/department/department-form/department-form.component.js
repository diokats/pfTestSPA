(function () {
  'use strict';

  angular
    .module('pfTest.dummy')
    .component('departmentForm', {
      templateUrl: 'dummy/components/department/department-form/department-form.component.html',
      controller: DepartmentFormController,
      bindings: {
        departmentId: '<',
        onAction: '&'
      },
    });

  DepartmentFormController.$inject = ['common', 'logger', 'departmentsService'];
  function DepartmentFormController(common, logger, departmentsService) {
    
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;

    function onInit() {}

    function onChanges(changesObj) {}

    function onDestroy() {}
  }
})();
