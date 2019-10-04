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
        component: "employeeGrid"
      })
      
      .state({
        name: "departments",
        url: "/departments",
        title: "Departments",
        component: "departmentGrid",
        IsMenuItem: true,
        resolve: {

          onCreate: ['$state', $state => {

            return function () {

              $state.go('department');

            }

          }],

          onEdit: ['$state', 'common', ($state, common) => {

            return function (Id) {

              if (common.isValidId(Id)) {

                $state.go('department', {

                  Id

                });

              }

            };

          }]
      }
    })
    .state({
      name: "department",
      url: "/department/{Id}",
      title: "department",
      component: "departmentForm",
      IsMenuItem: false,

      
      resolve: {

        departmentId: ['$transition$', $transition$ => {

          console.warn($transition$.params());

          return $transition$.params().Id;

        }],

        onAction: ['$state', $state => {

          return function () {

            $state.go('departments');

          }

        }]

      },

      params: {

        Id: {

          type: 'int',

          value: 0,

          dynamic: true

        }

      }
    })
    $urlRouterProvider.otherwise("home");
  }
})();
