(function() {

  angular
    .module('TogetherAlone')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedLocation : '',
      };
  }

})();