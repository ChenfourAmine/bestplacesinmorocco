// Morocco Tourism Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Add loaded class to body for smooth transition
    document.body.classList.add('loaded');
    
    // Tours Data Array
    const tours = [
        {
            id: 1,
            title: "Overnight in Merzouga: Sahara Desert Tour",
            duration: "2 Days / 1 Night",
            route: "Fes → Merzouga → Fes",
            time: "2 days and 1 night",
            groupSize: "Up to 20 people",
            price: 180,
            image: "images/ifrane3.jpg",
            fallbackImage: "images/home-img2.webp",
            highlights: "Join Best Places in Morocco to discover the beautiful Sahara Desert. Visit Ifrane, known as the \"Moroccan Switzerland,\" and admire the stunning Middle Atlas Mountains.",
            fullDescription: "Join Best Places in Morocco to discover the beautiful Sahara Desert. Visit Ifrane, known as the \"Moroccan Switzerland,\" and admire the stunning Middle Atlas Mountains. Enjoy a traditional Berber lunch in Midelt, explore the Ziz Valley, and spend the night in a cozy desert camp in Merzouga. Experience camel rides on the famous sand dunes, watch the breathtaking Sahara sunrise, and visit the historic town of Rissani. This Sahara desert tour promises an unforgettable adventure for all travelers.",
            itinerary: {
                day1: "Fes – Ifrane – Midelt – Merzouga",
                day2: "Erg Chebbi Dunes – Middle Atlas Mountains – Fes"
            },
            included: ["Full travel insurance", "All transportation during the tour", "Accommodation in hotels or Berber tents", "One breakfast and one dinner", "Camel trekking experience"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments"],
            departureTime: "8:00 AM"
        },
        {
            id: 2,
            title: "3-Day Sahara Desert Adventure",
            duration: "3 Days / 2 Nights",
            route: "Fes → Merzouga → Fes",
            time: "3 days and 2 nights",
            groupSize: "Up to 20 people",
            price: 280,
            image: "images/merzouga-sahara.jpeg",
            fallbackImage: "images/home-img2.webp",
            highlights: "Join Best Places in Morocco for a deeper Sahara experience. Visit Ifrane, explore the Middle Atlas Mountains, and enjoy extended time in the desert.",
            fullDescription: "Join Best Places in Morocco for a deeper Sahara experience. Visit Ifrane, known as the \"Moroccan Switzerland,\" and explore the stunning Middle Atlas Mountains. Enjoy a traditional Berber lunch in Midelt, visit the beautiful Ziz Valley, and relax in a desert camp in Merzouga. Experience camel trekking on the Erg Chebbi dunes, watch unforgettable Sahara sunrises and sunsets, visit the historic town of Rissani, and discover nearby desert villages. This 3-day Sahara adventure is perfect for travelers who want to fully enjoy the desert magic.",
            itinerary: {
                day1: "Fes – Ifrane – Midelt – Merzouga",
                day2: "Merzouga – Rissani – Desert Villages – Merzouga",
                day3: "Merzouga – Ziz Valley – Middle Atlas – Fes"
            },
            included: ["Full travel insurance", "All transportation during the tour", "Accommodation in hotels or Berber tents for 2 nights", "Two breakfasts and two dinners", "Camel trekking experience"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments"],
            departureTime: "8:00 AM"
        },
        {
            id: 3,
            title: "Fes to Marrakech via Merzouga",
            duration: "3 Days / 2 Nights",
            route: "Fes → Marrakech",
            time: "3 days and 2 nights",
            groupSize: "Up to 20 people",
            price: 320,
            image: "images/atlas-mountains.jpg",
            fallbackImage: "images/logo-3.png",
            highlights: "Join Best Places in Morocco for an amazing 3-day journey from Fes to Marrakech through the Sahara Desert and the Atlas Mountains.",
            fullDescription: "Join Best Places in Morocco for an amazing 3-day journey from Fes to Marrakech through the Sahara Desert and the Atlas Mountains. Experience camel rides on the golden dunes of Merzouga, sleep in a traditional Berber desert camp, travel the famous Road of a Thousand Kasbahs, explore Todra and Dadès Valleys, and visit the historic village of Ait Ben Haddou before reaching the lively city of Marrakech.",
            itinerary: {
                day1: "Fes – Midelt – Merzouga",
                day2: "Merzouga – Todra Gorge – Dadès Valley – Ouarzazate",
                day3: "Ouarzazate – Fint Oasis – Ait Ben Haddou – High Atlas – Marrakech"
            },
            included: ["Full travel insurance", "All transportation during the trip", "Accommodation: 1 night in desert camp and 1 night in Marrakech hotel or riad", "Two breakfasts and two dinners", "Camel trekking experience"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments and sites"],
            departureTime: "7:00 AM"
        },
        {
            id: 4,
            title: "Fes to Tangier via Chefchaouen",
            duration: "2 Days / 1 Night",
            route: "Fes → Tangier",
            time: "2 days and 1 night",
            groupSize: "Up to 20 people",
            price: 200,
            image: "images/chefchaouen.jpg",
            fallbackImage: "images/img1.png",
            highlights: "Travel with Best Places in Morocco from Fes to Tangier through the famous Blue City of Chefchaouen. Discover the charm of its blue-painted medina.",
            fullDescription: "Travel with Best Places in Morocco from Fes to Tangier through the famous Blue City of Chefchaouen. Discover the charm of its blue-painted medina, enjoy the mountain landscapes, and explore the coastal beauty of Tangier. This short tour is perfect for travelers who want to combine the calm of the Rif Mountains with the vibrant culture of northern Morocco.",
            itinerary: {
                day1: "Fes – Rif Mountains – Chefchaouen",
                day2: "Chefchaouen – Tangier"
            },
            included: ["Full travel insurance", "Private air-conditioned vehicle", "Bottled water during the trip", "All transportation with a driver who speaks your native language", "1-night accommodation in a riad/hotel in Chefchaouen (breakfast included)"],
            notIncluded: ["Personal expenses", "Entrance fees (if any)", "Lunches and dinners"],
            departureTime: "8:00 AM"
        },
        {
            id: 5,
            title: "Full Day Fes & Surroundings Tour",
            duration: "Full Day",
            route: "Fes, Morocco",
            time: "Full day (9:30 AM - 3:30 PM)",
            groupSize: "Private tour",
            price: 120,
            image: "images/fes-medina.jpg",
            fallbackImage: "images/img2.png",
            highlights: "Experience the best of Fes in one day — combining the treasures of the UNESCO-listed medina with the beauty of the city's surroundings.",
            fullDescription: "Experience the best of Fes in one day — combining the treasures of the UNESCO-listed medina with the beauty of the city's surroundings. In the morning, explore historical monuments, artisan workshops, and vibrant souks with a licensed guide. In the afternoon, enjoy a relaxing panoramic drive to see the Royal Palace, Borj Sud, Borj Nord, and peaceful gardens.",
            itinerary: {
                morning: "Medina Walking Tour: Bab Boujloud, Bou Inania Madrasa, Al-Qarawiyyin Mosque & University, Nejjarine Museum, Chouara Tanneries",
                afternoon: "Panoramic & Surroundings Tour: Royal Palace Gates, Mellah, Borj Sud & Borj Nord, Jnan Sbil Gardens, Pottery & Mosaic Workshop"
            },
            included: ["Licensed professional guide for the medina", "Private air-conditioned vehicle for panoramic tour", "Driver who speaks your native language", "Bottled water during the trip"],
            notIncluded: ["Entrance fees to monuments (if any)", "Meals and drinks", "Personal expenses"],
            departureTime: "9:30 AM"
        }
    ];

    // Function to populate tours section
    function populateTours() {
        const toursContainer = document.querySelector('.destinations-grid');
        const excursionsContainer = document.querySelector('.excursions-grid');
        
        // Populate tours section
        if (toursContainer) {
            toursContainer.innerHTML = '';
            tours.forEach(tour => {
                const tourCard = createTourCard(tour, 'tour');
                toursContainer.appendChild(tourCard);
            });
        }

        // Populate excursions section (temporarily with same data)
        if (excursionsContainer) {
            excursionsContainer.innerHTML = '';
            tours.forEach(tour => {
                const excursionCard = createTourCard(tour, 'excursion');
                excursionsContainer.appendChild(excursionCard);
            });
        }
    }

    // Function to create a tour/excursion card
    function createTourCard(tour, type) {
        const tourCard = document.createElement('div');
        tourCard.className = 'destination-card';
        tourCard.setAttribute('data-tour-id', tour.id);
        tourCard.setAttribute('data-type', type);

        tourCard.innerHTML = `
            <div class="card-image">
                <img src="${tour.image}" 
                     alt="${tour.title}"
                     onerror="this.src='${tour.fallbackImage}'">
            </div>
            <div class="card-content">
                <div class="tour-badge">${tour.duration}</div>
                <h3>${tour.title}</h3>
                <div class="tour-highlights">
                    <p>${tour.highlights}</p>
                </div>
                <div class="tour-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${tour.route}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${tour.time}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-users"></i>
                        <span>${tour.groupSize}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="price">
                        <span class="amount">$${tour.price}</span>
                        <span class="per">/person</span>
                    </div>
                    <button class="view-details" onclick="showDetails(${tour.id}, '${type}')">
                        View Details <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        return tourCard;
    }

    // Function to show tour details
    window.showDetails = function(tourId, type) {
        const tour = tours.find(t => t.id === tourId);
        if (tour) {
            if (type === 'tour') {
                showTourDetails(tourId);
            } else if (type === 'excursion') {
                showExcursionDetails(tourId);
            }
        }
    };

    // Function to show tour details (placeholder for future modal implementation)
    window.showTourDetails = function(tourId) {
        const tour = tours.find(t => t.id === tourId);
        if (tour) {
            // Populate modal with tour data
            document.getElementById('modal-tour-image').src = tour.image;
            document.getElementById('modal-tour-badge').textContent = tour.duration;
            document.getElementById('modal-tour-title').textContent = tour.title;
            document.getElementById('modal-tour-route').textContent = tour.route;
            document.getElementById('modal-tour-time').textContent = tour.time;
            document.getElementById('modal-tour-group-size').textContent = tour.groupSize;
            document.getElementById('modal-tour-departure').textContent = tour.departureTime;
            document.getElementById('modal-tour-highlights').textContent = tour.highlights;
            document.getElementById('modal-tour-description').textContent = tour.fullDescription;
            document.getElementById('modal-tour-price').textContent = `$${tour.price}`;
            
            // Populate itinerary
            const itineraryContainer = document.getElementById('modal-tour-itinerary');
            itineraryContainer.innerHTML = '';
            Object.entries(tour.itinerary).forEach(([day, description]) => {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'itinerary-day';
                dayDiv.innerHTML = `
                    <h4>${day}</h4>
                    <p>${description}</p>
                `;
                itineraryContainer.appendChild(dayDiv);
            });
            
            // Populate included items
            const includedContainer = document.getElementById('modal-tour-included');
            includedContainer.innerHTML = '';
            tour.included.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                includedContainer.appendChild(li);
            });
            
            // Populate not included items
            const notIncludedContainer = document.getElementById('modal-tour-not-included');
            notIncludedContainer.innerHTML = '';
            tour.notIncluded.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                notIncludedContainer.appendChild(li);
            });
            
            // Show modal
            const modal = document.getElementById('tour-details-modal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };

    // Function to show excursion details
    window.showExcursionDetails = function(tourId) {
        const tour = tours.find(t => t.id === tourId);
        if (tour) {
            // Populate modal with excursion data
            document.getElementById('modal-excursion-image').src = tour.image;
            document.getElementById('modal-excursion-badge').textContent = tour.duration;
            document.getElementById('modal-excursion-title').textContent = tour.title;
            document.getElementById('modal-excursion-route').textContent = tour.route;
            document.getElementById('modal-excursion-time').textContent = tour.time;
            document.getElementById('modal-excursion-group-size').textContent = tour.groupSize;
            document.getElementById('modal-excursion-departure').textContent = tour.departureTime;
            document.getElementById('modal-excursion-highlights').textContent = tour.highlights;
            document.getElementById('modal-excursion-description').textContent = tour.fullDescription;
            document.getElementById('modal-excursion-price').textContent = `$${tour.price}`;
            
            // Populate itinerary
            const itineraryContainer = document.getElementById('modal-excursion-itinerary');
            itineraryContainer.innerHTML = '';
            Object.entries(tour.itinerary).forEach(([day, description]) => {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'itinerary-day';
                dayDiv.innerHTML = `
                    <h4>${day}</h4>
                    <p>${description}</p>
                `;
                itineraryContainer.appendChild(dayDiv);
            });
            
            // Populate included items
            const includedContainer = document.getElementById('modal-excursion-included');
            includedContainer.innerHTML = '';
            tour.included.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                includedContainer.appendChild(li);
            });
            
            // Populate not included items
            const notIncludedContainer = document.getElementById('modal-excursion-not-included');
            notIncludedContainer.innerHTML = '';
            tour.notIncluded.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                notIncludedContainer.appendChild(li);
            });
            
            // Show modal
            const modal = document.getElementById('excursions-details-modal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };

    // Function to close tour details modal
    window.closeTourDetails = function() {
        const modal = document.getElementById('tour-details-modal');
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Function to close excursion details modal
    window.closeExcursionDetails = function() {
        const modal = document.getElementById('excursions-details-modal');
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close modal when clicking overlay
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            // Check which modal is open and close it
            const tourModal = document.getElementById('tour-details-modal');
            const excursionModal = document.getElementById('excursions-details-modal');
            
            if (!tourModal.classList.contains('hidden')) {
                closeTourDetails();
            } else if (!excursionModal.classList.contains('hidden')) {
                closeExcursionDetails();
            }
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Check which modal is open and close it
            const tourModal = document.getElementById('tour-details-modal');
            const excursionModal = document.getElementById('excursions-details-modal');
            
            if (!tourModal.classList.contains('hidden')) {
                closeTourDetails();
            } else if (!excursionModal.classList.contains('hidden')) {
                closeExcursionDetails();
            }
        }
    });

    // Populate tours when page loads
    populateTours();
    
    // Image Carousel Functionality
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.image-carousel .main-image');
    let autoSlideInterval;
    
    // Initialize carousel
    function initCarousel() {
        if (slides.length > 0) {
            showSlide(currentSlideIndex);
            startAutoSlide();
        }
    }
    
    // Show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
        }
    }
    
    // Change slide (next only for automatic rotation)
    function changeSlide() {
        currentSlideIndex++;
        
        // Loop around
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        
        showSlide(currentSlideIndex);
    }
    
    // Start automatic slide rotation
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            changeSlide();
        }, 3500); // Change slide every 3 seconds
    }
    
    // Initialize carousel
    initCarousel();
    
    // Remove manual navigation functions since we don't need them anymore
    // window.changeSlide = changeSlide;
    // window.currentSlide = goToSlide;
    
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
            alert('Contact form coming soon! Please call us at (+212) 7 19 60 30 09 or email info@bestplacesinmorocco.com');
        });
    }

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
            const platform = this.classList.contains('whatsApp') ? 'WhatsApp' : 'WhatsApp'
                           this.classList.contains('instagram') ? 'Instagram' : 'Instagram';
            alert(`${platform} page coming soon! Follow us for updates and travel inspiration.`);
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
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

