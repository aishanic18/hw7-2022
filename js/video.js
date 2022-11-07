var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video = document.querySelector("#player1")
video.autoplay = false;
video.loop = false;
console.log("Auto play is set to" + video.autoplay);
console.log("Loop is set to " + video.loop)
});


document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();
document.getElementById("volume").textContent = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.90;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted == false)
	{
		video.muted = true;
		document.getElementById("mute").textContent = "Unmute";
	}
	else
	{
		video.muted = false;
		document.getElementById("mute").textContent = "Mute";
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className += " oldSchool"
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime <= (video.duration - 10))
	{
		video.currentTime += 10;
		console.log(video.currentTime);	
	}
	else
	{
		video.currentTime = 0;
		console.log(video.currentTime);	
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100 ;
	document.getElementById("volume").textContent = video.volume * 100 + "%";
});











