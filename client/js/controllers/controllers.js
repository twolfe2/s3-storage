'use strict';



var app = angular.module('myApp');


app.controller('mainCtrl', function() {
  console.log('hello!');
});



app.controller('uploadCtrl', function($scope, Upload) {
  console.log('uploadCtrl!');

  $scope.submit = () => {
    console.log('submit');
    console.log('$scope.file:',$scope.photo);

    Upload.upload({
      url: '/api/files',
      data: {photo: $scope.photo, name: 'thomas'}
    }).then((resp) => {
      console.log(resp.status);
    });
  };
});