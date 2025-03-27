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
		const sections = document.querySelectorAll('article[id]');
		const navLinks = document.querySelectorAll('#nav a');

		function highlightNavLink() {
			const scrollY = window.pageYOffset;

			sections.forEach(section => {
				const sectionHeight = section.offsetHeight;
				const sectionTop = section.offsetTop - 100;
				const sectionId = section.getAttribute('id');

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					navLinks.forEach(link => {
						link.classList.remove('active');
						if (link.getAttribute('href') === '#' + sectionId) {
							link.classList.add('active');
						}
					});
				}
			});
		}

		window.addEventListener('scroll', highlightNavLink);
		window.addEventListener('load', highlightNavLink);
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

})(jQuery);