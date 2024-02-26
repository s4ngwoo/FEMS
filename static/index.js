function changeImage(imageId, newImageSrc) {
  var imageElement = document
    .getElementById(imageId)
    .getElementsByTagName('img')[0];
  imageElement.src = newImageSrc;
}
