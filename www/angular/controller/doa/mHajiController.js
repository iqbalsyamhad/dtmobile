dreamtour.controller('mHajiController', ['$scope', '$http','cfpLoadingBar', 
  function mHajiController($scope, $http, cfpLoadingBar) {
    $scope.rukuns = [{name : "Niat Ihram", images : ['image/MANASIK HAJI/Niat Ihram HAJI/manasikhajiniatihram.jpg']},
                    {name : "Wuquf di Arafah", images : ['image/MANASIK HAJI/Wuquf di Arafah HAJI/manasikhajiwukuf.jpg']},
                    {name : "Thawaf", images : ['image/MANASIK HAJI/Thawaf HAJI/manasikhajithawaf.jpg']},
                    {name : "Sa'i", images : ['image/MANASIK HAJI/Sai HAJI/manasikhajisai.jpg']},
                    {name : "Tahallul", images : ['image/MANASIK HAJI/Tahallul HAJI/manasikhajitahallul.jpg']},
                    {name : "Tertib / Tartib (berurutan)", images : ['image/MANASIK HAJI/TertibTartib HAJI/manasikhajitatib.jpg']},
                ];

     $scope.wajibs = [{name : "Niat Ihram dari Miqat", images : ['image/MANASIK HAJI/Niat Ihram dari Miqat HAJI/manasikhajiniatihramdarimiqat.jpg']},
                    {name : "Bermalam di Muzdalifah", images : ['image/MANASIK HAJI/Mabit  Bermalam di Muzdalifah HAJI/manasikhajimabidmuzdalifah.jpg']},
                    {name : "Melempar Jumrah Aqabah", images : ['image/MANASIK HAJI/Melempar Jumrah Aqabah HAJI/manasikhajijumrohaqobah.jpg']},
                    {name : "Bermalam di Mina", images : ['image/MANASIK HAJI/Mabit  Bermalam di Mina HAJI/manasikhajibermalammina.jpg']},
                    {name : "Melempar 3 Jumrah", images : ['image/MANASIK HAJI/Melempar 3 Jumrah HAJI/manasikhajilempar3jumroh.jpg']},
                    {name : "Thawaf Wada", images : ['image/MANASIK HAJI/Thawaf Wada HAJI/manasikhajithawafwada.jpg']},
                    {name : "Menjauhi Segala Larangan dalam Masa Ihram", images : ['image/MANASIK HAJI/Menjauhi Segala Larangan dalam Masa Ihram HAJI/manasikhajimenjauhilarangan.jpg']},
                ];

     $scope.sunnahs = [{name : "Sunah-Sunah Haji", images : ['image/SunahSunah Haji/sunnahhaji.jpg']},
                ];
     $scope.doa = parseInt(parameter.id);
}]);