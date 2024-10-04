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

    listings.forEach((listing, index) => {
        const imagesHTML = listing.images.map((img, i) =>
            `<img src="${img}" alt="Image ${i + 1}" />`).join('');

        const dotsHTML = listing.images.map((_, i) =>
            `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join('');

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

    // Initialize carousels for each listing
    initializeCarousels();
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
            const offset = -currentIndex * 100; // Calculate percentage offset
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
            if (currentIndex > 0) {
                moveToImage(currentIndex - 1);
            } else {
                moveToImage(totalImages - 1); // Loop back to the last image
            }
        });

        card.querySelector('.next-arrow').addEventListener('click', () => {
            if (currentIndex < totalImages - 1) {
                moveToImage(currentIndex + 1);
            } else {
                moveToImage(0); // Loop back to the first image
            }
        });

        // Dot navigation
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                moveToImage(i);
            });
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
    const searchBar = document.getElementById('search-bar');
    const minimizedSearch = document.getElementById('minimized-search');

    // If user scrolls down 150px, minimize the header and keep it fixed
    if (window.scrollY > 150) {
        header.classList.add('header-minimized'); // Fix the header and minimize it
    } else {
        header.classList.remove('header-minimized'); // Restore full header
    }
};

// Function to enable arrow navigation
document.addEventListener('DOMContentLoaded', () => {
    const placeOptions = document.querySelector('.place-options');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Scroll the container to the right
    rightArrow.addEventListener('click', () => {
        placeOptions.scrollBy({
            left: 300, // Adjust the scroll amount
            behavior: 'smooth'
        });
    });

    // Scroll the container to the left
    leftArrow.addEventListener('click', () => {
        placeOptions.scrollBy({
            left: -300, // Adjust the scroll amount
            behavior: 'smooth'
        });
    });
});



