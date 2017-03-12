window.onload = function() {
  setTimeout(scrollTo, 100, 0, 1);
}

function changeImg(image, select) {
  var img = new Array();
  img[0] = new Image();
  img[0].src = "https://placehold.jp/250x150.png";
  img[1] = new Image();
  img[1].src = "https://placehold.jp/100x150.png";
  img[2] = new Image();
  img[2].src=  "https://placehold.jp/150x150.png";
  console.log(image+":image");
  console.log(select+":select");
  document.getElementById("changeImage"+image).src=img[select].src;
}
