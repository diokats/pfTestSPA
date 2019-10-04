(function() {
  "use strict";

  angular
    .module("pfTest.dummy")
    .service("departmentsService", DepartmentsService);

  DepartmentsService.$inject = ["requestService"];
  function DepartmentsService(requestService) {
    this.getDepartments = getDepartments;
    this.getDepartment = getDepartment;
    this.createDepartment = createDepartment;
    this.updateDepartment = updateDepartment;
    this.deleteDepartment = deleteDepartment;

    const DepartmentEntity = "Departments";

    function getDepartments() {
      return requestService.getArray(DepartmentEntity);
    }

    function getDepartment(id) {
      return requestService.getObject(DepartmentEntity, id);
    }

    function createDepartment(Department) {
      return requestService.createObject(DepartmentEntity, Department);
    }

    function updateDepartment(Department) {
      return requestService.updateObject(DepartmentEntity, Department);
    }

    function deleteDepartment(id) {
      return requestService.deleteObject(DepartmentEntity, id);
    }
  }
})();
