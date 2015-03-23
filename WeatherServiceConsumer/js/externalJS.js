var app = angular.module('mainModule', []);
// Set up a controller and define a model
app.controller('tempCtrl', function($scope, $http) {
    $scope.temp = {};	
	$http.get("http://localhost:9191/temp/accessWeather?city=bikaner&country=in")
  .success(function (data) {
			//alert("temp");
            angular.element('#temperature').scope().temp = data;
            angular.element('#temperature').scope().$apply();
			});
});

app.controller('pressureCtrl', function($scope, $http) {
    $scope.pressure = {};	
	$http.get("http://localhost:9191/pressure/accessWeather?city=udaipur&country=in")
  .success(function (data) {
			//alert("pressure");
            angular.element('#pressure').scope().pressure = data;
            angular.element('#pressure').scope().$apply();
			});
});

app.controller('windCtrl', function($scope, $http) {
    $scope.wind = {};	
	$http.get("http://localhost:9191/wind/accessWeather?city=udaipur&country=in")
  .success(function (data) {
			//alert("wind");
            angular.element('#wind').scope().wind = data;
            angular.element('#wind').scope().$apply();
			});
});

app.controller('humidCtrl', function($scope, $http) {
    $scope.humid = {};	
	$http.get("http://localhost:9191/humid/accessWeather?city=udaipur&country=in")
  .success(function (data) {
			//alert("humiditiy");
            angular.element('#humiditiy').scope().humid = data;
            angular.element('#humiditiy').scope().$apply();
			});
});



$.ajax({
  type: "GET",
  dataType:"json",
  url: "http://api.openweathermap.org/data/2.5/find?q=London&units=metric",
 success: function(data){
		//alert("output : " + "read successfully");
		var i;
		var len = data.count;
		var txt = "";

		if(len > 0){
			for (i = 0; i<len; i++){

				$("#t01 tbody").append("<tr><td>"+data.list[i].id+"</td><td>"+data.list[i].name+"</td><td>"+data.list[i].coord.lon+"</td><td>"+data.list[i].coord.lat+"</td><td>"+data.list[i].main.temp);
				$("#t02 tbody").append("<tr><td>"+data.list[i].main.temp_min+"</td><td>"+data.list[i].main.temp_max+"</td><td>"+data.list[i].main.pressure+"</td><td>"+data.list[i].main.sea_level+"</td><td>"+data.list[i].main.grnd_level);
				$("#t04 tbody").append("<tr><td>"+data.list[i].clouds.all+"</td><td>"+data.list[i].weather[0].id+"</td><td>"+data.list[i].weather[0].main+"</td><td>"+data.list[i].weather[0].description+"</td><td>"+data.list[i].weather[0].icon);
				$("#t03 tbody").append("<tr><td>"+data.list[i].main.humidity+"</td><td>"+data.list[i].dt+"</td><td>"+data.list[i].wind.speed+"</td><td>"+data.list[i].wind.deg+"</td><td>"+data.list[i].sys.country);
			}
		}
	
	}
});
