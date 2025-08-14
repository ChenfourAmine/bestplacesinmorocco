// Morocco Tourism Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Add loaded class to body for smooth transition
    document.body.classList.add('loaded');
    
    // Tours Data Array
    const tours = [
        {
            id: 1,
            title: "Overnight in Merzouga: 2-Days 1-Night Sahara Desert Tour from Fes To Fes",
            duration: "2 Days / 1 Night",
            route: "Fes → Merzouga → Fes",
            time: "2 days and 1 night",
            groupSize: "Up to 20 people",
            price: 180,
            image: "images/ifrane3.jpg",
            fallbackImage: "images/home-img2.webp",
            highlights: "Join Best Places in Morocco to discover the beautiful Sahara Desert. Visit Ifrane, known as the \"Moroccan Switzerland,\" and admire the stunning Middle Atlas Mountains. Enjoy a traditional Berber lunch in Midelt, explore the Ziz Valley, and spend the night in a cozy desert camp in Merzouga. Experience camel rides on the famous sand dunes, watch the breathtaking Sahara sunrise, and visit the historic town of Rissani. This Sahara desert tour promises an unforgettable adventure for all travelers.",
            fullDescription: "Join Best Places in Morocco to discover the beautiful Sahara Desert. Visit Ifrane, known as the \"Moroccan Switzerland,\" and admire the stunning Middle Atlas Mountains. Enjoy a traditional Berber lunch in Midelt, explore the Ziz Valley, and spend the night in a cozy desert camp in Merzouga. Experience camel rides on the famous sand dunes, watch the breathtaking Sahara sunrise, and visit the historic town of Rissani. This Sahara desert tour promises an unforgettable adventure for all travelers.",
            itinerary: {
                "Day 1": "Fes – Ifrane – Midelt – Merzouga: Start your journey at 8 AM from Fes with Best Places in Morocco. Visit Ifrane, known as \"Little Switzerland,\" with its alpine-style buildings. Stop at Azrou to see cedar forests and Barbary monkeys. Have lunch in Midelt, famous for its apples. Continue to Merzouga, home of the large Erg Chebbi dunes. Enjoy mint tea at a traditional Kasbah. Take a camel ride on the desert dunes and watch a beautiful sunset. Spend the night in Berber tents under the stars with a campfire and local music.",
                "Day 2": "Erg Chebbi Dunes – Middle Atlas Mountains – Fes: Wake up early to see the stunning Sahara sunrise. After breakfast and a fresh shower, leave Merzouga. Travel back through the Middle Atlas Mountains. Make stops to enjoy the landscapes and take photos. Return to Fes after a day full of adventure and memories."
            },
            included: ["Full travel insurance", "All transportation during the tour", "Accommodation in hotels or Berber tents", "One breakfast and one dinner", "Camel trekking experience"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments"],
            departureTime: "8:00 AM"
        },
        {
            id: 2,
            title: "3-Day / 2-Night Sahara Desert Tour from Fes To Fes",
            duration: "3 Days / 2 Nights",
            route: "Fes → Merzouga → Fes",
            time: "3 days and 2 nights",
            groupSize: "Up to 20 people",
            price: 280,
            image: "images/merzouga-sahara.jpeg",
            fallbackImage: "images/home-img2.webp",
            highlights: "Join Best Places in Morocco for a deeper Sahara experience. Visit Ifrane, known as the \"Moroccan Switzerland,\" and explore the stunning Middle Atlas Mountains. Enjoy a traditional Berber lunch in Midelt, visit the beautiful Ziz Valley, and relax in a desert camp in Merzouga. Experience camel trekking on the Erg Chebbi dunes, watch unforgettable Sahara sunrises and sunsets, visit the historic town of Rissani, and discover nearby desert villages. This 3-day Sahara adventure is perfect for travelers who want to fully enjoy the desert magic.",
            fullDescription: "Join Best Places in Morocco for a deeper Sahara experience. Visit Ifrane, known as the \"Moroccan Switzerland,\" and explore the stunning Middle Atlas Mountains. Enjoy a traditional Berber lunch in Midelt, visit the beautiful Ziz Valley, and relax in a desert camp in Merzouga. Experience camel trekking on the Erg Chebbi dunes, watch unforgettable Sahara sunrises and sunsets, visit the historic town of Rissani, and discover nearby desert villages. This 3-day Sahara adventure is perfect for travelers who want to fully enjoy the desert magic.",
            itinerary: {
                "Day 1": "Fes – Ifrane – Midelt – Merzouga: Depart Fes at 8 AM with Best Places in Morocco. Visit Ifrane, the \"Little Switzerland\" of Morocco. Stop at Azrou to see cedar forests and Barbary monkeys. Lunch in Midelt, the apple capital. Travel to Merzouga and enjoy mint tea at a traditional Kasbah. Camel ride on Erg Chebbi dunes to watch the sunset. Overnight in Berber tents under the stars with campfire and local music.",
                "Day 2": "Merzouga – Rissani – Desert Villages – Merzouga: Wake up early for a Sahara sunrise. Breakfast at the camp, then visit the historic town of Rissani. Explore nearby desert villages and local markets. Return to Merzouga for lunch and rest. Optional second camel ride or 4x4 desert tour. Dinner and overnight in the desert camp.",
                "Day 3": "Merzouga – Ziz Valley – Middle Atlas – Fes: Early breakfast and prepare for departure. Travel through the scenic Ziz Valley with photo stops. Pass through the Middle Atlas Mountains. Return to Fes by evening with unforgettable memories."
            },
            included: ["Full travel insurance", "All transportation during the tour", "Accommodation in hotels or Berber tents for 2 nights", "Two breakfasts and two dinners", "Camel trekking experience"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments"],
            departureTime: "8:00 AM"
        },
        {
            id: 3,
            title: "3-Day / 2-Night Tour from Fes to Marrakech via Merzouga",
            duration: "3 Days / 2 Nights",
            route: "Fes → Marrakech",
            time: "3 days and 2 nights",
            groupSize: "Up to 20 people",
            price: 320,
            image: "images/atlas-mountains.jpg",
            fallbackImage: "images/logo-3.png",
            highlights: "Join Best Places in Morocco for an amazing 3-day journey from Fes to Marrakech through the Sahara Desert and the Atlas Mountains. Experience camel rides on the golden dunes of Merzouga, sleep in a traditional Berber desert camp, travel the famous Road of a Thousand Kasbahs, explore Todra and Dadès Valleys, and visit the historic village of Ait Ben Haddou before reaching the lively city of Marrakech.",
            fullDescription: "Join Best Places in Morocco for an amazing 3-day journey from Fes to Marrakech through the Sahara Desert and the Atlas Mountains. Experience camel rides on the golden dunes of Merzouga, sleep in a traditional Berber desert camp, travel the famous Road of a Thousand Kasbahs, explore Todra and Dadès Valleys, and visit the historic village of Ait Ben Haddou before reaching the lively city of Marrakech.",
            itinerary: {
                "Day 1": "Fes – Midelt – Merzouga: Depart Fes early at 7 AM with Best Places in Morocco. Drive through the Atlas Mountains, passing Berber villages and scenic views. Stop in Midelt for lunch and rest. Continue to Merzouga, visit a traditional Kasbah near the dunes. Enjoy mint tea, then ride camels on the Erg Chebbi dunes to watch the sunset. Overnight in a Berber desert camp with dinner, campfire, and traditional music.",
                "Day 2": "Merzouga – Todra Gorge – Dadès Valley – Ouarzazate: Early breakfast and goodbye to the desert camp. Travel along the Road of a Thousand Kasbahs, enjoy stunning desert landscapes. Stop at Todra Gorge for a walk and photos. Continue through the Dadès Valley. Arrive in Ouarzazate, free time to visit Taourirt Kasbah and Cinema Studios (tickets not included). Dinner and overnight in a comfortable hotel with pool and air conditioning.",
                "Day 3": "Ouarzazate – Fint Oasis – Ait Ben Haddou – High Atlas – Marrakech: Breakfast at the hotel. Visit Taourirt Kasbah and Atlas Studios. Explore Fint Oasis. Visit the UNESCO site of Ait Ben Haddou, famous for its ancient architecture and movie scenes. Drive over the High Atlas Mountains via the Tizi-n-Tichka pass (2260m), enjoy spectacular views. Lunch stop (extra cost) in the Middle Atlas and visit an Argan oil cooperative. Arrive in Marrakech by evening, end of tour."
            },
            included: ["Full travel insurance", "All transportation during the trip", "Accommodation: 1 night in desert camp and 1 night in Marrakech hotel or riad", "Two breakfasts and two dinners", "Camel trekking experience"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments and sites"],
            departureTime: "7:00 AM"
        },
        {
            id: 4,
            title: "3-Day / 2-Night Tour From Fes to Tangier via Chefchaouen",
            duration: "2 Days / 1 Night",
            route: "Fes → Tangier",
            time: "2 days / 1 night",
            groupSize: "Up to 20 people",
            price: 200,
            image: "images/chefchaouen.jpg",
            fallbackImage: "images/img1.png",
            highlights: "Travel with Best Places in Morocco from Fes to Tangier through the famous Blue City of Chefchaouen. Discover the charm of its blue-painted medina, enjoy the mountain landscapes, and explore the coastal beauty of Tangier. This short tour is perfect for travelers who want to combine the calm of the Rif Mountains with the vibrant culture of northern Morocco.",
            fullDescription: "Travel with Best Places in Morocco from Fes to Tangier through the famous Blue City of Chefchaouen. Discover the charm of its blue-painted medina, enjoy the mountain landscapes, and explore the coastal beauty of Tangier. This short tour is perfect for travelers who want to combine the calm of the Rif Mountains with the vibrant culture of northern Morocco.",
            itinerary: {
                "Day 1": "Fes – Rif Mountains – Chefchaouen: Departure from Fes: Start at 8:00 AM with a comfortable drive through the Rif Mountains. Arrival in Chefchaouen: Explore the blue medina, take stunning photos, and shop for local handicrafts. Evening: Relax and enjoy dinner (not included) in one of Chefchaouen's cozy restaurants. Overnight in a riad.",
                "Day 2": "Chefchaouen – Tangier: Morning: Free time to visit the Spanish Mosque or continue exploring Chefchaouen. Afternoon: Depart for Tangier, passing through scenic mountain and coastal roads. Evening arrival: Drop-off at your chosen location in Tangier."
            },
            included: ["Full travel insurance", "Private air-conditioned vehicle", "Bottled water during the trip", "All transportation with a driver who speaks your native language", "1-night accommodation in a riad/hotel in Chefchaouen (breakfast included)"],
            notIncluded: ["Personal expenses", "Entrance fees (if any)", "Lunches and dinners"],
            departureTime: "8:00 AM"
        },
        {
            id: 5,
            title: "Full Day Fes & Surroundings Tour with Best Places in Morocco",
            duration: "Full Day",
            route: "Fes, Morocco",
            time: "Full day (9:30 AM - 3:30 PM)",
            groupSize: "Private tour",
            price: 120,
            image: "images/fes-medina.jpg",
            fallbackImage: "images/img2.png",
            highlights: "Experience the best of Fes in one day — combining the treasures of the UNESCO-listed medina with the beauty of the city's surroundings. In the morning, explore historical monuments, artisan workshops, and vibrant souks with a licensed guide. In the afternoon, enjoy a relaxing panoramic drive to see the Royal Palace, Borj Sud, Borj Nord, and peaceful gardens.",
            fullDescription: "Experience the best of Fes in one day — combining the treasures of the UNESCO-listed medina with the beauty of the city's surroundings. In the morning, explore historical monuments, artisan workshops, and vibrant souks with a licensed guide. In the afternoon, enjoy a relaxing panoramic drive to see the Royal Palace, Borj Sud, Borj Nord, and peaceful gardens.",
            itinerary: {
                "Morning": "Medina Walking Tour: Bab Boujloud (Blue Gate) – main entrance to the medina. Bou Inania Madrasa – a masterpiece of Islamic architecture. Al-Qarawiyyin Mosque & University – the oldest existing university in the world. Nejjarine Museum – showcasing Moroccan woodwork. Chouara Tanneries – traditional leather dyeing.",
                "Afternoon": "Panoramic & Surroundings Tour: Royal Palace Gates – admire golden doors and fine craftsmanship. Mellah – historic Jewish Quarter. Borj Sud & Borj Nord – panoramic viewpoints over the medina. Jnan Sbil Gardens – peaceful green oasis. Pottery & Mosaic Workshop – watch artisans at work."
            },
            included: ["Licensed professional guide for the medina", "Private air-conditioned vehicle for panoramic tour", "Driver who speaks your native language", "Bottled water during the trip"],
            notIncluded: ["Entrance fees to monuments (if any)", "Meals and drinks", "Personal expenses"],
            departureTime: "9:30 AM"
        }
    ];

    // Excursions Data Array
    const excursions = [
        {
            id: 1,
            title: "Fes to Volubilis and Meknes Day Trip",
            duration: "1 Day",
            route: "Fes → Meknes → Volubilis → Moulay Idriss → Fes",
            time: "1 day",
            groupSize: "Private tour",
            price: 80,
            image: "images/Volubilis-1.jpeg",
            fallbackImage: "images/home-img3.jpg",
            highlights: "Join Best Places in Morocco for a full-day trip exploring three amazing Moroccan destinations: the imperial city of Meknes, the ancient Roman ruins of Volubilis, and the holy town of Moulay Idriss. This tour offers a perfect mix of history, culture, and beautiful landscapes—all in one day.",
            fullDescription: "Join Best Places in Morocco for a full-day trip exploring three amazing Moroccan destinations: the imperial city of Meknes, the ancient Roman ruins of Volubilis, and the holy town of Moulay Idriss. This tour offers a perfect mix of history, culture, and beautiful landscapes—all in one day.",
            itinerary: {
                "Morning": "Fes – Meknes – Volubilis: Departure from Fes: Start your day at 9:00 AM with a comfortable private vehicle. Visit Meknes: Explore the imperial city's famous sites, including Bab Mansour gate and Moulay Ismail Mausoleum. Drive to Volubilis: Continue to the Roman ruins of Volubilis, where you can walk among ancient mosaics and structures.",
                "Afternoon": "Volubilis – Moulay Idriss – Fes: Visit Moulay Idriss: Discover the sacred town's charming streets and enjoy panoramic views. Free time: Use some free time to shop, take photos, or relax. Return to Fes: Head back to Fes in the late afternoon to finish your memorable day trip."
            },
            included: ["Full travel insurance", "Private air-conditioned vehicle", "Bottled water during the trip", "All transportation with a driver who speaks your native language"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments", "Lunch"],
            departureTime: "9:00 AM"
        },
        {
            id: 2,
            title: "Fes to Chefchaouen Day Trip",
            duration: "1 Day",
            route: "Fes → Chefchaouen → Fes",
            time: "1 day",
            groupSize: "Private tour",
            price: 70,
            image: "images/chefchaouen-2.jpg",
            fallbackImage: "images/home-img4.jpg",
            highlights: "Join Best Places in Morocco for a refreshing day trip to Chefchaouen, the famous \"Blue City.\" Wander through its narrow blue-painted streets, visit local markets, and enjoy stunning mountain views. Chefchaouen offers a peaceful escape with unique culture, beautiful architecture, and delicious local food.",
            fullDescription: "Join Best Places in Morocco for a refreshing day trip to Chefchaouen, the famous \"Blue City.\" Wander through its narrow blue-painted streets, visit local markets, and enjoy stunning mountain views. Chefchaouen offers a peaceful escape with unique culture, beautiful architecture, and delicious local food.",
            itinerary: {
                "Morning": "Fes – Chefchaouen: Departure from Fes: Leave at 8:00 AM in a comfortable private vehicle. Arrival in Chefchaouen: Explore the blue-painted medina, stroll through streets filled with artisan shops and local markets. Visit the Kasbah Museum: Discover the history and culture of the city inside this historic fortress.",
                "Afternoon": "Chefchaouen – Fes: Lunch break: Enjoy free time to have lunch at a local restaurant (not included). Explore Plaza Uta el-Hammam: Relax at the main square, enjoy the atmosphere and mountain views. Return to Fes: Depart in the late afternoon and arrive back in Fes by early evening."
            },
            included: ["Full travel insurance", "Private air-conditioned vehicle", "Bottled water during the trip", "All transportation with a driver who speaks your native language"],
            notIncluded: ["Personal expenses", "Entrance fees (if any)", "Meals"],
            departureTime: "7:30 AM"
        },
        {
            id: 3,
            title: "Fes to Middle Atlas Day Trip with Best Places in Morocco",
            duration: "1 Day",
            route: "Fes → Ifrane → Azrou → Lake Dayet Aoua → Fes",
            time: "1 day",
            groupSize: "Private tour",
            price: 65,
            image: "images/cedar-forest.jpg",
            fallbackImage: "images/home-img5.jpg",
            highlights: "Join Best Places in Morocco for a scenic day trip through the Middle Atlas Mountains. Discover charming Berber villages, beautiful cedar forests, and the famous cedar monkeys. Enjoy the fresh mountain air, visit peaceful lakes, and experience authentic rural Moroccan life.",
            fullDescription: "Join Best Places in Morocco for a scenic day trip through the Middle Atlas Mountains. Discover charming Berber villages, beautiful cedar forests, and the famous cedar monkeys. Enjoy the fresh mountain air, visit peaceful lakes, and experience authentic rural Moroccan life.",
            itinerary: {
                "Morning": "Fes – Ifrane – Azrou: Departure from Fes: Start at 8:30 AM in a comfortable private vehicle. Visit Ifrane: Known as \"Little Switzerland,\" admire the alpine-style architecture and clean streets. Explore Azrou: Walk in cedar forests, see the famous Barbary macaque monkeys.",
                "Afternoon": "Azrou – Lake Dayet Aoua – Fes: Lunch break: Free time for lunch at a local restaurant (not included). Visit Dayet Aoua Lake: Enjoy the beautiful mountain lake and its peaceful surroundings. Return to Fes: Head back in the late afternoon, arriving by early evening."
            },
            included: ["Full travel insurance", "Private air-conditioned vehicle", "Bottled water during the trip", "All transportation with a driver who speaks your native language"],
            notIncluded: ["Personal expenses", "Entrance fees (if any)", "Meals"],
            departureTime: "8:30 AM"
        },
        {
            id: 4,
            title: "Fes to Rabat Day Trip",
            duration: "1 Day",
            route: "Fes → Rabat → Fes",
            time: "1 day",
            groupSize: "Private tour",
            price: 75,
            image: "images/rabat.jpg",
            fallbackImage: "images/home-img6.jpg",
            highlights: "Join Best Places in Morocco for a full-day trip to Rabat, Morocco's modern capital. Discover historic sites like the Hassan Tower, Kasbah of the Udayas, and the Royal Palace. Enjoy a walk along the Atlantic coast and explore the charming medina. This trip offers a perfect blend of history, culture, and seaside views.",
            fullDescription: "Join Best Places in Morocco for a full-day trip to Rabat, Morocco's modern capital. Discover historic sites like the Hassan Tower, Kasbah of the Udayas, and the Royal Palace. Enjoy a walk along the Atlantic coast and explore the charming medina. This trip offers a perfect blend of history, culture, and seaside views.",
            itinerary: {
                "Morning": "Fes – Rabat: Departure from Fes: Leave at 8:00 AM in a comfortable private vehicle. Visit Hassan Tower: Explore this famous minaret and nearby historical sites. Kasbah of the Udayas: Walk through this ancient fortress overlooking the ocean.",
                "Afternoon": "Rabat City Tour – Return to Fes: Royal Palace: View the official residence of the King of Morocco from outside. Medina of Rabat: Explore the vibrant market streets and local shops. Return to Fes: Depart in the late afternoon and arrive back in Fes by early evening."
            },
            included: ["Full travel insurance", "Private air-conditioned vehicle", "Bottled water during the trip", "All transportation with a driver who speaks your native language"],
            notIncluded: ["Personal expenses", "Entrance fees to monuments", "Meals"],
            departureTime: "8:00 AM"
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
            excursions.forEach(excursion => {
                const excursionCard = createTourCard(excursion, 'excursion');
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

        // Truncate highlights for card display
        const truncatedHighlights = tour.highlights.length > 120 
            ? tour.highlights.substring(0, 120) + '...' 
            : tour.highlights;

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
                    <p>${truncatedHighlights}</p>
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
        if (type === 'tour') {
            const tour = tours.find(t => t.id === tourId);
            if (tour) {
                showTourDetails(tourId);
            }
        } else if (type === 'excursion') {
            const excursion = excursions.find(e => e.id === tourId);
            if (excursion) {
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
        const tour = excursions.find(t => t.id === tourId);
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

