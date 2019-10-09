dreamtour.controller('SliderController', ['$scope', '$http','cfpLoadingBar', 
  function SliderController($scope, $http, cfpLoadingBar) 
{
    $scope.sliders = {};
    // Get Packages
    $http(
    {
        url     : "https://dreamtour.co/mobile/package/getSlider",
        method  : "GET",
    })
    .success(function(data)
    {
        $scope.sliders = data;
        //console.log($scope.packages);
    })
    .error(function (error)
    {
        console.log(error);
    });


}]);
