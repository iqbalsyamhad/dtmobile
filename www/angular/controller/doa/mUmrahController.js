dreamtour.controller('mUmrahController', ['$scope', '$http','cfpLoadingBar', 
  function mUmrahController($scope, $http, cfpLoadingBar) {
    $scope.rukuns = [{name : "Niat Ihram", images : ['image/MANASIK UMRAH/Niat Ihram/manasikumrahniatihram.jpg']},
                    {name : "Thawaf", images : ['image/MANASIK UMRAH/Thawaf/manasikumrahthawaf.jpg']},
                    {name : "Sa'i", images : ['image/MANASIK UMRAH/Sai/manasikumrahsai.jpg']},
                    {name : "Tahallul", images : ['image/MANASIK UMRAH/Tahallul/manasikumrahtahallul.jpg']},
                    {name : "Tertib / Tartib (berurutan)", images : ['image/MANASIK UMRAH/TertibTartib/manasikumrahtatib.jpg']},
                ];

    $scope.wajibs = [{name : "Niat Ihram dari Miqat", images : ['image/MANASIK UMRAH/Niat Ihram dari Miqat/manasikumrahniatihrammiqat.jpg']},
                    {name : "Menjauhi Segala Larangan dalam Masa Ihram", images : ['image/MANASIK UMRAH/Menjauhi Segala Larangan dalam Masa Ihram/manasikumrahmenjauhilarangan.jpg']},
                ];

    $scope.sunnahs = [{name : "Sunnah-Sunnah Umrah", images : ['image/MANASIK UMRAH/SunahSunah Umrah/sunnahumrah.jpg']},
                ];

    $scope.doas = [{name : "Niat", images : ['image/DOADOA KETIKA UMRAH/Niat/doadoaniat.jpg']},
                    {name : "Kalimat Talbiyah", images : ['image/DOADOA KETIKA UMRAH/Kalimat Talbiyah/doadoakalimattalbiyah.jpg']},
                    {name : "Doa ketika Memasuki Kota Makkah", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Memasuki Kota Makkah/doamasukmakkah.jpg']},
                    {name : "Doa ketika Memasuki Masjidil Haram", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Memasuki Masjidil Haram/doadoamemasukimasjidilharam.jpg']},
                    {name : "Doa ketika Melihat Ka'bah", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Melihat Kabah/doamelihatkabah.jpg']},
                    {name : "Doa ketika Thawaf", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf/doadoathawaf.jpg']},
                    {name : "Doa Thawaf putaran 1", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf putaran 1/doathawafputaran1.jpg']},
                    {name : "Doa Thawaf putaran 2", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf putaran 2/doathawafputaran2.jpg']},
                    {name : "Doa Thawaf putaran 3", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf putaran 3/doathawafputaran3.jpg']},
                    {name : "Doa Thawaf putaran 4", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf putaran 4/doathawafputaran4.jpg']},
                    {name : "Doa Thawaf putaran 5", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf putaran 5/doathawafputaran5.jpg']},
                    {name : "Doa Thawaf putaran 6", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf putaran 6/doathawafputaran6.jpg']},
                    {name : "Doa Thawaf putaran 7", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa thawaf putaran 7/doathawafputaran7.jpg']},
                    {name : "Doa setelah selesai Thawaf", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Thawaf/Doa selesai thawaf/doaselesaithawaf.jpg']},

                    {name : "Shalat Sunah Thawaf", images : ['image/DOADOA KETIKA UMRAH/Shalat Sunah Thawaf/doasholatsunnahthawaf.jpg']},
                    {name : "Doa ketika Minum Air Zam-Zam", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Minum Air ZamZam/doaminumzamzam.jpg']},

                    {name : "Doa Ketika Sa'i", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa ketika sai/doaketikasai.jpg']},
                    {name : "Doa Sa'i perjalanan 1", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa Sai Perjalanan 1/doasaiputaran1.jpg']},
                    {name : "Doa Sa'i perjalanan 2", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa Sai Perjalanan 2/doasaiputaran2.jpg']},
                    {name : "Doa Sa'i perjalanan 3", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa Sai Perjalanan 3/doasaiperjalanan3.jpg']},
                    {name : "Doa Sa'i perjalanan 4", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa Sai Perjalanan 4/doasaiperjalanan4.jpg']},
                    {name : "Doa Sa'i perjalanan 5", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa Sai Perjalanan 5/doasaiperjalanan5.jpg']},
                    {name : "Doa Sa'i perjalanan 6", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa Sai Perjalanan 6/doasaiperjalanan6.jpg']},
                    {name : "Doa Sa'i perjalanan 7", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa Sai Perjalanan 7/doasaiperjalanan7.jpg']},
                    {name : "Doa di bukit Marwah selesai Sa'i", images : ['image/DOADOA KETIKA UMRAH/Doa Ketika Sai/Doa dibukit marwah selesai sai/doasaimarwahselesai.jpg']},
                    
                    {name : "Doa ketika Tahallul", images : ['image/DOADOA KETIKA UMRAH/Doa ketika Tahallul/DoaketikaTahallul.jpg']},
                    {name : "Doa Thawaf Wada", images : ['image/DOADOA KETIKA UMRAH/Doa Thawaf Wada/DoaThawafWada.jpg']},
                ];
    
    $scope.doa = parseInt(parameter.id);
}]);