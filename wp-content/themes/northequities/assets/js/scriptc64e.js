(function ($) {

	$(document).ready(function () {

		const hamburger = document.querySelector(".hamburger");
		const mobileNav = document.querySelector(".mobile-nav");
		const closeMeny = document.querySelector(".close-menu");
		hamburger.addEventListener("click", () => {
			mobileNav.classList.toggle("full-open");
			hamburger.classList.toggle("toggle");
		});
		closeMeny.addEventListener("click", () => {
			mobileNav.classList.toggle("full-open");
			hamburger.classList.toggle("toggle");
		});

		const project_per_page = 3;
		let project_count = 6;
		refresh_projects(project_count);
		let $load_more_btn = $('.projects-load-more');
		$load_more_btn.on('click', function () {
			project_count += project_per_page;
			refresh_projects(project_count);
		});


		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 100) {
				$(".mobile-nav").addClass("light");
			} else {
				$(".mobile-nav").removeClass("light");
			}
		});

		$(window).scroll(function () {
			$('.animate__animated').each(function () {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 600) {
					$(this).addClass('animate__fadeInDown');
				}
			});
		});
		$(window).scroll(function () {
			$('.diferent-block-r').each(function () {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 600) {
					$(this).addClass('animate__fadeInLeft');
				}
			});
		});
		$(window).scroll(function () {
			$('.diferent-block-l').each(function () {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 500) {
					$(this).addClass('animate__fadeInRight');
				}
			});
		});
		$(window).scroll(function () {
			$('.num').each(function () {
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 600) {
					$(this).addClass('counter');
				}
			});
		});

		if (document.querySelector('.cc_1')) {
			const btn1 = document.querySelector('.cc_1');
			const btn2 = document.querySelector('.cc_2');
			const btn3 = document.querySelector('.cc_3');
			const btn4 = document.querySelector('.cc_4');
			const cap1 = document.querySelector('.cct_1');
			const cap2 = document.querySelector('.cct_2');
			const cap3 = document.querySelector('.cct_3');
			const cap4 = document.querySelector('.cct_4');
			btn1.addEventListener("click", () => {
				cap1.classList.toggle("cap-show");
			});
			btn2.addEventListener("click", () => {
				cap2.classList.toggle("cap-show");
			});
			btn3.addEventListener("click", () => {
				cap3.classList.toggle("cap-show");
			});
			btn4.addEventListener("click", () => {
				cap4.classList.toggle("cap-show");
			});

		}

		$(function () {
			$('#up').click(function () {
				$('html, body').animate({
					scrollTop: 0
				}, 900);
				return false;
			});
		});
		$(function (f) {
			var element = f('#up');
			f(window).scroll(function () {
				element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](400);
			});
		});

		if ($('#investment').length) {
			var a = 0;
			$(window).scroll(function () {

				var oTop = $('#investment').offset().top - window.innerHeight;
				if (a === 0 && $(window).scrollTop() > oTop) {
					$('.counter').each(function () {
						var $this = $(this),
							countTo = $this.attr('data-count');
						$({
							countNum: $this.text()
						}).animate({
								countNum: countTo
							},

							{

								duration: 2000,
								easing: 'swing',
								step: function () {
									$this.text(Math.floor(this.countNum));
								},
								complete: function () {
									$this.text(this.countNum);
									//alert('finished');
								}

							});
					});
					a = 1;
				}

			});

		}


		if (document.getElementById('numbers') || document.getElementById('investment')) {
			var b = 0;
			$(window).scroll(function () {

				var oTop = $('#numbers').offset().top - window.innerHeight;
				if (b == 0 && $(window).scrollTop() > oTop) {
					$('.counter2').each(function () {
						var $this = $(this),
							countTo = $this.attr('data-count');
						$({
							countNum: $this.text()
						}).animate({
								countNum: countTo
							},

							{

								duration: 2000,
								easing: 'swing',
								step: function () {
									$this.text(Math.floor(this.countNum));
								},
								complete: function () {
									$this.text(this.countNum);
									//alert('finished');
								}

							});
					});
					b = 1;
				}

			});
		}
		$(document).ready(function () {
			$('.testimonial-slider').slick({
				prevArrow: $('.prev'),
				nextArrow: $('.next'),
				dots: true,
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 0,
							dots: true,
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 2,
							dots: false,
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
						}
					}
				]
			});
		});


		$(".nav-left, .nav-right, .footer-nav-links, .footer-navbar").on("click", "li a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({
				scrollTop: top
			}, 2000);
		});
		$(".client-video").modalVideo();

	});

	particlesJS('masthead',

		{
			"particles": {
				"number": {
					"value": 20,
					"density": {
						"enable": true,
						"value_area": 200
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 5
					},
					"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					}
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 2,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 1,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "repulse"
					},
					"onclick": {
						"enable": true,
						"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 400,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
					},
					"repulse": {
						"distance": 200
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true,
			"config_demo": {
				"hide_card": false,
				"background_color": "#b61924",
				"background_image": "",
				"background_position": "50% 50%",
				"background_repeat": "no-repeat",
				"background_size": "cover"
			}
		}

	);

	function refresh_projects(projects_count) {
		let $projects = $('.projects-wrapper .project-item-block');
		let $load_more_btn = $('.projects-load-more');

		$projects.addClass('filter-show');

		$projects.hide().addClass('filter-hide');
		var count = 0;
		$projects.filter('.filter-show').removeClass('filter-hide').each(function () {
			if (count >= projects_count) return;
			$(this).show();
			let el = $(this);
			setTimeout(function () {
				el.css({
					'opacity': 1,
					'width': '380px'
				})
			}, 50);
			count++;
		});

		$projects.filter('.filter-hide').css({
			'opacity': 0,
			'width': 0
		});


		if ($projects.filter('.filter-show').length === $projects.filter(':visible').length) {
			$load_more_btn.hide();
		} else {
			$load_more_btn.show();
		}
	}


})(jQuery);