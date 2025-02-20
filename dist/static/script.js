// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight the active section in the navbar
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navbarLinks = document.querySelectorAll('.navbar a');

    sections.forEach((section, index) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            navbarLinks.forEach(link => link.classList.remove('active'));
            navbarLinks[index].classList.add('active');
        }
    });
});
let currentIndex = 0;
const slides = document.querySelectorAll('.project-slide');
const slider = document.querySelector('.projects-slider');

function showSlide(index) {
    const newTransform = `translateX(-${index * 100}%)`;
    slider.style.transform = newTransform;
}

// Next Slide Function
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Previous Slide Function
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Auto-scroll every 3 seconds
setInterval(nextSlide, 3000);
function flipCard(card) {
    card.classList.toggle("flipped");

}
