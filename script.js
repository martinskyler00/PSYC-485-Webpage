const listingsData = [
  {
    images: [
      'imagefile1/dollop4.webp',
      'imagefile2/dollop2.jpg',
      'imagefile3/dollop3.jpg'
    ],
    location: 'Dollop Coffee Co.',
    distance: '1210 S Indiana Ave',
    availableDate: '7 AM - 2 PM',
    cost: '$10-$20 person',
    rating: '3.5',
    webpage: 'https://www.dollopcoffee.com/',
    category: 'coffee'
  },
  {
    images: [
      'imagefile1/intelligentsia4.jpg',
      'imagefile2/intelligentsia2.jpg',
      'imagefile3/intelligentsia3.jpg'
    ],
    location: 'Intelligentsia',
    distance: '3123 N Broadway',
    availableDate: '7 AM - 7 PM',
    cost: '$1-$10 person',
    rating: '4.4',
    webpage: 'https://www.intelligentsia.com/pages/broadway-coffeebar',
    category: 'coffee'
  },
  {
    images: [
      'imagefile1/peets4.jpg',
      'imagefile2/peets2.jpg',
      'imagefile3/peets3.jpg'
    ],
    location: 'Peets Coffee',
    distance: '1000 W North Ave',
    availableDate: '6 AM - 5 PM',
    cost: '$1-$10 person',
    rating: '4.4',
    webpage: 'https://www.peets.com/pages/store-locator?stockist-query=Chicago,%20IL,%20USA&selected=Sheffield',
    category: 'coffee'
  },
  {
    images: [
      'imagefile1/Christkindl1.jpg',
      'imagefile2/christkindl2.jpg',
      'imagefile3/christkindl3.jpg'
    ],
    location: 'Christkindl Market Chicago',
    distance: '50 W Washington St',
    availableDate: 'Temporarily Closed',
    cost: '$20 person',
    rating: '4.3',
    webpage: 'https://www.christkindlmarket.com/daleyplaza/',
    category: 'seasonal'
  },
  {
    images: [
      'imagefile1/Jacks1.jpg',
      'imagefile2/jacks2.webp',
      'imagefile3/jacks3.webp'
    ],
    location: 'Jacks Pumpkin Pop Up',
    distance: '1265 W Le Moyne St',
    availableDate: 'Temporarily Closed',
    cost: '$40 person',
    rating: '3.9',
    webpage: 'https://www.jackspumpkinpopup.com/',
    category: 'seasonal'
  },
  {
    images: [
      'imagefile1/offshore1.jpg',
      'imagefile2/offshore2.jpg',
      'imagefile3/offshore3.jpg'
    ],
    location: 'Offshore Rooftop',
    distance: '1000 E Grand Ave',
    availableDate: '12 PM - 8 PM',
    cost: '$35-$50 person',
    rating: '3.8',
    webpage: 'https://www.offshorerooftop.com/',
    category: 'restaurant'
  },
  {
    images: [
      'imagefile1/soldier1.jpg',
      'imagefile2/soldier2.jpg',
      'imagefile3/soldier3.webp'
    ],
    location: 'Soldier Field',
    distance: '1410 Special Olympics Dr',
    availableDate: 'Open',
    cost: '$250 person',
    rating: '4.5',
    webpage: 'https://www.soldierfield.com/',
    category: 'attractions'
  },
  {
    images: [
      'imagefile1/marias1.jpg',
      'imagefile2/marias2.webp',
      'imagefile3/marias3.jpg'
    ],
    location: 'Marias Packaged Goods and Community Bar',
    distance: '960 W 31st St',
    availableDate: '3 PM - 12 AM',
    cost: '$10-$20 person',
    rating: '4.6',
    webpage: 'https://www.community-bar.com/',
    category: 'bars'
  },
  {
    images: [
      'imagefile1/artinstitute1.jpg',
      'imagefile2/artinstitute2.jpg',
      'imagefile3/artinstitute3.webp'
    ],
    location: 'The Art Institute of Chicago',
    distance: '111 S Michigan Ave',
    availableDate: '11 AM - 5 PM',
    cost: '$32 person',
    rating: '4.8',
    webpage: 'https://www.artic.edu/',
    category: 'museum'
  },
  {
    images: [
      'imagefile1/pier1.jpg',
      'imagefile2/pier2.jpg',
      'imagefile3/pier3.jpg'
    ],
    location: 'Navy Pier',
    distance: '600 E Grand Ave',
    availableDate: '11 AM - 9 PM',
    cost: 'Free',
    rating: '4.6',
    webpage: 'https://navypier.org/',
    category: 'attractions'
  },
  {
    images: [
      'imagefile1/athena1.jpg',
      'imagefile2/athena2.png',
      'imagefile3/athena3.jpg'
    ],
    location: 'Athena Greek Restaurant',
    distance: '212 S Halsted St',
    availableDate: '11 AM - 9 PM',
    cost: '$25-$50 person',
    rating: '4.4',
    webpage: 'https://www.athenachicago.com/',
    category: 'restaurant'
  },
  {
    images: [
      'imagefile1/field1.jpg',
      'imagefile2/field2.jpg',
      'imagefile3/field3.jpg'
    ],
    location: 'Field Museum',
    distance: '1400 S Lake Shore Dr',
    availableDate: '9 AM - 5 PM',
    cost: '$30 person',
    rating: '4.7',
    webpage: 'https://www.fieldmuseum.org/?gad_source=1&gclid=Cj0KCQiAlsy5BhDeARIsABRc6ZuCWlAdAZmXpuSfrKo5l69QvOf7K7hi8yYS_PzE7KTnai_wYqbG7zMaAkZmEALw_wcB',
    category: 'museum'
  },
  {
    images: [
      'imagefile4/green4.jpg',
      'imagefile2/green2.jpg',
      'imagefile5/green5.jpg'
    ],
    location: 'Green Street Smoked Meats',
    distance: '112 N Green St',
    availableDate: '11 AM - 10:30 PM',
    cost: '$20-$30 person',
    rating: '4.7',
    webpage: 'https://www.greenstreetmeats.com/',
    category: 'restaurant'
  },
  {
    images: [
      'imagefile4/dots4.webp',
      'imagefile2/dots2.avif',
      'imagefile3/dots3.png'
    ],
    location: 'Three Dots and a Dash',
    distance: '435 N Clark St',
    availableDate: '4 PM - 12 AM',
    cost: '$30-$40 person',
    webpage: 'https://www.threedotschicago.com/',
    rating: '4.5',
    category: 'bars'
  },
  {
    images: [
      'imagefile1/maggie1.jpg',
      'imagefile2/maggie2.webp',
      'imagefile3/maggie3.webp'
    ],
    location: 'Maggie Daley Park',
    distance: '337 E Randolph St',
    availableDate: '6 AM - 9 PM',
    cost: 'Free',
    webpage: 'https://maggiedaleypark.com/',
    rating: '4.7',
    category: 'park'
  },
  {
    images: [
      'imagefile1/beach1.jpg',
      'imagefile4/beach4.jpeg',
      'imagefile3/beach3.jpg'
    ],
    location: 'North Avenue Beach',
    distance: '1600 N Jean-Baptiste Point Du Sable Lake Shore Dr',
    availableDate: '11 AM - 7 PM',
    cost: 'Free',
    webpage: 'https://www.chicagoparkdistrict.com/parks-facilities/north-avenue-beach',
    rating: '4.0',
    category: 'beach'
  },
  {
    images: [
      'imagefile1/zoo1.jpg',
      'imagefile2/zoo2.jpg',
      'imagefile3/zoo3.jpg'
    ],
    location: 'Lincoln Park Zoo',
    distance: '2001 N Clark St',
    availableDate: '10 AM - 5 PM',
    cost: 'Free',
    webpage: 'https://www.lpzoo.org/',
    rating: '4.9',
    category: 'zoo'
  },
  {
    images: [
      'imagefile1/conserve1.jpg',
      'imagefile2/conserve2.jpg',
      'imagefile3/conserve3.jpg'
    ],
    location: 'Lincoln Park Conservatory',
    distance: '2391 N Stockton Dr',
    availableDate: '10 AM - 5 PM',
    cost: 'Free',
    webpage: 'https://www.lincolnparkconservancy.org/projects/conservatory-garden/',
    rating: '4.8',
    category: 'conservatory'
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

    // Pass the `webpage` URL as a query parameter
    const listingCard = `
      <a href="location.html?location=${encodeURIComponent(listing.location)}&webpage=${encodeURIComponent(listing.webpage)}" class="listing-link">
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
          <p><strong>${listing.cost.split(' ')[0]}</strong> person</p>
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
