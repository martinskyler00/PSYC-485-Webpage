// location.js

const listingsData = [
    {
        images: [
            'imagefile1/dollop4.webp',
            'imagefile2/dollop2.jpg',
            'imagefile3/dollop3.jpg',
            'imagefile4/dollop5.jpg',
            'imagefile5/dollop6.jpg'
        ],
        location: 'Dollop Coffee Co.',
        type: '1210 S Indiana Ave',
        guests: 6,
        beds: 3,
        baths: 2,
        amenities: 'Pool, Fireplace, Fitness Center',
        distance: '5 miles away',
        availableDate: 'Oct 25, 2024',
        cost: '$10-$20 person',
        rating: '3.5',
        reviews: 136,
        category: 'coffee'
    },
    {
        images: [
            'imagefile1/intelligentsia4.jpg',
            'imagefile2/intelligentsia2.jpg',
            'imagefile3/intelligentsia3.jpg',
            'imagefile4/intelligentsia5.jpg',
            'imagefile5/intelligentsia6.jpg'
        ],
        location: 'Intelligentsia',
        type: '3123 N Broadway',
        guests: 6,
        beds: 2,
        baths: 1,
        amenities: 'WiFi, Coffee Machine, Heating',
        availableDate: 'Nov 1, 2024',
        cost: '$1-$10 person',
        rating: '4.4',
        reviews: 853,
        category: 'coffee'
    },
    {
        images: [
            'imagefile1/peets4.jpg',
            'imagefile2/peets2.jpg',
            'imagefile3/peets3.jpg',
            'imagefile4/peets5.jpg',
            'imagefile5/peets6.jpg'
        ],
        location: 'Peets Coffee',
        type: 'Private room in rental unit',
        guests: 2,
        beds: 1,
        baths: 1,
        amenities: 'Air Conditioning, WiFi, Kitchen',
        distance: '3 miles away',
        availableDate: 'Oct 20, 2024',
        cost: '$450',
        rating: '4.8',
        reviews: 37,
        category: 'coffee'
    },
    {
        images: [
            'imagefile1/Christkindl1.jpg',
            'imagefile2/Christkindl2.jpg',
            'imagefile3/Christkindl3.jpg',
            'imagefile4/Christkindl4.jpg',
            'imagefile5/Christkindl5.jpg'
        ],
        location: 'Christkindl Market Chicago',
        type: 'Entire rental unit',
        guests: 10,
        beds: 4,
        baths: 3,
        amenities: 'Fireplace, Heating, Near Attractions',
        distance: '10 miles away',
        availableDate: 'Nov 5, 2024',
        cost: '$300',
        rating: '4.6',
        reviews: 52,
        category: 'seasonal'
    },
    {
        images: [
            'imagefile1/Jacks1.jpg',
            'imagefile2/jacks2.webp',
            'imagefile3/jacks3.webp',
            'imagefile4/jacks4.webp',
            'imagefile5/jacks5.webp'
        ],
        location: 'Jacks Pumpkin Pop Up',
        type: 'Shared room in apartment',
        guests: 4,
        beds: 2,
        baths: 1,
        amenities: 'Outdoor Seating, Seasonal Decor, Family Friendly',
        distance: '20 miles away',
        availableDate: 'Oct 30, 2024',
        cost: '$40',
        rating: '4.2',
        reviews: 18,
        category: 'seasonal'
    },
    {
        images: [
            'imagefile1/offshore1.jpg',
            'imagefile2/offshore2.jpg',
            'imagefile3/offshore3.jpg',
            'imagefile4/offshore4.jpg',
            'imagefile5/offshore5.jpg'
        ],
        location: 'Offshore Rooftop',
        type: 'Entire rental unit',
        guests: 5,
        beds: 2,
        baths: 2,
        amenities: 'Rooftop, Pool, City Views',
        distance: '7 miles away',
        availableDate: 'Dec 1, 2024',
        cost: '$600',
        rating: '4.9',
        reviews: 40,
        category: 'restaurant'
    },
    {
        images: [
            'imagefile1/soldier1.jpg',
            'imagefile2/soldier2.jpg',
            'imagefile3/soldier3.webp',
            'imagefile4/soldier4.jpg',
            'imagefile5/soldier5.jpg'
        ],
        location: 'Soldier Field',
        type: 'Private room in house',
        guests: 3,
        beds: 1,
        baths: 1,
        amenities: 'Stadium Access, Parking, Heating',
        distance: '12 miles away',
        availableDate: 'Oct 28, 2024',
        cost: '$250',
        rating: '4.7',
        reviews: 29,
        category: 'attraction'
    },
    {
        images: [
            'imagefile1/marias1.jpg',
            'imagefile2/marias2.webp',
            'imagefile3/marias3.jpg',
            'imagefile4/marias4.jpg',
            'imagefile5/marias5.jpg'
        ],
        location: 'Marias Packaged Goods and Community Bar',
        type: 'Entire rental unit',
        guests: 4,
        beds: 2,
        baths: 1,
        amenities: 'Bar Access, WiFi, Heating',
        distance: '30 miles away',
        availableDate: 'Nov 10, 2024',
        cost: '$180',
        rating: '4.5',
        reviews: 33,
        category: 'bars'
    },
    {
        images: [
            'imagefile1/artinstitute1.jpg',
            'imagefile2/artinstitute2.jpg',
            'imagefile3/artinstitute3.webp',
            'imagefile4/artinstitute4.jpg',
            'imagefile5/artinstitute5.jpg'
        ],
        location: 'The Art Institute of Chicago',
        type: 'Entire apartment',
        guests: 6,
        beds: 3,
        baths: 2,
        amenities: 'Art Exhibits, Museum Proximity, Free WiFi',
        distance: '2 miles away',
        availableDate: 'Oct 22, 2024',
        cost: '$90',
        rating: '4.3',
        reviews: 41,
        category: 'museum'
    },
    {
        images: [
            'imagefile1/pier1.jpg',
            'imagefile2/pier2.jpg',
            'imagefile3/pier3.jpg',
            'imagefile4/pier4.jpg',
            'imagefile5/pier5.jpg'
        ],
        location: 'Navy Pier',
        type: 'Private room in apartment',
        guests: 2,
        beds: 1,
        baths: 1,
        amenities: 'Lake Views, Near Attractions, Entertainment Options',
        distance: '8 miles away',
        availableDate: 'Nov 2, 2024',
        cost: '$320',
        rating: '4.6',
        reviews: 55,
        category: 'attractions'
    },
    {
        images: [
            'imagefile1/athena1.jpg',
            'imagefile2/athena2.png',
            'imagefile3/athena3.jpg',
            'imagefile4/athena4.jpg',
            'imagefile5/athena5.jpg'
        ],
        location: 'Athena Greek Restaurant',
        type: 'Entire rental unit',
        guests: 8,
        beds: 4,
        baths: 3,
        amenities: 'Greek Cuisine, Patio, Near Restaurants',
        distance: '5 miles away',
        availableDate: 'Nov 15, 2024',
        cost: '$700',
        rating: '4.8',
        reviews: 60,
        category: 'restaurant'
    },
    {
        images: [
            'imagefile1/field1.jpg',
            'imagefile2/field2.jpg',
            'imagefile3/field3.jpg',
            'imagefile4/field4.jpg',
            'imagefile5/field5.jpg'
        ],
        location: 'Field Museum',
        type: 'Entire rental unit',
        guests: 12,
        beds: 5,
        baths: 4,
        amenities: 'Museum Access, Guided Tours, Free Parking',
        distance: '25 miles away',
        availableDate: 'Dec 5, 2024',
        cost: '$950',
        rating: '5.0',
        reviews: 78,
        category: 'museum'
    }
];


const urlParams = new URLSearchParams(window.location.search);
const locationName = urlParams.get('location');

// Select elements for dynamic content
const locationTitle = document.getElementById('location-title');
const imageGallery = document.getElementById('image-gallery');
const detailsSection = document.querySelector('.details-section');
const googleReviewsLink = document.getElementById('google-reviews-link');

// Find the listing based on location name
const listing = listingsData.find(item => item.location === locationName);

if (listing) {
    // Update the page title and header with the listing's name
    locationTitle.innerText = listing.location;

    // Populate images into the gallery
    const mainImageHTML = `<img src="${listing.images[0]}" alt="Main Image" class="main-image">`;
    const additionalImagesHTML = listing.images.slice(1, 5).map(img => 
        `<img src="${img}" alt="Thumbnail Image" class="small-image">`).join('');
    
    imageGallery.innerHTML = mainImageHTML + additionalImagesHTML;

    // Populate the details section with the listing's details
    document.getElementById('location-type').innerText = listing.type;
    document.getElementById('location-guests').innerText = listing.guests;
    document.getElementById('location-beds').innerText = listing.beds;
    document.getElementById('location-baths').innerText = listing.baths;
    document.getElementById('location-rating').innerText = listing.rating;
    document.getElementById('location-reviews').innerText = `${listing.reviews} reviews`;
    document.getElementById('location-amenities').innerText = listing.amenities;
    document.getElementById('location-cost').innerText = listing.cost;

    // Set the Google reviews link
    if (listing.googleReviewLink) {
        googleReviewsLink.href = listing.googleReviewLink;
    }
} else {
    locationTitle.innerText = 'Location not found';
}


// JavaScript in location.html
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      location: params.get('location'),
      webpage: params.get('webpage')
    };
  }
  
  function setReserveButton() {
    const { webpage } = getQueryParams();
    const reserveButton = document.getElementById('reserve-btn');
  
    // Set the Reserve button link to the webpage
    if (webpage) {
        reserveButton.onclick = () => window.open(webpage, '_blank');
      }
    }
  
  // Initialize on page load
  window.onload = setReserveButton;
