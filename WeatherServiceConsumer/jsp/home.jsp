<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Weather Switcher</title>
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
		<script type="text/javascript" src="../js/externalJS.js"></script>
	</head>
	<body  ng-app="mainModule">
	<div id="demo-top-bar">
	<div id="demo-bar-inside">
	<h2 id="demo-bar-badge" style=" color: white; font-size: 20px; "> REST WEATHER API</h2>
	<div id="demo-bar-buttons"></div>
	</div>
	</div>
		<div id="page-wrap">
		<div class="header header-partly-cloudy">
		<!-- Change the second class above to change the header graphic -->
		</div>
			<div id="main-content">
		<!-- Adding input from user for country and city -->

			<div id="loc" ng-controller="locCtrl" style=" margin: 0px; width: 1000px; height: 25px; font-size: 18px; font-style: bold;">
			  <form>
			       <style scoped>
						.button-xsmall {
						font-size:70%;
						}
			       </style>
			        Country Name: <input type="text" name ="Country" ng-model="country">
			        &nbsp; &nbsp;
			        City Name: <input type="text" name="City" ng-model="city">
			        <button type="button"  class="button-xsmall pure-button" ng-click="change()">Get Weather Update</button>
			 </form>
			</div>
			
		<!-- Weather condition found from country and city -ends here -->
			<div id="left-upper"   ng-controller="tempCtrl">
			<div style=" float: left;  margin-left: 100px; margin-top: 18px;    margin-bottom: 0;">
				<img src="../img/temp.jpg"  alt="temperature" height = "35" width= "25" style="">
			</div>
			<div style=" float: left; ">
				<p>Temperature</p>
			</div>
			<table id = "temperature" >
				<thead>
				</thead>
					<tr id = "odd">
						<td>Temperature</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{temp.main.temp}}</td>
					</tr>
					<tr id = "even">
						<td>Temperature - min</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{temp.main.temp_min}}</td>
					</tr>
					<tr id = "odd">
						<td>Temperature - Max</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{temp.main.temp_max}}</td>
					</tr>
				<tbody>
				</tbody>
			</table>				
			</div>	
			<div id="right-upper"   ng-controller="pressureCtrl">
			<div style=" float: left;  margin-left: 100px; margin-top: 18px; margin-bottom: 0;">
				<img src="../img/pressure.png"  alt="temperature" height = "35" width= "25" style="">
			</div>
			<div style=" float: left; ">
				<p>Pressure</p>
			</div>
			<table id = "pressure">
				<thead>
				</thead>
				<tbody>
					<tr id = "odd">
						<td>Pressure</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{pressure.main.pressure}}</td>
					</tr>
					<tr id = "even">
						<td>Sea-Level</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{pressure.main.sea_level}}</td>
					</tr>
					<tr id = "odd">
						<td>Ground-Level</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{pressure.main.grnd_level}}</td>
					</tr>
				</tbody>
			</table>			
			</div>		
			<div id="left-lower"   ng-controller="windCtrl">
			<div style=" float: left;  margin-left: 100px; margin-top: 18px;   margin-right: 5px;     margin-bottom: 0;"><img src="../img/wind.png"  alt="temperature" height = "35" width= "25" style=""></div>
			<div style=" float: left; "><p>Wind-Speed</p></div>
				<table id = "wind" >
					<thead>
					</thead>
					<tbody>
					<tr id = "odd">
						<td>speed</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{wind.wind.speed}}</td>
					</tr>
					<tr id = "even">
						<td>direction(in degrees)</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{wind.wind.deg}}</td>
					</tr>
					</tbody>
				</table>			
			</div>		
				<div id="right-lower"  ng-controller="humidCtrl">
					<div style=" float: left;  margin-left: 100px; margin-top: 18px;    margin-right: 5px; margin-bottom: 0;">
						<img src="../img/humidity.png"temperature" height = "35" width= "25" style="">
					</div>
					<div style=" float: left; "><p>Humidity</p></div>
					<table id = "humiditiy">
						<thead>
						</thead>
						<tbody>
							<tr id = "odd">
								<td>Humidity</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{humid.main.humidity}}</td>
							</tr>
							<tr id = "even">
								<td>clouds</td><td>&nbsp;&nbsp;&nbsp;</td><td>{{humid.clouds.all}}</td>
							</tr>
						</tbody>
					</table>			
				</div>
				<div style="clear: both;"></div>		
			</div>
			<div style="margin: 0px;">
			<img src="../img/footer.png"  alt="footer" height = "55" width= "1200" style="
			border-bottom-left-radius: 54px;
			border-bottom-right-radius: 54px;">
			</div>
		</div>
	</body>
</html>