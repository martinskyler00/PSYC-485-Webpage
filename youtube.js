// Sample data for videos, with 12 placeholder videos
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

// Function to display video thumbnails based on screen width
function displayThumbnails() {
    const thumbnailsContainer = document.querySelector('.thumbnails');
    thumbnailsContainer.innerHTML = ""; // Clear existing thumbnails

    const isSplitScreen = window.innerWidth <= 1500; // Define split-screen as width <= 1500px
    const thumbnailsToShow = isSplitScreen ? 6 : videos.length; // Show 6 or all 12 thumbnails

    videos.slice(0, thumbnailsToShow).forEach((video) => {
        const thumbnailElement = document.createElement('div');
        thumbnailElement.classList.add('thumbnail');
        
        // Add HTML for the video thumbnail with image at the top
        thumbnailElement.innerHTML = `
            <div style="position: relative;">
                <img src="${video.src}" alt="${video.title}">
                <div class="timestamp-overlay">${video.timestamp}</div> <!-- Timestamp overlay -->
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

// Function to dynamically calculate and display shorts with updated sizing for alignment
function displayShorts() {
    const shortsContainer = document.querySelector('.shorts-container');
    shortsContainer.innerHTML = ""; // Clear existing shorts

    // Calculate number of shorts to fit screen width
    const shortWidth = 160 + 20; // Adjusted width + gap
    const shortsToShow = Math.floor(window.innerWidth / shortWidth);

    videos.slice(0, shortsToShow).forEach((video) => {
        const shortElement = document.createElement('div');
        shortElement.classList.add('short');

        // Add HTML for each short
        shortElement.innerHTML = `
            <img src="${video.src}" alt="${video.title}">
            <div class="title">${video.title}</div>
        `;

        shortsContainer.appendChild(shortElement);
    });
}

// Initial load of thumbnails and shorts, update on window resize
window.onload = () => {
    displayThumbnails();
    displayShorts();
};
window.onresize = () => {
    displayThumbnails();
    displayShorts();
};

// Optional: Basic search functionality (just logs search terms)
function searchVideos() {
    const searchInput = document.getElementById('search').value;
    console.log("Searching for:", searchInput);
}

// Optional: Placeholder for voice search functionality
function voiceSearch() {
    alert("Voice search functionality coming soon!");
}
