var myApp = angular.module('crudApp', []);

myApp.directive('sirah', function () {
  return{
    restrict :'E',
    templateUrl : 'sirah.html'
  }
});
myApp.directive('data', function () {
  return{
    restrict :'E',
    templateUrl : 'data.html',
    controller : 'tampil_data'
  }
});
myApp.directive('tambahData', function () {
  return{
    restrict :'E',
    templateUrl : 'modal_add_data.html',
    controller: 'tambah_data'
  }
});
myApp.directive('editData', function () {
  return{
    restrict :'E',
    templateUrl : 'modal_edit_data.html'
  }
});
//MY config
myApp.factory('crud', function($http) {
    var baseUrl = 'http://localhost/parak_web/tugas_kuis/';
    return {
        getAll: function(data_src) {
            return $http.get(baseUrl+data_src);
        },
        getId: function  (data_src, id){
            return $http.get(baseUrl+data_src+'?id='+id);
        },
        create: function (data_src, data){
            return $http.post(baseUrl+data_src, data,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        update: function (data_src, data){
            return $http.post(baseUrl+data_src, data,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        delete: function  (data_src, id){
            return $http.get(baseUrl+data_src+'?id='+id);
        }
    };
});
myApp.controller('tampil_data', function ($scope, crud) {
  crud.getAll('tampil_data.php').success(function (hasil) {
    $scope.mahasiswa = hasil;
  })

  $scope.delete_data = function (id) {
    crud.delete('delete_data.php', id).success(function (hasil) {
      alert(hasil);
      window.location.reload();
    })
  }
  $scope.edit_data = function (edit_id) {
    crud.getId('data_get_id.php', edit_id).success(function (hasil) {
      $scope.edit_mhs = hasil;
    })
  }
})
// tambah_data
myApp.controller('tambah_data', function ($scope, crud) {
  $scope.tambah_data = function () {
    // ambil data
    data = {
      nama : $scope.input.nama,
      alamat : $scope.input.alamat
    }
    //post data
    crud.create('add_data.php', data).success(function (hasil) {
      alert(hasil);
      window.location.reload();
    })
  }
})
