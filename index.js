
function showImage(imageUrl) {
  var imgPopup = document.getElementById("imgPopup");
  imgPopup.src = imageUrl;
  imgPopup.style.display = "flex";
}

function hideImage() {
  var imgPopup = document.getElementById("imgPopup");
  imgPopup.style.display = "none";
  
}
