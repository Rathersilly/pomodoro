$(document).ready(function(){
	//var pomodoro_time
	var pomodoro = 25*60
	var time_setting = pomodoro
	timer = new Timer(time_setting)
	$("#play_button").click(function(){
		timer.start();
		console.log("hihi");

	});

	$("#pause_button").click(function(){

	});
	$("#stop_button").click(function(){

	});
	$("#reset_button").click(function(){

	});

});



class Timer {
	constructor(initial_time) {
		this.time = initial_time;
		this.running = false;
		console.log(this.time);
	}

	start() {
		this.running = true;
		setInterval(this.show, 1000);
	}

	stop() {

	}

	show() {
//k		if (this.running === true) {
//k			this.time -= 1;
//k		};
		console.log(this.time);	
		var minutes = Math.floor(this.time / 60);
		var seconds = this.time % 60;
		//$("#timer").text(minutes + ":" + seconds);
		$("#timer").text(this.time);
	}
};

		





