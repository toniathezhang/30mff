var info = document.getElementById('info')
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}


var audio = new Audio('images/track.mp3')

function playAudio(){
	audio.play()
	console.log("play audio")
}

function pauseAudio(){
	audio.pause()
	console.log("pause audio")
}

info.onclick = () => {
  window.scrollTo(0, 740)
  UpperBody.style.opacity = 1
}