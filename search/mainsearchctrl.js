var mainapp = angular.module('mainapp', []);
mainapp.controller('mainctrl', function($scope) {
    $scope.item = [{ name: 'tea' }, { name: 'biryani' }]
});
mainapp.filter('searchFor', function() {
    return function(arr, searchdata) {
        if (!searchdata) {
            return arr;
        }
        var data = [];
        angular.forEach(arr, function(s) {
            if (s.name.toLowerCase().indexOf(searchdata.toLowerCase()) > -1) {
                data.push(s);
            }
        });
        if (data.length) {
            return data;
        } else {
            alert("NO data found");
        }
    }
})