const listingsData = [
  {
    images: [
      'imagefile1/dollop1.jpg',
      'https://via.placeholder.com/400x300?text=Apartment+Image+2',
      'https://via.placeholder.com/400x300?text=Apartment+Image+3'
    ],
    location: 'Dollop Coffee Co.',
    distance: '5 miles away',
    availableDate: 'Oct 25, 2024',
    cost: '$120 night',
    rating: '4.5'
  },
  {
    images: [
      'imagefile1/intelligentsia1.jpg',
      'https://via.placeholder.com/400x300?text=Cottage+Image+2',
      'https://via.placeholder.com/400x300?text=Cottage+Image+3'
    ],
    location: 'Intelligentsia',
    distance: '15 miles away',
    availableDate: 'Nov 1, 2024',
    cost: '$200 night',
    rating: '4.7'
  },
  {
    images: [
      'imagefile1/peets1.jpg',
      'https://via.placeholder.com/400x300?text=Villa+Image+2',
      'https://via.placeholder.com/400x300?text=Villa+Image+3'
    ],
    location: 'Peets Coffee',
    distance: '3 miles away',
    availableDate: 'Oct 20, 2024',
    cost: '$450 night',
    rating: '4.8'
  },
  {
    images: [
      'imagefile1/Christkindl1.jpg',
      'https://via.placeholder.com/400x300?text=Cabin+Image+2',
      'https://via.placeholder.com/400x300?text=Cabin+Image+3'
    ],
    location: 'Christkindl Market Chicago',
    distance: '10 miles away',
    availableDate: 'Nov 5, 2024',
    cost: '$300 night',
    rating: '4.6'
  },
  {
    images: [
      'imagefile1/Jacks1.jpg',
      'https://via.placeholder.com/400x300?text=Hostel+Image+2',
      'https://via.placeholder.com/400x300?text=Hostel+Image+3'
    ],
    location: 'Jacks Pumpkin Pop Up',
    distance: '20 miles away',
    availableDate: 'Oct 30, 2024',
    cost: '$40 night',
    rating: '4.2'
  },
  {
    images: [
      'imagefile1/offshore1.jpg',
      'https://via.placeholder.com/400x300?text=Bungalow+Image+2',
      'https://via.placeholder.com/400x300?text=Bungalow+Image+3'
    ],
    location: 'Offshore Rooftop',
    distance: '7 miles away',
    availableDate: 'Dec 1, 2024',
    cost: '$600 night',
    rating: '4.9'
  },
  {
    images: [
      'imagefile1/soldier1.jpg',
      'https://via.placeholder.com/400x300?text=Treehouse+Image+2',
      'https://via.placeholder.com/400x300?text=Treehouse+Image+3'
    ],
    location: 'Soldier Field',
    distance: '12 miles away',
    availableDate: 'Oct 28, 2024',
    cost: '$250 night',
    rating: '4.7'
  },
  {
    images: [
      'https://via.placeholder.com/400x300?text=Farmstay+Image+1',
      'https://via.placeholder.com/400x300?text=Farmstay+Image+2',
      'https://via.placeholder.com/400x300?text=Farmstay+Image+3'
    ],
    location: 'Tuscany, Italy',
    distance: '30 miles away',
    availableDate: 'Nov 10, 2024',
    cost: '$180 night',
    rating: '4.5'
  },
  {
    images: [
      'https://via.placeholder.com/400x300?text=Tiny+House+Image+1',
      'https://via.placeholder.com/400x300?text=Tiny+House+Image+2',
      'https://via.placeholder.com/400x300?text=Tiny+House+Image+3'
    ],
    location: 'Portland, USA',
    distance: '2 miles away',
    availableDate: 'Oct 22, 2024',
    cost: '$90 night',
    rating: '4.3'
  },
  {
    images: [
      'https://via.placeholder.com/400x300?text=Boat+Image+1',
      'https://via.placeholder.com/400x300?text=Boat+Image+2',
      'https://via.placeholder.com/400x300?text=Boat+Image+3'
    ],
    location: 'Amsterdam, Netherlands',
    distance: '8 miles away',
    availableDate: 'Nov 2, 2024',
    cost: '$320 night',
    rating: '4.6'
  },
  {
    images: [
      'https://via.placeholder.com/400x300?text=Penthouse+Image+1',
      'https://via.placeholder.com/400x300?text=Penthouse+Image+2',
      'https://via.placeholder.com/400x300?text=Penthouse+Image+3'
    ],
    location: 'Los Angeles, USA',
    distance: '5 miles away',
    availableDate: 'Nov 15, 2024',
    cost: '$700 night',
    rating: '4.8'
  },
  {
    images: [
      'https://via.placeholder.com/400x300?text=Castle+Image+1',
      'https://via.placeholder.com/400x300?text=Castle+Image+2',
      'https://via.placeholder.com/400x300?text=Castle+Image+3'
    ],
    location: 'Edinburgh, Scotland',
    distance: '25 miles away',
    availableDate: 'Dec 5, 2024',
    cost: '$950 night',
    rating: '5.0'
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
        <div class="location-rating">
          <h3>${listing.location}</h3>
          <span class="rating">&#9733; ${listing.rating}</span> <!-- Black star icon with rating -->
        </div>
        <p>${listing.distance}</p>
        <p>${listing.availableDate}</p>
        <p><strong>${listing.cost.split(' ')[0]}</strong> night</p>
      </div>
    `;
    listingsContainer.innerHTML += listingCard;
  });

  initializeCarousels();
}







function initializeCarousels() {
  document.querySelectorAll('.listing-card').forEach(card => {
    const images = card.querySelector('.carousel-images');
    const dots = card.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalImages = images.children.length;

  function moveToImage(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

    card.querySelector('.prev-arrow').addEventListener('click', () => {
      moveToImage((currentIndex > 0) ? currentIndex - 1 : totalImages - 1);
    });

    card.querySelector('.next-arrow').addEventListener('click', () => {
      moveToImage((currentIndex < totalImages - 1) ? currentIndex + 1 : 0);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => moveToImage(i));
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
