//Global App Variable
var app = angular.module('mainModule', []);

app.run(function($rootScope){
	$rootScope.tempUrl="";
	$rootScope.pressureUrl="";
	$rootScope.windUrl=""; 
	$rootScope.humidityUrl="";
});

//EventController
app.controller('EventCtrl',function($rootScope,$scope){ 
	$scope.change = function(){
	$rootScope.tempUrl="http://localhost:9191/temp/accessWeather?city=" +$scope.city +"&country=" + $scope.country;
	$rootScope.pressureUrl="http://localhost:9191/pressure/accessWeather?city=" +$scope.city +"&country=" + $scope.country;
	$rootScope.windUrl="http://localhost:9191/wind/accessWeather?city=" +$scope.city +"&country=" + $scope.country;
	$rootScope.humidityUrl="http://localhost:9191/humid/accessWeather?city=" +$scope.city +"&country=" + $scope.country;
	$rootScope.$broadcast("myEvent", "broadcast");
	}	
});

// Set up a controller and define a model
app.controller('tempCtrl', function($rootScope,$scope,$http) {
	$scope.$on("myEvent", function (event, args) {
		//alert("tempCtrl");
		$scope.temp = {};	
		$http.get($rootScope.tempUrl)
		.success(function (data)
		{       
			angular.element('#temperature').scope().temp = data;
			angular.element('#temperature').scope().$apply();
		});	 
	});	
});

app.controller('pressureCtrl', function($rootScope,$scope,$http) {
	$scope.$on("myEvent", function (event, args) {
		//alert("pressureCtrl");
		$scope.pressure = {};	
		$http.get($rootScope.pressureUrl)
		.success(function (data) {
				//alert("pressure");
				angular.element('#pressure').scope().pressure = data;
				angular.element('#pressure').scope().$apply();
				});
	});	
});

app.controller('windCtrl', function($rootScope,$scope,$http) {
	$scope.$on("myEvent", function (event, args) {
		//alert("windCtrl");
		$scope.wind = {};	
		$http.get($rootScope.windUrl)
		.success(function (data) {
				//alert("wind");
				angular.element('#wind').scope().wind = data;
				angular.element('#wind').scope().$apply();
				});
	});	
});

app.controller('humidCtrl', function($rootScope,$scope,$http) {
	$scope.$on("myEvent", function (event, args) {
		//alert("humidCtrl");
		$scope.humid = {};	
		$http.get($rootScope.humidityUrl)
		.success(function (data) {
				angular.element('#humiditiy').scope().humid = data;
				angular.element('#humiditiy').scope().$apply();
				});
	});	
});
