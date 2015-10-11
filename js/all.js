

window.onload = function() { 
  var carrusels=document.querySelectorAll("div.carrusel");
  [].forEach.call(
    carrusels,
    function(element){
      rotateCarrusel(element);
      createMins(element);
      element.interval = setInterval(function(){rotateCarrusel(element)}, 5000);
  });
};

function rotateCarrusel(div) {
  var imgs = div.querySelectorAll(".carrusel > img");
  var pos = undefined;
  for (var i = 0; i < imgs.length; ++i) {
    var img = imgs[i];
    if (img.className != undefined && 
      img.className.match(/selected/) != null) {
      pos = i;
      img.className = img.className.replace(/selected/, "");
    }
  }
  if (pos === undefined || pos === imgs.length-1) {
    imgs[0].className += " selected";
  }
  else {
    imgs[++pos].className += " selected";
  }
}

function createMins(div) {
  var minisDiv = document.createElement("div");
  minisDiv.className="minis";
  //div.parentNode.appendChild(minisDiv);
div.appendChild(minisDiv);
  var imgs = div.querySelectorAll(".carrusel > img");
  for (var i = 0; i < imgs.length; ++i) {
    var img = imgs[i];
    var imgMiniDiv = document.createElement("div");
    imgMiniDiv.onclick= function(i, imgs){ 
      return function () {
	clearInterval(div.interval);
	div.interval = setInterval(function(){rotateCarrusel(div)}, 5000);
	selectImage(i, imgs);
      };
    }(i, imgs);
    minisDiv.appendChild(imgMiniDiv);
    var imgMini = document.createElement("img");
    imgMini.src=img.src;
    imgMiniDiv.appendChild(imgMini);
  }
}

function selectImage(index,imgs) {
  for (var i = 0; i < imgs.length; ++i) {
    var img = imgs[i];
    if (img.className != undefined && 
      img.className.match(/selected/) != null) {
      img.className = img.className.replace(/selected/, "");
    }
  }
  imgs[index].className += " selected";
}