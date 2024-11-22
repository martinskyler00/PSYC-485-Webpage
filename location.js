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
        type: '1210 S Indiana Ave, Chicago, IL 60605',
        description: 'Relaxed, modern space with community seating',
        specialties: 'Known for artisan lattes, cold brews, and freshly baked pastries',
        vibe: 'Indoor and outdoor seating available',
        amenities: 'Free WiFi, accessible outlets, pet-friendly patio',
        availableDate: 'Oct 25, 2024',
        cost: '$10-$20 person',
        rating: '3.5',
        reviews: 136,
    },
    {
        images: [
            'imagefile1/intelligentsia4.jpg',
            'imagefile2/intelligentsia2.jpg',
            'imagefile3/intelligentsia3.jpg',
            'imagefile4/intelligentsia4.jpg',
            'imagefile5/intelligentsia5.jpg'
        ],
        location: 'Intelligentsia',
        type: '3123 N Broadway, Chicago, IL 60657',
        description: 'A pioneering coffee roaster with a minimalist aesthetic and expertly crafted espresso drinks. Known for its smooth, single-origin brews and welcoming atmosphere.',
        specialties: 'Single-origin espresso, pour-overs, and fresh pastries.',
        vibe: 'Minimalist decor with a lively yet relaxed atmosphere.',
        amenities: 'WiFi, comfortable seating, pet-friendly patio',
        availableDate: 'Nov 1, 2024',
        cost: '$1-$10 person',
        rating: '4.4',
        reviews: 853,
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
        type: '1000 W North Ave. Chicago, IL 60642',
        description: 'A classic, cozy spot for handcrafted coffee and signature teas. This popular chain offers a laid-back vibe with freshly brewed coffee and friendly service.',
        specialties: 'Dark roast coffee, chai lattes, and seasonal drinks.',
        vibe: 'Warm, inviting ambiance with a focus on community.',
        amenities: 'WiFi, mobile ordering, outdoor seating',
        availableDate: 'Oct 20, 2024',
        cost: '$1-$10 person',
        rating: '4.8',
        reviews: 37,
    },
    {
        images: [
            'imagefile1/Christkindl1.jpg',
            'imagefile2/christkindl2.jpg',
            'imagefile3/christkindl3.jpg',
            'imagefile4/christkindl4.jpeg',
            'imagefile5/christkindl5.webp'
        ],
        location: 'Christkindl Market Chicago',
        type: ' 50 W Washington St, Chicago, IL 60602',
        description: 'A festive holiday market offering authentic German goods, from handcrafted gifts to warm pretzels and mulled wine. A must-visit during the holiday season.',
        specialties: 'Bratwurst, mulled wine, gingerbread cookies.',
        vibe: 'Vibrant, family-friendly holiday celebration.',
        amenities: 'Outdoor seating, seasonal decor, unique gifts',
        availableDate: 'Nov 5, 2024',
        cost: '$20 person',
        rating: '4.6',
        reviews: 52,
    },
    {
        images: [
            'imagefile1/Jacks1.jpg',
            'imagefile2/jacks2.webp',
            'imagefile3/jacks3.webp',
            'imagefile4/jacks4.webp',
            'imagefile5/jacks5.jpg'
        ],
        location: 'Jacks Pumpkin Pop Up',
        type: '1265 W Le Moyne St, Chicago, IL 60642',
        description: 'A seasonal pop-up featuring pumpkin patches, corn mazes, and Instagrammable fall backdrops. Ideal for families and friends looking to celebrate autumn.',
        specialties: 'Pumpkin spice treats, hot cider, and photo ops.',
        vibe: 'Fun, festive, and family-oriented.',
        amenities: 'Outdoor seating, seasonal decor, family-friendly activities',
        availableDate: 'Oct 30, 2024',
        cost: '$40',
        rating: '4.2',
        reviews: 18,
    },
    {
        images: [
            'imagefile1/offshore1.jpg',
            'imagefile2/offshore2.jpg',
            'imagefile3/offshore3.jpg',
            'imagefile4/offshore4.webp',
            'imagefile5/offshore5.png'
        ],
        location: 'Offshore Rooftop',
        type: '1000 E Grand Ave, Chicago, IL 60611',
        description: 'One of the largest rooftop bars in the world, offering stunning views of Lake Michigan and the Chicago skyline. Ideal for a night out with friends.',
        specialties: 'Craft cocktails, seafood dishes, and rooftop views.',
        vibe: 'Trendy, lively atmosphere with panoramic views.',
        amenities: 'Rooftop seating, full bar, live music',
        availableDate: 'Dec 1, 2024',
        cost: '$35-$50 person',
        rating: '4.9',
        reviews: 40,
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
        type: '1410 Special Olympics Dr, Chicago, IL 60605',
        description: 'Historic stadium that hosts sporting events, concerts, and festivals. A landmark venue and home to the Chicago Bears.',
        specialties: 'Football games, concerts, and guided tours.',
        vibe: 'Energetic, sports-centric, and family-friendly.',
        amenities: 'Stadium seating, parking, food vendors',
        availableDate: 'Oct 28, 2024',
        cost: '$250 person',
        rating: '4.7',
        reviews: 29,
    },
    {
        images: [
            'imagefile1/marias1.jpg',
            'imagefile2/marias2.webp',
            'imagefile3/marias3.jpg',
            'imagefile4/marias4.webp',
            'imagefile5/marias5.jpg'
        ],
        location: 'Marias Packaged Goods and Community Bar',
        type: '960 W 31st St, Chicago, IL 60608',
        description: 'A quirky neighborhood bar with a unique selection of craft beers and house-made cocktails. Known for its friendly vibe and community feel.',
        specialties: 'Craft beer, seasonal cocktails, and unique snacks.',
        vibe: 'Relaxed, eclectic, and welcoming.',
        amenities: 'Indoor seating, extensive drink selection, live music',
        availableDate: 'Nov 10, 2024',
        cost: '$10-$20 person',
        rating: '4.5',
        reviews: 33,
    },
    {
        images: [
            'imagefile1/artinstitute1.jpg',
            'imagefile2/artinstitute2.jpg',
            'imagefile3/artinstitute3.webp',
            'imagefile4/artinstitute4.webp',
            'imagefile5/artinstitute5.jpg'
        ],
        location: 'The Art Institute of Chicago',
        type: '111 S Michigan Ave, Chicago, IL 60603',
        description: 'A world-renowned museum featuring art collections spanning centuries and continents, from classical to contemporary art.',
        specialties: 'Classical paintings, impressionist works, and rotating exhibits.',
        vibe: 'Sophisticated, quiet, and educational.',
        amenities: 'Museum tours, gift shop, cafes',
        availableDate: 'Oct 22, 2024',
        cost: '$32 person',
        rating: '4.3',
        reviews: 41,
    },
    {
        images: [
            'imagefile1/pier1.jpg',
            'imagefile2/pier2.jpg',
            'imagefile3/pier3.jpg',
            'imagefile4/pier4.webp',
            'imagefile5/pier5.jpg'
        ],
        location: 'Navy Pier',
        type: '600 E Grand Ave, Chicago, IL 60611',
        description: 'A popular waterfront destination with attractions, dining, and seasonal events. Enjoy views of Lake Michigan and the Ferris wheel.',
        specialties: 'Ferris wheel rides, boat tours, and family-friendly dining.',
        vibe: 'Lively, family-oriented, and scenic.',
        amenities: 'Entertainment venues, dining, lakefront views',
        availableDate: 'Nov 2, 2024',
        cost: 'Free',
        rating: '4.6',
        reviews: 55,
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
        type: '212 S Halsted St #1, Chicago, IL 60661',
        description: 'A beloved Greek restaurant known for its authentic Mediterranean cuisine and charming outdoor patio. Perfect for a cozy dinner.',
        specialties: 'Saganaki, lamb chops, and spanakopita.',
        vibe: 'Warm, traditional, and welcoming.',
        amenities: 'Outdoor patio, full bar, Greek decor',
        availableDate: 'Nov 15, 2024',
        cost: '$25-$50 person',
        rating: '4.8',
        reviews: 60,
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
        type: '1400 S Lake Shore Dr, Chicago, IL 60605',
        description: 'A natural history museum with extensive exhibits on everything from ancient civilizations to prehistoric animals. Home to the famous T-Rex, Sue.',
        specialties: 'Dinosaur exhibits, ancient Egypt, and cultural history.',
        vibe: 'Educational, family-friendly, and awe-inspiring.',
        amenities: 'Museum tours, gift shop, cafes',
        availableDate: 'Dec 5, 2024',
        cost: '$30 person',
        rating: '5.0',
        reviews: 78,
    },
    {
        images: [
          'imagefile1/green1.jpg',
          'imagefile2/green2.jpg',
          'imagefile3/green3.jpg',
          'imagefile4/green4.jpg',
          'imagefile5/green5.jpg'
        ],
        location: 'Green Street Smoked Meats',
        type: '112 N Green St, Chicago, IL 60607',
        description: 'Rustic BBQ joint with a lively atmosphere serving up Texas-style smoked meats and hearty sides.',
        specialties: 'Brisket, pulled pork, ribs, and smoked sausages.',
        vibe: 'Casual, communal seating with a lively, buzzing atmosphere and warm, dim lighting.',
        amenities: 'Indoor seating, craft beer selection, takeout available.',
        availableDate: '11 AM - 10:30 PM',
        cost: '$20-$30 person',
        rating: '4.7',
        reviews: 83,
      },
      {
        images: [
          'imagefile4/dots4.webp',
          'imagefile2/dots2.avif',
          'imagefile3/dots3.png',
          'imagefile1/dots1.jpg',
          'imagefile5/dots5.webp'
        ],
        location: 'Three Dots and a Dash',
        type: '435 N Clark St, Chicago, IL 60654',
        description: 'An exotic tiki bar with a hidden, speakeasy vibe known for tropical cocktails and a festive atmosphere.',
        specialties: 'Elaborate tiki cocktails with fresh fruit garnishes, rum-based drinks, and shareable punch bowls.',
        vibe: 'Vibrant, tropical-themed decor with tiki torches, bamboo, and island-inspired seating.',
        amenities: 'Indoor seating, signature glassware, themed decor, reservation recommended.',
        availableDate: '4 PM - 12 AM',
        cost: '$30-$40 person',
        rating: '4.5',
        reviews: 74,
      },
      {
        images: [
          'imagefile1/maggie1.jpg',
          'imagefile2/maggie2.webp',
          'imagefile3/maggie3.webp',
          'imagefile4/maggie4.jpg',
          'imagefile5/maggie5.jpg'
        ],
        location: 'Maggie Daley Park',
        type: '337 E Randolph St, Chicago, IL 60601',
        description: 'A family-friendly park offering expansive play areas, a skating ribbon, mini-golf, and scenic views.',
        specialties: 'Rock climbing walls, skating ribbon, whimsical playgrounds, and seasonal events.',
        vibe: 'Lively, family-oriented, and open-air with plenty of green space and lake views.',
        amenities: 'Restrooms, picnic areas, bike rentals, accessibility-friendly paths.',
        availableDate: '6 AM - 9 PM',
        cost: 'Free',
        rating: '4.7',
        reviews: 88
      },
      {
        images: [
          'imagefile1/beach1.jpg',
          'imagefile4/beach4.jpeg',
          'imagefile3/beach3.jpg',
          'imagefile2/beach 2.jpg',
          'imagefile5/beach5.webp'
        ],
        location: 'North Avenue Beach',
        type: '1600 N Jean-Baptiste Point Du Sable Lake Shore Dr, Chicago, IL 60614',
        description: 'Popular Chicago beach with sand volleyball, paddleboarding, and stunning views of the city skyline.',
        specialties: 'Beach volleyball courts, paddleboard rentals, and swim areas.',
        vibe: 'Energetic, beachside atmosphere with a mix of sports, sunbathing, and social gatherings.',
        amenities: 'Restrooms, lifeguards, food vendors, rental equipment.',
        availableDate: '11 AM - 7 PM',
        cost: 'Free',
        rating: '4.0',
        reviews: 344
      },
      {
        images: [
          'imagefile1/zoo1.jpg',
          'imagefile2/zoo2.jpg',
          'imagefile3/zoo3.jpg',
          'imagefile4/zoo4.webp',
          'imagefile5/zoo5.jpg'
        ],
        location: 'Lincoln Park Zoo',
        type: '2001 N Clark St, Chicago, IL 60614',
        description: 'One of the oldest free zoos in the U.S., home to diverse animals and engaging exhibits in a lush park setting.',
        specialties: 'African lions, polar bears, primate house, and conservation programs.',
        vibe: 'Family-friendly, educational, and immersive with beautifully landscaped enclosures.',
        amenities: 'Cafes, gift shops, stroller rentals, educational exhibits, and accessible walkways.',
        availableDate: '10 AM - 5 PM',
        cost: 'Free',
        rating: '4.9',
        reviews: 640
      },
      {
        images: [
          'imagefile1/conserve1.jpg',
          'imagefile2/conserve2.jpg',
          'imagefile3/conserve3.jpg',
          'imagefile4/conserve4.jpg',
          'imagefile5/conserve5.webp'
        ],
        location: 'Lincoln Park Conservatory',
        type: '2391 N Stockton Dr, Chicago, IL 60614',
        description: 'A Victorian-era greenhouse with an impressive collection of exotic plants, including ferns, palms, and orchids.',
        specialties: 'Seasonal flower shows, rare tropical plants, and educational tours.',
        vibe: 'Serene, lush environment with high glass ceilings and carefully curated plant displays.',
        amenities: 'Indoor gardens, guided tours, gift shop, accessible pathways, and photography-friendly spots.',
        availableDate: '10 AM - 5 PM',
        cost: 'Free',
        rating: '4.8',
        reviews: 132
      }
];


const urlParams = new URLSearchParams(window.location.search);
const locationName = urlParams.get('location');

const locationTitle = document.getElementById('location-title');
const imageGallery = document.getElementById('image-gallery');
const detailsSection = document.querySelector('.details-section');
const googleReviewsLink = document.getElementById('google-reviews-link');

const listing = listingsData.find(item => item.location === locationName);

if (listing) {
    locationTitle.innerText = listing.location;

    const mainImageHTML = `<img src="${listing.images[0]}" alt="Main Image" class="main-image">`;
    const additionalImagesHTML = listing.images.slice(1, 5).map(img => 
        `<img src="${img}" alt="Thumbnail Image" class="small-image">`).join('');
    
    imageGallery.innerHTML = mainImageHTML + additionalImagesHTML;

    document.getElementById('location-type').innerText = listing.type;
    document.getElementById('location-guests').innerText = listing.description;
    document.getElementById('location-beds').innerText = listing.specialties;
    document.getElementById('location-baths').innerText = listing.vibe;
    document.getElementById('location-rating').innerText = listing.rating;
    document.getElementById('location-reviews').innerText = `${listing.reviews} reviews`;
    document.getElementById('location-amenities').innerText = listing.amenities;
    document.getElementById('location-cost').innerText = listing.cost;

    if (listing.googleReviewLink) {
        googleReviewsLink.href = listing.googleReviewLink;
    }
} else {
    locationTitle.innerText = 'Location not found';
}

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
  
    if (webpage) {
        reserveButton.onclick = () => window.open(webpage, '_blank');
      }
    }
  
  window.onload = setReserveButton;
