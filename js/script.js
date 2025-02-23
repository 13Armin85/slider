function changeImage(img) {
  document.getElementById("main-image").src = img.src.replace(
    "100x60",
    "500x300"
  );
}
const toggleEnlarge = (enlarged) => {
  document.getElementById("main-image").classList.toggle("enlarged");
};
