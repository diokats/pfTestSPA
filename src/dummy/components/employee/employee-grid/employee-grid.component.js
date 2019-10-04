(function () {
  "use strict";

  angular
    .module("pfTest.dummy")
    .component("employeeGrid", {
      templateUrl: "dummy/components/employee/employee-grid/employee-grid.component.html",
      controller: EmployeeGridController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  EmployeeGridController.$inject = ['$scope', 'common', 'employeesService'];

  function EmployeeGridController($scope, common, employeesService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadEmployees();
    }

    function loadEmployees() {
      employeesService.getEmployees()
        .then(data => {
          ctrl.employeesArray = data;
        });
    }

    function refresh() {
      loadEmployees();
    }

    function onDelete(id) {
      employeesService.deleteEmployees(id)
        .then(() => {
          refresh();
        });
    }

    function select(employee) {
      if (!!employee && common.isValidId(employee.Id)) {
        ctrl.onEdit({
          id: employee.Id
        });
      }
    }
  }
})();
