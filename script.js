const listingsData = [
  {
    images: [
      'imagefile1/dollop4.webp',
      'imagefile2/dollop2.jpg',
      'imagefile3/dollop3.jpg'
    ],
    location: 'Dollop Coffee Co.',
    distance: '5 miles away',
    availableDate: 'Oct 25, 2024',
    cost: '$120 night',
    rating: '4.5',
    category: 'coffee'
  },
  {
    images: [
      'imagefile1/intelligentsia4.jpg',
      'imagefile2/intelligentsia2.jpg',
      'imagefile3/intelligentsia3.jpg'
    ],
    location: 'Intelligentsia',
    distance: '15 miles away',
    availableDate: 'Nov 1, 2024',
    cost: '$200 night',
    rating: '4.7',
    category: 'coffee'
  },
  {
    images: [
      'imagefile1/peets4.jpg',
      'imagefile2/peets2.jpg',
      'imagefile3/peets3.jpg'
    ],
    location: 'Peets Coffee',
    distance: '3 miles away',
    availableDate: 'Oct 20, 2024',
    cost: '$450 night',
    rating: '4.8',
    category: 'coffee'
  },
  {
    images: [
      'imagefile1/Christkindl1.jpg',
      'imagefile2/Christkindl2.jpg',
      'imagefile3/Christkindl3.jpg'
    ],
    location: 'Christkindl Market Chicago',
    distance: '10 miles away',
    availableDate: 'Nov 5, 2024',
    cost: '$300 night',
    rating: '4.6',
    category: 'seasonal'
  },
  {
    images: [
      'imagefile1/Jacks1.jpg',
      'imagefile2/jacks2.webp',
      'imagefile3/jacks3.webp'
    ],
    location: 'Jacks Pumpkin Pop Up',
    distance: '20 miles away',
    availableDate: 'Oct 30, 2024',
    cost: '$40 night',
    rating: '4.2',
    category: 'seasonal'
  },
  {
    images: [
      'imagefile1/offshore1.jpg',
      'imagefile2/offshore2.jpg',
      'imagefile3/offshore3.jpg'
    ],
    location: 'Offshore Rooftop',
    distance: '7 miles away',
    availableDate: 'Dec 1, 2024',
    cost: '$600 night',
    rating: '4.9',
    category: 'restaurant'
  },
  {
    images: [
      'imagefile1/soldier1.jpg',
      'imagefile2/soldier2.jpg',
      'imagefile3/soldier3.webp'
    ],
    location: 'Soldier Field',
    distance: '12 miles away',
    availableDate: 'Oct 28, 2024',
    cost: '$250 night',
    rating: '4.7',
    category: 'attraction'
  },
  {
    images: [
      'imagefile1/marias1.jpg',
      'imagefile2/marias2.webp',
      'imagefile3/marias3.jpg'
    ],
    location: 'Marias Packaged Goods and Community Bar',
    distance: '30 miles away',
    availableDate: 'Nov 10, 2024',
    cost: '$180 night',
    rating: '4.5',
    category: 'bars'
  },
  {
    images: [
      'imagefile1/artinstitute1.jpg',
      'imagefile2/artinstitute2.jpg',
      'imagefile3/artinstitute3.webp'
    ],
    location: 'The Art Institute of Chicago',
    distance: '2 miles away',
    availableDate: 'Oct 22, 2024',
    cost: '$90 night',
    rating: '4.3',
    category: 'museum'
  },
  {
    images: [
      'imagefile1/pier1.jpg',
      'imagefile2/pier2.jpg',
      'imagefile3/pier3.jpg'
    ],
    location: 'Navy Pier',
    distance: '8 miles away',
    availableDate: 'Nov 2, 2024',
    cost: '$320 night',
    rating: '4.6',
    category: 'attractions'
  },
  {
    images: [
      'imagefile1/athena1.jpg',
      'imagefile2/athena2.png',
      'imagefile3/athena3.jpg'
    ],
    location: 'Athena Greek Restaurant',
    distance: '5 miles away',
    availableDate: 'Nov 15, 2024',
    cost: '$700 night',
    rating: '4.8',
    category: 'restaurant'
  },
  {
    images: [
      'imagefile1/field1.jpg',
      'imagefile2/field2.jpg',
      'imagefile3/field3.jpg'
    ],
    location: 'Field Museum',
    distance: '25 miles away',
    availableDate: 'Dec 5, 2024',
    cost: '$950 night',
    rating: '5.0',
    category: 'museum'
  },
  {
    images: [
      'imagefile1/dollop4.webp',
      'imagefile2/dollop2.jpg',
      'imagefile3/dollop3.jpg'
    ],
    location: 'Sample',
    distance: '5 miles away',
    availableDate: 'Oct 25, 2024',
    cost: '$120 night',
    rating: '4.5'
  },
  {
    images: [
      'imagefile1/intelligentsia4.jpg',
      'imagefile2/intelligentsia2.jpg',
      'imagefile3/intelligentsia3.jpg'
    ],
    location: 'Sample',
    distance: '15 miles away',
    availableDate: 'Nov 1, 2024',
    cost: '$200 night',
    rating: '4.7'
  },
  {
    images: [
      'imagefile1/peets4.jpg',
      'imagefile2/peets2.jpg',
      'imagefile3/peets3.jpg'
    ],
    location: 'Sample',
    distance: '3 miles away',
    availableDate: 'Oct 20, 2024',
    cost: '$450 night',
    rating: '4.8'
  },
  {
    images: [
      'imagefile1/Christkindl1.jpg',
      'imagefile2/Christkindl2.jpg',
      'imagefile3/Christkindl3.jpg'
    ],
    location: 'Sample',
    distance: '10 miles away',
    availableDate: 'Nov 5, 2024',
    cost: '$300 night',
    rating: '4.6'
  },
  {
    images: [
      'imagefile1/Jacks1.jpg',
      'imagefile2/jacks2.webp',
      'imagefile3/jacks3.webp'
    ],
    location: 'Sample',
    distance: '20 miles away',
    availableDate: 'Oct 30, 2024',
    cost: '$40 night',
    rating: '4.2'
  },
  {
    images: [
      'imagefile1/offshore1.jpg',
      'imagefile2/offshore2.jpg',
      'imagefile3/offshore3.jpg'
    ],
    location: 'Sample',
    distance: '7 miles away',
    availableDate: 'Dec 1, 2024',
    cost: '$600 night',
    rating: '4.9'
  }
];


function displayListings(listings) {
  const listingsContainer = document.getElementById('listings');
  listingsContainer.innerHTML = '';

  listings.forEach((listing) => {
    const imagesHTML = listing.images.map((img, i) =>
      `<img src="${img}" alt="Image ${i + 1}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;" />`
    ).join('');

    const dotsHTML = listing.images.map((_, i) =>
      `<span class="dot ${i === 0 ? 'active' : ''}"></span>`
    ).join('');

    // Add the anchor link around each listing card
    const listingCard = `
      <a href="location.html?location=${encodeURIComponent(listing.location)}" class="listing-link">
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
          <div class="location-rating">
            <h3>${listing.location}</h3>
            <span class="rating">&#9733; ${listing.rating}</span>
          </div>
          <p>${listing.distance}</p>
          <p>${listing.availableDate}</p>
          <p><strong>${listing.cost.split(' ')[0]}</strong> night</p>
        </div>
      </a>
    `;
    listingsContainer.innerHTML += listingCard;
  });

  initializeCarousels();
}


function filterListings(category) {
  const filteredListings = listingsData.filter(listing => listing.category === category);
  displayListings(filteredListings);
}

// Event listener for each icon to trigger the filter
document.querySelectorAll('.place-options .option').forEach(option => {
  option.addEventListener('click', () => {
    const category = option.getAttribute('data-category');
    filterListings(category);
  });
});

window.onload = function() {
  displayListings(listingsData); // Display all listings initially
};






function initializeCarousels() {
  document.querySelectorAll('.listing-card').forEach(card => {
    const images = card.querySelector('.carousel-images');
    const dots = card.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalImages = images.children.length;

    function moveToImage(index) {
      currentIndex = index;
      const offset = -currentIndex * 100; // Shift container by 100% for each image
      images.style.transform = `translateX(${offset}%)`; // Move to the image at the specified index
      updateDots();
    }

    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    // Event listeners for arrow buttons
    const prevArrow = card.querySelector('.prev-arrow');
    const nextArrow = card.querySelector('.next-arrow');

    prevArrow.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents any link behavior
      moveToImage((currentIndex > 0) ? currentIndex - 1 : totalImages - 1);
    });

    nextArrow.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents any link behavior
      moveToImage((currentIndex < totalImages - 1) ? currentIndex + 1 : 0);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents any link behavior
        moveToImage(i);
      });
    });
  });
}



window.onload = function() {
  displayListings(listingsData);
};

window.onscroll = function() {
  const header = document.querySelector('header');

  if (window.scrollY > 150) {
    header.classList.add('header-minimized'); // Fix the header and minimize it
  } else {
    header.classList.remove('header-minimized'); // Restore full header
  }
};

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
