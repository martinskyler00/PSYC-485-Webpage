const videos = [
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "27:15" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "27:15" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "14:48" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "00:07" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "17:53" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "14:35" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "8:20" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "5:40" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "12:05" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "15:45" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "9:50" },
    { title: "Title Placeholder", description: "Description Placeholder", src: "https://via.placeholder.com/300x200.png?text=Video+Placeholder", views: "views", timestamp: "20:00" },
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