const menuBtn = document.querySelector('.hamburger');
const menuDesp = document.querySelector('.desp');
const logo = document.querySelector('.logo');
const navTitle = document.querySelectorAll('.desp h3');
const navLinks = document.querySelectorAll('.desp .icontacto');
let isDisplayed = false;
menuBtn.addEventListener('click', function() {
	if (isDisplayed === false) {
		menuDesp.style.height = '250px';
		menuDesp.style.paddingBottom = '30px';
		menuDesp.style.pointerEvents = 'all';
		isDisplayed = true;
	} else {
		menuDesp.style.height = '0px';
		menuDesp.style.paddingBottom = '0px';
		menuDesp.style.pointerEvents = 'none';
		isDisplayed = false;
	}
	navTitle.forEach((title, index) => {
		if (title.style.animation !== '') {
			title.style.animation = '';
		} else {
			title.style.animation = 'fadeInText 2s forwards';
		}
		console.log(index);
	});
	navLinks.forEach((title, index) => {
		if (title.style.animation !== '') {
			title.style.animation = '';
		} else {
			title.style.animation = 'fadeInText 2s forwards';
		}
		console.log(index);
	});
});
