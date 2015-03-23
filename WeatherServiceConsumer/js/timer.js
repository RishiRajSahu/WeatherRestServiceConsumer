    var time = {
	time.totalTime = 10800;
	}
	
	function timer(){
	alert(time.totalTime);
		startCounter(time.totalTime);
    }

function startCounter(time){
	$("#showTime").html( "<b>Time Left : "+convertTime(time)+"</b>");
	if(time>0)
		setTimeout(function(){startCounter(time-1)},1000);
	else{
		alert("Time out !!! Your answers have been saved successfully");
	}
}

	function convertTime(time){
	return showMin(time)+":"+showSec(time);
}


function showMin(time){
	var min = "";
//	time = time%3600;
	if((time/60)>9)
		min = parseInt(time/60);
	else
		min = "0"+parseInt(time/60);
	return min;
}

function showSec(time){
	var sec="";
	if((time%60)>9)
		sec = time%60;
	else
		sec = "0"+time%60;
	return sec;	
}