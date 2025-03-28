/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Navbar scroll effect
	window.addEventListener('scroll', function() {
		const nav = document.getElementById('nav');
		if (window.scrollY > 50) {
			nav.classList.add('scrolled');
		} else {
			nav.classList.remove('scrolled');
		}
	});

	// Active link highlighting
	document.addEventListener('DOMContentLoaded', function() {
		// Get all sections that have an ID defined
		const sections = document.querySelectorAll("article[id]");
		
		// Add an event listener listening for scroll
		window.addEventListener("scroll", navHighlighter);
		
		function navHighlighter() {
			// Get current scroll position
			let scrollY = window.pageYOffset;
			
			// Loop through sections to get height, top and ID values for each
			sections.forEach(current => {
				const sectionHeight = current.offsetHeight;
				const sectionTop = current.offsetTop - 100;
				const sectionId = current.getAttribute("id");
				
				/* If our current scroll position enters the space where current section 
				is, add .active class to corresponding navigation link, else remove it.
				To know which link needs an active class, we use sectionId variable we are 
				getting while looping through sections as a selector */
				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					document.querySelector("#nav a[href*=" + sectionId + "]").classList.add("active");
				} else {
					document.querySelector("#nav a[href*=" + sectionId + "]").classList.remove("active");
				}
			});
		}
	});

	// Fullscreen Resume Modal
	function toggleFullscreen() {
		// Remove any existing modal
		const existingModal = document.querySelector('.fullscreen-modal');
		if (existingModal) {
			existingModal.remove();
			return;
		}

		// Create new modal
		const modal = document.createElement('div');
		modal.className = 'fullscreen-modal';
		modal.innerHTML = `
			<button class="close-button" onclick="toggleFullscreen()">
				<i class="fas fa-times"></i>
			</button>
			<iframe src="./assets/resume-files/Fahim_Shams_Resume.pdf#toolbar=0"></iframe>
		`;
		document.body.appendChild(modal);
		
		// Add active class after a short delay
		setTimeout(() => {
			modal.classList.add('active');
			// Prevent body scrolling when modal is open
			document.body.style.overflow = 'hidden';
		}, 10);

		// Handle escape key
		const handleEscape = (e) => {
			if (e.key === 'Escape') {
				toggleFullscreen();
			}
		};
		document.addEventListener('keydown', handleEscape);

		// Cleanup when modal is closed
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				toggleFullscreen();
			}
		});
	}

	// Map initialization
	document.addEventListener('DOMContentLoaded', function() {
		if ($('#visited-states-map').length) {
			$('#visited-states-map').vectorMap({
				map: 'us_aea_en',
				backgroundColor: 'transparent',
				zoomOnScroll: false,
				regionStyle: {
					initial: {
						fill: '#e0e0e0',
						stroke: '#fff',
						'stroke-width': 1
					},
					hover: {
						fill: '#0984E3'
					}
				},
				series: {
					regions: [{
						values: {
							'PA': '#00B894',
							'NY': '#00B894',
							'NJ': '#00B894'
						},
						attribute: 'fill'
					}]
				}
			});
		}
	});

})(jQuery);