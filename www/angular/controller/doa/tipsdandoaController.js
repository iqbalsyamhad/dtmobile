dreamtour.controller('tipsdanDoaController', ['$scope', '$http','cfpLoadingBar', 
  function tipsdanDoaController($scope, $http, cfpLoadingBar) {
    $scope.doas = [{name : "Tips Perjalanan Haji dan Umrah", images : ['image/Tips Perjalanan Haji dan Umrah/1.jpg']},
                    {name : "Doa Safar", images : ['image/Doa Safar/safar.jpg']},
                    {name : "Doa ketika Tiba di Tempat Tujuan", images : ['image/Doa ketika Tiba di Tempat Tujuan/doasampaitujuan.jpg']},
                ];
     $scope.doa = parseInt(parameter.id);
}]);
