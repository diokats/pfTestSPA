(function (){
  'use strict';

  angular.module('pfTest.core').service('logger',Logger);
  
  Logger.$inject = [];
  function Logger(){
    this.info = info;
    this.warn = warn;
    this.error = error;

    function info(message){
      console.info('[info] ${JSON.stringify(message)}');
    }
    function info(message){
      console.info('[warning] ${JSON.stringify(message)}');
    }
    function info(message){
      console.info('[error] ${JSON.stringify(message)}');
    }

  }
})();