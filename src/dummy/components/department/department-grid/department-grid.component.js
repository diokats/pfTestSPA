(function () {
  "use strict";

  angular
    .module("pfTest.dummy")
    .component("departmentGrid", {
      templateUrl: "dummy/components/department/department-grid/department-grid.component.html",
      controller: DepartmentsGridController,
      bindings: {
        onCreate: '&',
        onEdit: '&'
      }
    });

  DepartmentsGridController.$inject = ['$scope', 'common', 'departmentsService'];

  function DepartmentsGridController($scope, common, departmentsService) {
    const ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.onDelete = onDelete;
    ctrl.select = select;

    $scope.$on('refresh', refresh);

    function onInit() {
      loadDepartments();
    }

    function loadDepartments() {
      departmentsService.getDepartments()
        .then(data => {
          ctrl.departmentsArray = data;
        });
    }

    function refresh() {
      loadDepartments();
    }

    function onDelete(id) {
      departmentsService.deleteDepartments(id)
        .then(() => {
          refresh();
        });
    }

    function select(department) {
      if (!!department && common.isValidId(department.Id)) {
        ctrl.onEdit({
          id: department.Id
        });
      }
    }
  }
})();
