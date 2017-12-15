(function() {

  angular
    .module('TogetherAlone')
    .service('LocationsData', locationsData);

  locationsData.$inject = ['$http'];
  function locationsData ($http) {
      var getLocations = function(){
          return $http.get('/api/locationsdata');
      }

      return {
          getLocations : getLocations,
      };
  }

})();