document.addEventListener("DOMContentLoaded", function() {

	// // Photo Filter
	// let btns = document.querySelectorAll('#portfolio .button-group button');

	// btns.forEach(function(btn) {
	// 	btn.addEventListener('click', function(e) {

	// 		document.querySelectorAll('#portfolio .button-group button').forEach(function(btn) {
	// 			btn.classList.remove('active');
	// 		});

	// 		e.target.classList.add('active');

	// 		let selector = e.target.getAttribute('data-filter');

	// 		document.querySelector('#portfolio .grid').isotope({
	// 			filter: selector
	// 		});

	// 		return false;
	// 	});
	// });

	// // Photo Popup
	// document.querySelector('#portfolio .button-group #btn1').click();

	// let popupLinks = document.querySelectorAll('#portfolio .grid .test-popup-link');

	// popupLinks.forEach(function(link) {
	// 	link.addEventListener('click', function() {
	// 		magnificPopup({
	// 			type: 'image',
	// 			gallery: {
	// 				enabled: true
	// 			}
	// 		});
	// 	});
	// });


	// // Owl Carousel
	// let owl = document.querySelector('#about-me .carousel-items .owl-carousel');
	// if (owl) {
	// 	$(owl).owlCarousel({
	// 		loop: true,
	// 		dots: true,
	// 		autoplay: true,
	// 		responsive: {
	// 			0: {
	// 				items: 1
	// 			},
	// 			544: {
	// 				items: 2
	// 			}
	// 		}
	// 	});
	// }

	// AOS Instance
	AOS.init();

	// Navbar
	let header = document.querySelector('#header');
	if (header) {
		let nav_offset_top = header.offsetHeight - 600;
		function navbarFixed() {
			window.addEventListener('scroll', function() {
				let scroll = window.pageYOffset;
				if (scroll >= nav_offset_top) {
					header.querySelector('.navigation').classList.add('topbar');
				} else {
					header.querySelector('.navigation').classList.remove('topbar');
				}
			});
		}
		navbarFixed();
	}

});
