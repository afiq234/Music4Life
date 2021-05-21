
// animation slide

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

// var icon1 = document.getElementsByClassName('icon-play1');
// var icon2 = document.getElementsByClassName('icon-play2');
// var icon3 = document.getElementsByClassName('icon-play3');
// var icon4 = document.getElementsByClassName('icon-play4');
// var icon5 = document.getElementsByClassName('icon-play5');

// var song5 = document.getElementById("song5");
// var song6 = document.getElementById("song6");
// var song7 = document.getElementById("song7");
// var song8 = document.getElementById("song8");
// var song9 = document.getElementById("song9");

// icon1.onclick = function(){
// 	if(song5.paused){
// 		song5.play();
// 		icon1.src = "/Web Dev Final Assesment/home/img/pause.png";
// 	}else{
// 		song5.pause();
// 		icon1.src = "/Web Dev Final Assesment/home/img/play.png";
// 	}
// }

// icon2.onclick = function(){
// 	if(song6.paused){
// 		song6.play();
// 		$('#song6').css('visibility', 'visible');
// 		$('.img6').css('visibility', 'visible');
// 		icon2.src = "/Web Dev Final Assesment/home/img/pause.png";
// 	}else{
// 		song6.pause();
// 		$('.img6').css('visibility', 'hidden');
// 		$('#song6').css('visibility', 'hidden');
// 		icon2.src = "/Web Dev Final Assesment/home/img/play.png";
// 	}
// }

// icon3.onclick = function(){
// 	if(song7.paused){
// 		song7.play();
// 		$('#song7').css('visibility', 'visible');
// 		$('.img7').css('visibility', 'visible');
// 		icon3.src = "/Web Dev Final Assesment/home/img/pause.png";
// 	}else{
// 		song7.pause();
// 		$('.img7').css('visibility', 'hidden');
// 		$('#song7').css('visibility', 'hidden');
// 		icon3.src = "/Web Dev Final Assesment/home/img/play.png";
// 	}
// }

// icon4.onclick = function(){
// 	if(song8.paused){
// 		song8.play();
// 		$('#song8').css('visibility', 'visible');
// 		$('.img8').css('visibility', 'visible');
// 		icon4.src = "/Web Dev Final Assesment/home/img/pause.png";
// 	}else{
// 		song8.pause();
// 		$('.img8').css('visibility', 'hidden');
// 		$('#song8').css('visibility', 'hidden');
// 		icon4.src = "/Web Dev Final Assesment/home/img/play.png";
// 	}
// }

// icon5.onclick = function(){
// 	if(song9.paused){
// 		song9.play();
// 		$('#song9').css('visibility', 'visible');
// 		$('.img9').css('visibility', 'visible');
// 		icon5.src = "/Web Dev Final Assesment/home/img/pause.png";
// 	}else{
// 		song9.pause();
// 		$('.img9').css('visibility', 'hidden');
// 		$('#song9').css('visibility', 'hidden');
// 		icon5.src = "/Web Dev Final Assesment/home/img/play.png";
// 	}
// }