function updateTimer(params) {
	const now = new Date();
	const timer = document.getElementById("timer");
	timer.textcontent = now.toLocaleString();
}
setInterval = (updateTimer, 1000);