const videos = [
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

function displayThumbnails() {
  const thumbnailsContainer = document.querySelector('.thumbnails');
  thumbnailsContainer.innerHTML = "";

  const screenWidth = window.innerWidth;
  let thumbnailsToShow;

  if (screenWidth > 1500) {
      thumbnailsToShow = 12;
  } else if (screenWidth <= 1500 && screenWidth > 768) {
      thumbnailsToShow = 6;
  } else if (screenWidth <= 768 && screenWidth > 480) {
      thumbnailsToShow = 2;
  } else {
      thumbnailsToShow = 1;
  }

  videos.slice(0, thumbnailsToShow).forEach((video) => {
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      
      thumbnailElement.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${video.videoID}" 
                  width="100%" height="180" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen style="border-radius: 12px;"></iframe>
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
          <iframe src="https://www.youtube.com/embed/${video.videoID}" 
                  width="100%" height="180" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen style="border-radius: 12px;"></iframe>
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