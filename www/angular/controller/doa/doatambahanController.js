dreamtour.controller('doatambahanController', ['$scope', '$http','cfpLoadingBar', 
  function doatambahanController($scope, $http, cfpLoadingBar) {
    $scope.doas = [{name : "Doa ketika memasuki kota Madinah", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoaketikamemasukikotaMadinah.jpg']},
                    {name : "Doa ketika memasuki Masjid Nabawi", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoaketikamemasukiMasjidNabawi.jpg']},
                    {name : "Doa salam ketika berada di Makam Rasulullah SAW", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoasalamketikaberadadiMakamRasulullahSAW.jpg']},
                    {name : "Doa salam kepada Sayyidina Abu Bakar As-Shiddiq RA", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoasalamkepadaSayyidinaAbuBakarAs-ShiddiqRA..jpg']},
                    {name : "Doa salam kepada Sayyidina Umar bin Khatab RA", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoasalamkepadaSayyidinaUmarbinKhatabRA.jpg']},
                    {name : "Doa ketika di Raudah", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoaketikadiRaudah.jpg']},
                    {name : "Doa salam ketika Ziarah di Makam Baqi", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoasalamketikaZiarahdiMakamBaqi.jpg']},
                    {name : "Doa salam kepada Sayyidina Utsman bin 'Affan RA di Makam Baqi", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoasalamkepadaSayyidinaUtsmanbinAffanRA..jpg']},
                    {name : "Doa salam kepada Sayyidina Hamzah RA dan Mus'ab bin 'Umair di Uhud", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoasalamkepadaSayyidinaHamzahRA.danMusab.jpg']},
                    {name : "Doa salam kepada para Syuhada di Uhud", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoasalamkepadaparaSyuhadadiUhud.jpg']},
                    {name : "Doa ketika meninggalkan kota Madinah", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Madinah/DoaketikameninggalkankotaMadinah.jpg']},

                    {name : "Doa ketika memasuki kota Makkah", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Makkah/DoaketikamemasukikotaMakkah.jpg']},
                    {name : "Doa ketika memasuki Masjidil Haram", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Makkah/DoaketikamemasukiMasjidilHaram.jpg']},
                    {name : "Doa ketika melihat Ka'bah", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Makkah/DoaketikamelihatKabah.jpg']},
                    {name : "Doa melintasi Maqam Ibrahim", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Makkah/DoamelintasiMaqamIbrahim.jpg']},
                    {name : "Doa ketika minum Air Zam-Zam ", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Makkah/DoaketikaminumAirZam-Zam.jpg']},
                    {name : "Doa sesudah Shalat Sunah Mutlaq di dalam Hijr Isma'il", images : ['image/DOADOA TAMBAHAN/Doa Ziarah di Kota Makkah/DoasesudahShalatSunahMutlaqdidalamHijrIsmail.jpg']},

                    {name : "Doa Setelah Kembali Pulang dari Perjalanan", images : ['image/DOADOA TAMBAHAN/Doa Setelah Kembali Pulang dari Perjalanan/DoaSetelahKembaliPulangdariPerjalanan.jpg']},
                ];
     $scope.doa = parseInt(parameter.id);
}]);
