// let app=angular.module('my-app',[]);
// app.controller('my-ctrl', ($scope,$http)=>{
//     $http.get('dta.json').then(function(response) {
//         $scope.flights = response.data;
//      })
//     //  .catch(function() {
//     //     console.log("error")
//     //   });
//      $scope.name="sanket"
// });     

//http://localhost:8000/api/v1/

var app = angular.module('my-app', ['ngResource']);
    app.controller('my-ctrl',
        function ($scope, $http) {

            var request = {
                method: 'get',
                url: 'data.json',
                dataType: 'json',
                contentType: "application/json",
            };

            $http(request)
                .then(function (response) {
                    $scope.flights = response.data;
                })

                // .catch(function () {

                // });
        });