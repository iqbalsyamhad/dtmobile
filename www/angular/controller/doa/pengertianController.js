dreamtour.controller('pengertianController', ['$scope', '$http','cfpLoadingBar', 
  function pengertianController($scope, $http, cfpLoadingBar) {
    $scope.doas = [{name : "Definisi Ibadah Haji dan Umrah", images : ['image/Definisi Ibadah Haji dan Umrah/definisihajiumroh.jpg']},
    				{name : "Hukum melaksanakan Ibadah Haji dan Umrah", images : ['image/Definisi Ibadah Haji dan Umrah/hukumhajiumroh.jpg']},
                    {name : "Syarat Haji dan Umrah", images : ['image/Hukum dalam Pelaksanaan Haji Umrah Syarat Haji dan Umrah/hukumdansyarathajiumroh.jpg']},
                    {name : "Rukun Haji dan Umrah", images : ['image/Rukun Haji dan Umrah/rukunhajiumrah.jpg']},
                    {name : "Wajib Haji dan Umrah", images : ['image/WajibHaji dan Umrah/wajibhajiumrah.jpg']},
                    {name : "Sunah Sunah Haji dan Umrah", images : ['image/SunahSunah Haji dan Umrah/Sunnahsunnahhajiumroh.jpg']},
                    {name : "Larangan dalam Haji dan Umrah", images : ['image/Larangan dalam Haji dan Umrah/laranganhajiumroh.jpg']},
                    {name : "Pengertian Beberapa Istilah dalam Haji dan Umrah", images : ['image/Pengertian Beberapa Istilah dalam Haji dan Umrah/pengertianistilahhajiumroh.jpg']},
                ];
    $scope.doa = parseInt(parameter.id);
}]);
