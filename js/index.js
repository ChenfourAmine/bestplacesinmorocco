// Morocco Tourism Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Add loaded class to body for smooth transition
    document.body.classList.add('loaded');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-card, .destination-card, .feature-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Hero Section CTA Buttons
    const bookTourButton = document.querySelector('.cta-button.primary');
    const contactUsButton = document.querySelector('.cta-button.secondary');
    
    if (bookTourButton) {
        bookTourButton.addEventListener('click', function() {
            // Scroll to destinations section
            const destinationsSection = document.querySelector('#destinations');
            if (destinationsSection) {
                destinationsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    if (contactUsButton) {
        contactUsButton.addEventListener('click', function() {
            // Show contact form or scroll to contact section
            alert('Contact form coming soon! Please call us at +212 (5) 24 56 78 90 or email info@bestplacesinmorocco.com');
        });
    }

    // View Details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.destination-card');
            const destinationName = card.querySelector('h3').textContent;
            
            // Show a simple alert (you can replace this with a modal or redirect)
            alert(`Thank you for your interest in ${destinationName}! Our team will contact you soon with more details.`);
        });
    });

    // Search functionality
    const searchIcon = document.querySelector('a[href="#search"]');
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = prompt('Search destinations in Morocco:');
            if (searchTerm) {
                // Simple search implementation
                const destinationCards = document.querySelectorAll('.destination-card');
                destinationCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const location = card.querySelector('.location span').textContent.toLowerCase();
                    const searchLower = searchTerm.toLowerCase();
                    
                    if (title.includes(searchLower) || location.includes(searchLower)) {
                        card.style.display = 'block';
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }

    // Book Now button
    const bookNowButton = document.querySelector('a[href="#book"]');
    if (bookNowButton) {
        bookNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Booking system coming soon! Please contact us directly for reservations.');
        });
    }

    // Social media links
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('facebook') ? 'Facebook' : 
                           this.classList.contains('instagram') ? 'Instagram' : 'YouTube';
            alert(`${platform} page coming soon! Follow us for updates and travel inspiration.`);
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const mainImage = document.querySelector('.main-image');
        const backgroundShape = document.querySelector('.background-shape');
        
        if (heroSection && mainImage) {
            const rate = scrolled * -0.3;
            mainImage.style.transform = `translateY(${rate}px)`;
            
            if (backgroundShape) {
                const shapeRate = scrolled * -0.1;
                backgroundShape.style.transform = `translateY(${shapeRate}px)`;
            }
        }
    });

    // Add hover effects for destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-card h3');
    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const originalText = stat.textContent;
            const target = parseInt(originalText.replace(/\D/g, ''));
            const hasPlus = originalText.includes('+');
            const hasPercent = originalText.includes('%');
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    let displayText = Math.ceil(current).toString();
                    
                    // Add back the appropriate symbol
                    if (hasPlus) {
                        displayText += '+';
                    } else if (hasPercent) {
                        displayText += '%';
                    }
                    
                    stat.textContent = displayText;
                    requestAnimationFrame(updateCounter);
                } else {
                    // Final value with proper symbol
                    let finalText = target.toString();
                    if (hasPlus) {
                        finalText += '+';
                    } else if (hasPercent) {
                        finalText += '%';
                    }
                    stat.textContent = finalText;
                }
            };
            
            updateCounter();
        });
    };

    // Trigger counter animation when stats section is visible
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // Floating icons animation enhancement
    const floatingIcons = document.querySelectorAll('.floating-icons .icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
    });

    console.log('Morocco Tourism Website loaded successfully! 🇲🇦');
});
