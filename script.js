const listingsData = [
    {
        images: [
            'https://via.placeholder.com/400x300?text=Apartment+Image+1',
            'https://via.placeholder.com/400x300?text=Apartment+Image+2',
            'https://via.placeholder.com/400x300?text=Apartment+Image+3'
        ],
        title: 'Modern Apartment',
        location: 'New York, USA',
        price: '$120/night',
        type: 'Apartment'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Cottage+Image+1',
            'https://via.placeholder.com/400x300?text=Cottage+Image+2',
            'https://via.placeholder.com/400x300?text=Cottage+Image+3'
        ],
        title: 'Cozy Cottage',
        location: 'San Francisco, USA',
        price: '$200/night',
        type: 'Cottage'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Villa+Image+1',
            'https://via.placeholder.com/400x300?text=Villa+Image+2',
            'https://via.placeholder.com/400x300?text=Villa+Image+3'
        ],
        title: 'Beachfront Villa',
        location: 'Miami, USA',
        price: '$450/night',
        type: 'Villa'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Cabin+Image+1',
            'https://via.placeholder.com/400x300?text=Cabin+Image+2',
            'https://via.placeholder.com/400x300?text=Cabin+Image+3'
        ],
        title: 'Rustic Cabin',
        location: 'Lake Tahoe, USA',
        price: '$300/night',
        type: 'Cabin'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Hostel+Image+1',
            'https://via.placeholder.com/400x300?text=Hostel+Image+2',
            'https://via.placeholder.com/400x300?text=Hostel+Image+3'
        ],
        title: 'City Hostel',
        location: 'Berlin, Germany',
        price: '$40/night',
        type: 'Hostel'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Bungalow+Image+1',
            'https://via.placeholder.com/400x300?text=Bungalow+Image+2',
            'https://via.placeholder.com/400x300?text=Bungalow+Image+3'
        ],
        title: 'Luxury Bungalow',
        location: 'Bora Bora, French Polynesia',
        price: '$600/night',
        type: 'Bungalow'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Treehouse+Image+1',
            'https://via.placeholder.com/400x300?text=Treehouse+Image+2',
            'https://via.placeholder.com/400x300?text=Treehouse+Image+3'
        ],
        title: 'Treehouse Retreat',
        location: 'Asheville, USA',
        price: '$250/night',
        type: 'Treehouse'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Farmstay+Image+1',
            'https://via.placeholder.com/400x300?text=Farmstay+Image+2',
            'https://via.placeholder.com/400x300?text=Farmstay+Image+3'
        ],
        title: 'Farmstay Experience',
        location: 'Tuscany, Italy',
        price: '$180/night',
        type: 'Farmstay'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Tiny+House+Image+1',
            'https://via.placeholder.com/400x300?text=Tiny+House+Image+2',
            'https://via.placeholder.com/400x300?text=Tiny+House+Image+3'
        ],
        title: 'Tiny House Adventure',
        location: 'Portland, USA',
        price: '$90/night',
        type: 'Tiny House'
    },
    {
        images: [
            'https://via.placeholder.com/400x300?text=Boat+Image+1',
            'https://via.placeholder.com/400x300?text=Boat+Image+2',
            'https://via.placeholder.com/400x300?text=Boat+Image+3'
        ],
        title: 'Houseboat on the Lake',
        location: 'Amsterdam, Netherlands',
        price: '$320/night',
        type: 'Boat'
    }
];

// Function to display listings dynamically
function displayListings(listings) {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = ''; // Clear previous listings

    listings.forEach((listing) => {
        const imagesHTML = listing.images.map((img, i) =>
            `<img src="${img}" alt="Image ${i + 1}" />`
        ).join('');

        const dotsHTML = listing.images.map((_, i) =>
            `<span class="dot ${i === 0 ? 'active' : ''}"></span>`
        ).join('');

        const listingCard = `
            <div class="listing-card">
                <div class="carousel-container">
                    <div class="carousel-images">
                        ${imagesHTML}
                    </div>
                    <div class="carousel-nav">
                        <span class="prev-arrow">&#9664;</span> <!-- Left Arrow -->
                        <span class="next-arrow">&#9654;</span> <!-- Right Arrow -->
                    </div>
                    <div class="carousel-dots">
                        ${dotsHTML}
                    </div>
                </div>
                <h3>${listing.title}</h3>
                <p>${listing.location}</p>
                <p>${listing.price}</p>
            </div>
        `;
        listingsContainer.innerHTML += listingCard;
    });

    initializeCarousels(); // Initialize carousel functionality after adding listings
}

// Initialize carousel functionality
function initializeCarousels() {
    document.querySelectorAll('.listing-card').forEach(card => {
        const images = card.querySelector('.carousel-images');
        const dots = card.querySelectorAll('.dot');
        let currentIndex = 0;
        const totalImages = images.children.length;

        // Move to a specific image
        function moveToImage(index) {
            currentIndex = index;
            const offset = -currentIndex * 100;
            images.style.transform = `translateX(${offset}%)`;
            updateDots();
        }

        // Update dots to reflect the current image
        function updateDots() {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        // Arrow navigation
        card.querySelector('.prev-arrow').addEventListener('click', () => {
            moveToImage((currentIndex > 0) ? currentIndex - 1 : totalImages - 1);
        });

        card.querySelector('.next-arrow').addEventListener('click', () => {
            moveToImage((currentIndex < totalImages - 1) ? currentIndex + 1 : 0);
        });

        // Dot navigation
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => moveToImage(i));
        });
    });
}

// Display listings on page load
window.onload = function() {
    displayListings(listingsData);
};

// Function to toggle between full and minimized search bar
window.onscroll = function() {
    const header = document.querySelector('header');

    if (window.scrollY > 150) {
        header.classList.add('header-minimized'); // Fix the header and minimize it
    } else {
        header.classList.remove('header-minimized'); // Restore full header
    }
};

// Scroll functionality for place options arrows
document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector('.place-options').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector('.place-options').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
