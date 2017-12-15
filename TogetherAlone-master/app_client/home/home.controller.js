(function() {

  angular
    .module('TogetherAlone')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'SelectedData'];

  function homeCtrl($scope, SelectedData) {
    var vm = this;
    console.log(window.location);
    
    vm.content = "TogetherAlone";
    
    vm.selectedLocation = "";
    
    //check selected Departure
    if(SelectedData.selectedLocation !== null){
      vm.selectedLocation = SelectedData.selectedLocation;
    }
  }
})();