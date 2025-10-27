// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Social Media Links - Real URLs
function openFacebook() {
    // Real Facebook profile URL
    window.open('https://www.facebook.com/photo/?fbid=3847741305480559&set=a.1437993456455368', '_blank');
}

function openInstagram() {
    // Real Instagram profile URL
    window.open('https://www.instagram.com/akshay_maharaj__harane_5058?igsh=ZDB1eDdyOTdyejh0', '_blank');
}

function openYouTube() {
    // Real YouTube channel URL
    window.open('https://www.youtube.com/@mahavaishnav_official', '_blank');
}

// Specific Video Functions
function openKirtanVideo() {
    // Latest Kirtan Session
    window.open('https://www.youtube.com/watch?v=vxaMz3NnIZE', '_blank');
}

function openPuranaVideo() {
    // Mahashiv Purana Video
    window.open('https://www.youtube.com/watch?v=mBqatDWrBtY&t=161s', '_blank');
}

function openKathaVideo() {
    // Spiritual Katha Video
    window.open('https://www.youtube.com/watch?v=Y3bmzej-sNU', '_blank');
}

// YouTube Shorts Videos
function openShortsVideo1() {
    // YouTube Shorts Video 1
    window.open('https://www.youtube.com/shorts/rP1ZuADveyk', '_blank');
}

function openShortsVideo2() {
    // YouTube Shorts Video 2
    window.open('https://www.youtube.com/shorts/BltqNMnu5es', '_blank');
}

function openShortsVideo3() {
    // YouTube Shorts Video 3
    window.open('https://www.youtube.com/shorts/Pza_WI3F5Rs', '_blank');
}

// Email Contact
function openEmail() {
    // Opens default email client with pre-filled email
    window.location.href = 'mailto:haribhakt.akshayanandaji@gmail.com?subject=Spiritual Guidance Inquiry&body=Namaste Maharaj,%0D%0A%0D%0AI would like to connect with you for spiritual guidance.%0D%0A%0D%0AThank you.';
}

// WhatsApp Contact
function openWhatsApp() {
    // Updated with actual phone number
    window.open('https://wa.me/919552175058', '_blank');
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in animation to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 217, 217, 0.95)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #20b2aa, #48d1cc, #40e0d0)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Contact form functionality (if needed later)
function submitContactForm(event) {
    event.preventDefault();
    // Add contact form submission logic here
    alert('Thank you for your message! Maharaj will get back to you soon.');
}

// Add click handlers for contact items
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for all contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        
        if (item.querySelector('.fa-whatsapp')) {
            item.addEventListener('click', openWhatsApp);
        } else if (item.querySelector('.fa-phone')) {
            item.addEventListener('click', () => {
                window.location.href = 'tel:+919552175058';
            });
        } else if (item.querySelector('.fa-envelope')) {
            item.addEventListener('click', openEmail);
        }
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);