dreamtour.controller('sholatjenazahController', ['$scope', '$http','cfpLoadingBar', 
  function sholatjenazahController($scope, $http, cfpLoadingBar) {
    $scope.doas = [{name : "Niat Shalat Jenazah", images : ['image/Niat Shalat Jenazah/niatshalatjenazah.jpg']},
                    {name : "Shalat Jenazah dengan 4 Takbir", images : ['image/Shalat Jenazah dengan 4 Takbir/shalatjenazah4takbir.jpg']},
                ];
     $scope.doa = parseInt(parameter.id);
}]);
