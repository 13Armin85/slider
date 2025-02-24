const images = [
  "../images/hero-3.jpg",
  "../images/hero-4-1030x494.jpg",
  "../images/hero-5-705x338.jpg",
  "../images/nature.jpg",
  "../images/album3-180x180.jpg",
  "../images/album2.jpg",
  "../images/album1.jpg",
  "../images/album.jpg",
];

let currentIndex = 0;

function renderImages() {
  const container = document.getElementById("image-container");
  container.innerHTML = "";
  for (let i = currentIndex; i < currentIndex + 4 && i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    img.onclick = () => changeImage(img);
    container.appendChild(img);
  }
}

document.getElementById("prev").onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderImages();
  }
};

document.getElementById("next").onclick = () => {
  if (currentIndex < images.length - 4) {
    currentIndex++;
    renderImages();
  }
};

function changeImage(img) {
  document.getElementById("main-image").src = img.src.replace(
    "100x60",
    "500x300"
  );
}

const toggleEnlarge = (enlarged) => {
  document.getElementById("main-image").classList.toggle("enlarged");
};

// Initial render
renderImages();
