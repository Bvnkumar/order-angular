var mainapp=angular.module('mainapp',[]);
mainapp.controller('mainctrl',function($scope){
	$scope.name="narendra";
	$scope.items=[{item:"soap",brand:"Santoor",price:20,active:true},{item:"soap",brand:"Medmix",price:30,active:false},{item:"soap",brand:"Lime",price:10,active:false}]
    $scope.cart=function(){
       var total=0;
    	$scope.total=angular.forEach($scope.items,function(s){
           if(s.active){
    		 total+=s.price;
           }
    	});
    	return total;
    }
    $scope.toggle=function(s){
    	s.active=!s.active;
    	
    }
});