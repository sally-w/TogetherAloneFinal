(function() {

  angular
    .module('TogetherAlone')
    .controller('locationsCtrl', locationsCtrl);

  locationsCtrl.$inject = ['$scope', 'locationsData', 'SelectedData'];

  function locationsCtrl($scope, locationsData, SelectedData) {
    console.log(window.location);    
    
    var vm = this;
    vm.content = "Locations Data";
    vm.selectedLocation = " ";
    
    if(SelectedData.selectedLocation !== null){
      vm.selectedLocation = SelectedData.selectedLocation;
    }
    
    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getlocationsData = function() {
      locationsData.getLocations()
        .then(function(response) {
          vm.locations = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedLocation = null;
    }
    
    //saved Location
    $scope.$watch(
      function(){
        return vm.selectedLocation;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.Location !== oldValue.Location){
          SelectedData.selectedLocation = newValue;
        } 
      }, 
      true
    );    

    //call services
    vm.getlocationsData();
  }
})();