const videos = [
    { title: "Watch The Old Man Now", description: "Sponsored - Hulu", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "1.5M views", timestamp: "27:15" },
    { title: "JUMPING OFF BUILDINGS!", description: "MM7Games • 8 years ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "1.6M views", timestamp: "27:15" },
    { title: "Bluecoats 2022 Tuba Cam", description: "Futo Fujikura • 2 years ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "39K views", timestamp: "14:48" },
    { title: "It’s REESE'S Season", description: "Sponsored - Reeses", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "529K views • 1 year ago", timestamp: "00:07" },
    { title: "Clowning KSI Song", description: "PresidentLightSkin • 3 days ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "143 views", timestamp: "17:53" },
    { title: "Impractical Jokers Funniest Moments", description: "Koala Buddy • 7 days ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "89K views", timestamp: "14:35" },
    { title: "Amazing Drone Footage", description: "Drone World • 1 month ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "500K views", timestamp: "8:20" },
    { title: "10 Tips for Better Sleep", description: "Health Today • 1 week ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "1.2M views", timestamp: "5:40" },
    { title: "World’s Fastest Cars", description: "Car Mania • 2 months ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "3.4M views", timestamp: "12:05" },
    { title: "Beginner’s Guide to Investing", description: "Finance Explained • 1 year ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "1M views", timestamp: "15:45" },
    { title: "Top 10 Places to Visit", description: "Travel Guide • 3 weeks ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "900K views", timestamp: "9:50" },
    { title: "Yoga for Beginners", description: "Fit & Healthy • 6 months ago", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "2M views", timestamp: "20:00" },
];

function displayThumbnails() {
  const thumbnailsContainer = document.querySelector('.thumbnails');
  thumbnailsContainer.innerHTML = "";

  const isSplitScreen = window.innerWidth <= 1500;
  const thumbnailsToShow = isSplitScreen ? 6 : videos.length;

  videos.slice(0, thumbnailsToShow).forEach((video) => {
    const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      thumbnailElement.innerHTML = `
        <div style="position: relative;">
          <img src="${video.src}" alt="${video.title}">
          <div class="timestamp-overlay">${video.timestamp}</div>
        </div>
        <div class="info">
          <div class="title">${video.title}</div>
          <div class="description">${video.description}</div>
          <div class="extra-info">
              <span class="views">${video.views}</span>
          </div>
        </div>
        `;
      thumbnailsContainer.appendChild(thumbnailElement);
    });
}

function displayShorts() {
  const shortsContainer = document.querySelector('.shorts-container');
  shortsContainer.innerHTML = "";

  const shortsToShow = window.innerWidth > 1500 ? 9 : 5;

  videos.slice(0, shortsToShow).forEach((video) => {
    const shortElement = document.createElement('div');
      shortElement.classList.add('short');
      shortElement.innerHTML = `
          <img src="${video.src}" alt="${video.title}">
          <div class="title">${video.title}</div>
        `;
      shortsContainer.appendChild(shortElement);
    });
}

window.onload = window.onresize = () => {
  displayThumbnails();
  displayShorts();
};

function searchVideos() {
  const searchInput = document.getElementById('search').value;
  console.log("Searching for:", searchInput);
}

function voiceSearch() {
  alert("Voice search functionality coming soon!");
}