// Navbar Scroll Effect
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// Active Link Handler
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Typing Animation
var typed = new Typed(".text", {
    strings: ["Data Science", "Machine Learning","Deep Learning","Computer Vision","Generative AI","LLM","RAG","Agentic AI"],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Go to Top Button
const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.reveal');
    
    function checkScroll() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight * 0.75) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});

// Updated skills array to use Font Awesome icons
const skills = [
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'Tensorflow', icon: 'fa-solid fa-cogs' }, // Placeholder icon for TensorFlow
    { name: 'Scikit Learn', icon: 'fa-solid fa-brain' },
    { name: 'VS-code', icon: 'fa-brands fa-microsoft' },
    { name: 'Pycharm', icon: 'fa-solid fa-code' },
    { name: 'Jupyter Notebook', icon: 'fa-brands fa-python' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
    { name: 'SQL', icon: 'fa-solid fa-database' },
    { name: 'Excel', icon: 'fa-solid fa-file-excel' },
    { name: 'Power BI', icon: 'fa-solid fa-chart-bar' },
    { name: 'Data Science', icon: 'fa-solid fa-chart-line' },
    { name: 'Machine Learning', icon: 'fa-solid fa-robot' },
    { name: 'Deep Learning', icon: 'fa-solid fa-network-wired' },
    { name: 'NLP', icon: 'fa-solid fa-language' },
    { name: 'Computer Vision', icon: 'fa-solid fa-eye' },
];

// Add Skills to DOM using Font Awesome icons
const skillsContainer = document.querySelector('.skills-container');
skills.forEach(skill => {
    const skillBox = document.createElement('div');
    skillBox.className = 'skill-box reveal';
    skillBox.innerHTML = `
        <i class="${skill.icon}"></i>
        <p>${skill.name}</p>
    `;
    skillsContainer.appendChild(skillBox);
});

// Add event listener for 'Read More' button
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButton = document.querySelector('.abtbtn-box');
    const aboutSection = document.querySelector('.about-text');

    if (readMoreButton) {
        readMoreButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Check if content is already loaded
            let detailsDiv = document.querySelector('.details-text');
            if (!detailsDiv) {
                detailsDiv = document.createElement('div');
                detailsDiv.className = 'details-text';
                detailsDiv.innerHTML = `
                <p></p>
                    <p> </p>
                    <p>Academic and Technical Focus</p>
                    <p>Currently pursuing a B.Tech in Artificial Intelligence with a strong foundation in both theoretical and practical aspects of AI. Actively involved in machine learning and deep learning projects, applying academic concepts to develop innovative, real-world solutions. Committed to continuous skill development and passionate about connecting academic research with impactful technological applications.</p>
                    <p></p>
                    <p>Professional Aspiration</p>
                    <p>Aspiring to contribute to forward-thinking organizations by leveraging expertise in AI, machine learning, and deep learning. Seeking opportunities to apply academic knowledge, grow professionally, and make meaningful contributions to cutting-edge technological innovations.</p>
                `;
                aboutSection.appendChild(detailsDiv);
            } else {
                // Toggle visibility
                if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
                    detailsDiv.style.display = 'block';
                } else {
                    detailsDiv.style.display = 'none';
                }
            }

            // Scroll to the newly added content if visible
            if (detailsDiv.style.display !== 'none') {
                detailsDiv.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Toggle visibility of the home image based on the current section
window.addEventListener('scroll', function () {
    const homeSection = document.getElementById('home');
    const homeImage = document.getElementById('dynamic-home-image');

    if (homeSection && homeImage) {
        const rect = homeSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            homeImage.style.visibility = 'visible';
        } else {
            homeImage.style.visibility = 'hidden';
        }
    }
});
