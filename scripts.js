const contactIcon = document.getElementById('contact');
const contactOverlay = document.getElementById('contact-overlay');
const closeContactBtn = document.getElementById('close-contact');

contactIcon.addEventListener('click', () => {
    contactOverlay.classList.remove('hidden');
});

closeContactBtn.addEventListener('click', () => {
    contactOverlay.classList.add('hidden');
});
