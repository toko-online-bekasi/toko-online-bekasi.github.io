const navToggle = document.querySelector('.nav-toggle input');
const navToggleS2 = document.querySelector('.nav-toggle span:nth-child(2)');
const navToggleS3 = document.querySelector('.nav-toggle span:nth-child(3)');
const navToggleS4 = document.querySelector('.nav-toggle span:nth-child(4)');
const navSlide = document.querySelector('nav ul');
const menu = document.querySelectorAll('nav ul li a');

navToggle.addEventListener('click', () => {
	navSlide.classList.toggle('slide');
});
menu.forEach(m => {
	m.addEventListener('click', () => {
		navSlide.classList.toggle('slide');
		navToggleS2.style.transform = 'rotate(0deg) translate(0px, 0)';
		navToggleS3.style.opacity = '1';
		navToggleS3.style.transform = 'scale(1)';
		navToggleS4.style.transform = 'rotate(0deg) translate(0px, 0)';
	})
})