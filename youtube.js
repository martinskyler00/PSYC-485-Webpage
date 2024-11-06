const recommendVideos = [
    { title: "What are Input Controls?", description: "", videoID: "D-jl1E-_WBE", views: "views", timestamp: "27:15" },
    { title: "What is Container in User Interface(UI) Design", description: "", videoID: "POtqGPrjdMI", views: "views", timestamp: "27:15" },
    { title: "UI Design Essentials: Creating Buttons in Design Systems", description: "", videoID: "jts39CN4fLk", views: "views", timestamp: "14:48" },
    { title: "UI and UX Design Course: Navigation", description: "", videoID: "-Iwf6tecoZ8", views: "views", timestamp: "00:07" },
    { title: "Toggle or Checkbox? UI Design Tips 6", description: "", videoID: "ZpROQCLO56Q", views: "views", timestamp: "17:53" },
    { title: "Material UI Tutorial #7 - Text Fields", description: "", videoID: "sTdt2cJS2dg", views: "views", timestamp: "14:35" },
    { title: "UI Elements/Components | Types and Importance of UI Elements", description: "", videoID: "roF6ocfArK0", views: "views", timestamp: "8:20" },
    { title: "Create a DROPDOWN MENU in Figma (Tutorial)", description: "", videoID: "uI3k9Ol-Mp4", views: "views", timestamp: "5:40" },
    { title: "Create Interactive Radio Buttons in Figma-2 Methods (Free Project Files Included)", description: "", videoID: "mWIJghK6YiM", views: "views", timestamp: "12:05" },
    { title: "Daily UI - Day 056 - Breadcrumbs", description: "", videoID: "1zSKJgzd5fw", views: "views", timestamp: "15:45" },
    { title: "Slider UI Animation Tutorial - Adding Motion to your Designs", description: "", videoID: "PECpQBSnEIQ", views: "views", timestamp: "9:50" },
    { title: "How to use icons in UI design", description: "", videoID: "L9keN02a_qw", views: "views", timestamp: "20:00" },
];

const shortVideos = [
  { title: "What do UX Designers actually do? Ft. Microsoft UX Designer", description: "", videoID: "2Q9pFMwi3cs", views: "views", timestamp: "27:15" },
  { title: "The Future of UI/UX Design", description: "", videoID: "SRWLLJ6h5l4", views: "views", timestamp: "27:15" },
  { title: "App UI Design with Adobe XD", description: "", videoID: "mZvB7ksm9PI", views: "views", timestamp: "14:48" },
  { title: "What is UI and UX Design?", description: "", videoID: "rKqwGUMGbq8", views: "views", timestamp: "00:07" },
  { title: "The Difference between UI and UX Design", description: "", videoID: "Ar_rFTRO8P4", views: "views", timestamp: "17:53" },
  { title: "Unveiling UI/UX Designers' Psychology Hacks!", description: "", videoID: "7-CEqe3IZmo", views: "views", timestamp: "14:35" },
  { title: "Color Psychology Hacks for Stunning UI/UX Design", description: "", videoID: "LvVyNzLTlZU", views: "views", timestamp: "8:20" },
  { title: "How Does Psychology In UI/UX Affect User Behavior?|Intellipaat", description: "", videoID: "elje7bnAL-s", views: "views", timestamp: "5:40" },
  { title: "7 Psychology Rules in UX Design and Product Design", description: "", videoID: "2voBm_EWldw", views: "views", timestamp: "12:05" },
];



function displayThumbnails() {
  const topThumbnailsContainer = document.querySelector('.top-thumbnails');
  const bottomThumbnailsContainer = document.querySelector('.bottom-thumbnails');
  topThumbnailsContainer.innerHTML = "";
  bottomThumbnailsContainer.innerHTML = "";

  const screenWidth = window.innerWidth;

  // If full screen (greater than 1500px), display all 12 videos in one container with 6 per row
  if (screenWidth > 1500) {
    recommendVideos.forEach((video) => {
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      thumbnailElement.innerHTML = `
        <a href="playback.html?videoID=${video.videoID}">
          <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="video-thumbnail" />
          <div class="info">
            <div class="title">${video.title}</div>
          </div>
        </a>
      `;
      topThumbnailsContainer.appendChild(thumbnailElement);
    });
    // Hide bottom-thumbnails section when in full screen
    bottomThumbnailsContainer.parentElement.style.display = 'none';
  } else {
    // If split screen or smaller, split videos into two sections
    const topVideos = recommendVideos.slice(0, 6); // First 6 videos
    const bottomVideos = recommendVideos.slice(6); // Last 6 videos

    // Show both sections for split screen
    topVideos.forEach((video) => {
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      thumbnailElement.innerHTML = `
        <a href="playback.html?videoID=${video.videoID}">
          <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="video-thumbnail" />
          <div class="info">
            <div class="title">${video.title}</div>
          </div>
        </a>
      `;
      topThumbnailsContainer.appendChild(thumbnailElement);
    });

    bottomVideos.forEach((video) => {
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      thumbnailElement.innerHTML = `
        <a href="playback.html?videoID=${video.videoID}">
          <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="video-thumbnail" />
          <div class="info">
            <div class="title">${video.title}</div>
          </div>
        </a>
      `;
      bottomThumbnailsContainer.appendChild(thumbnailElement);
    });

    // Show bottom-thumbnails section when in split screen
    bottomThumbnailsContainer.parentElement.style.display = 'block';
  }
}

// Call `displayThumbnails` on load and on window resize
window.onload = displayThumbnails;
window.onresize = displayThumbnails;








function displayShorts() {
  const shortsContainer = document.querySelector('.shorts-container');
  shortsContainer.innerHTML = "";

  const screenWidth = window.innerWidth;
  let shortsToShow;

  // Limit the number of shorts displayed based on screen size
  if (screenWidth > 1500) {
    shortsToShow = shortVideos.length; // Show all shorts on full screen
  } else {
    shortsToShow = 5; // Show only 5 shorts on split screen or smaller
  }

  // Display only the specified number of shorts
  shortVideos.slice(0, shortsToShow).forEach((video) => {
    const shortElement = document.createElement('div');
    shortElement.classList.add('short');

    shortElement.innerHTML = `
      <a href="playback.html?videoID=${video.videoID}">
        <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="short-thumbnail" />
      </a>
    `;

    shortsContainer.appendChild(shortElement);
  });
}

// Call `displayShorts` on load and on window resize to ensure responsiveness
window.onload = function() {
  displayThumbnails();
  displayShorts();
};

window.onresize = function() {
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





