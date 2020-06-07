var info = document.getElementById('info')
var aboutSection = document.getElementById('about-section')
var slideIndex = 0;
carousel();

//function to create slideshow carousel for actors
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  //cycle through list of actors and display 
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

//load new audio
var audio = new Audio('images/track.mp3')


//play and pause audio 
function playAudio(){
	audio.play()
	console.log("play audio")
}

function pauseAudio(){
	audio.pause()
	console.log("pause audio")
}

//add click behavior to the info icon to scroll to the about-section in html
info.onclick = () => {
  aboutSection.scrollIntoView();
}