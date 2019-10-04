(function() {
  "use strict";

  angular.module("pfTest.dummy").component("employeeForm", {
    templateUrl: "dummy/components/employee/employee-form/employee-form.component.html",
    controller: EmployeeController
  });

  EmployeeController.$inject = [];
  function EmployeeController() {
    const $ctrl = this;
    $ctrl.$onInit = onInit;
    $ctrl.$onChanges = onChanges;
    $ctrl.$onDestroy = onDestroy;

    ////////////////

    function onInit() {}

    function onChanges(changesObj) {}

    function onDestroy() {}
  }
})();
