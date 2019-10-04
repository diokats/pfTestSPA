(function() {
  "use strict";

  angular.module("pfTest.dummy").config(configure);

  configure.$inject = ["$stateProvider", "$urlRouterProvider"];
  function configure($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: "home",
        url: "/home",
        title: "Home",
        component: "pfHome"
      })
      .state({
        name: "test",
        url: "/test",
        title: "Test",
        component: "pfTest"
      })
      .state({
        name: "employees",
        url: "/employees",
        title: "Employees",
        component: "pfEmployeeList"
      })
      .state({
        name: "departments",
        url: "/departments",
        title: "Departments",
        component: "departmentGrid"
      });
    $urlRouterProvider.otherwise("home");
  }
})();
