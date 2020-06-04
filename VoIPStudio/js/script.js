"use strict";
(function () {
	// Global variables
	let
		userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),

		$html = document.querySelector("html"),
		$body = document.querySelector("body"),

		isDesktop = $html.classList.contains("desktop"),
		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		windowReady = false,

		plugins = {
			burger: document.querySelector('.burger'),
			header: document.querySelector('.header'),
			copyrightYear: document.querySelector('.copyright-year'),
		};

	// Initialize scripts that require a finished document
	(function () {

		// Toggle Header Class
		function toggleClass(removeClass, addClass) {
			let header = plugins.header;
			if (header.classList.contains(removeClass)) {
				header.classList.remove(removeClass);
				header.classList.add(addClass);
			}
		}

		// Header
		if (plugins.header) {
			let
				header = plugins.header,
				headerTop = document.querySelector('.header-top'),
				headerTopHeight = 0,
				currentScrollPos = 0,
				headerMain = document.querySelector('.header-main');

			if (isDesktop) {
				header.classList.add('header-static');

				if (window.innerWidth < 1000) {
					toggleClass('header-static', 'header-fixed');
				}

				window.addEventListener('resize', function () {
					if (window.innerWidth < 1000) {
						toggleClass('header-static', 'header-fixed');
					}

					if (window.innerWidth >= 1000) {
						toggleClass('header-fixed', 'header-static');
					}
				})

			}

			if (isMobile) {
				header.classList.add('header-fixed')
			}

			function stickup() {

			}

			window.addEventListener('scroll', function () {
				if (header.classList.contains('header-static')) {
					currentScrollPos = window.pageYOffset;
					headerTopHeight = headerTop.clientHeight;

					if (headerMain.offsetTop - currentScrollPos <= 0) {
						header.classList.add('header-stickup');
					}

					if (currentScrollPos - headerTopHeight < 0) {
						header.classList.remove('header-stickup');
					}
				}
			})

		}

		// Burger
		if (plugins.burger) {
			let
				burger = plugins.burger,
				aside = document.querySelector('.header-aside');

			burger.addEventListener('click', function () {
				burger.classList.toggle('active');
				aside.classList.toggle('active');
				$body.classList.toggle('body-hidden');
			})
		}

		// Copyright Year
		if (plugins.copyrightYear) {
			plugins.copyrightYear.innerHTML = initialDate.getFullYear();
		}
	}());
}());
