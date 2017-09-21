// Carousel Enhacements:
// -------------------------------------
if(document.querySelector(".carousel")){
  document.querySelector(".carousel-control.left").style.backgroundImage = carousel.pointer === 0 ? `url("/assets/images/carousel-img-${carousel.content.length-1}.jpg")` : `url("/assets/images/carousel-img-${carousel.pointer - 1}.jpg")`;
  document.querySelector(".carousel-control.right").style.backgroundImage = carousel.pointer === carousel.content.length-1 ? `url("/assets/images/carousel-img-${0}.jpg")` : `url("/assets/images/carousel-img-${carousel.pointer + 1}.jpg")`;
  carousel.content.forEach(function(item, index){
    item.querySelector("img").style.animationName =`carousel${index%3 + 1}`;
  });
carousel.control.left.addEventListener("click",function(e){
  e.preventDefault();

  document.querySelector(".carousel-control.left").style.backgroundImage = carousel.pointer === 0 ? `url("/assets/images/carousel-img-${carousel.content.length-1}.jpg")` : `url("/assets/images/carousel-img-${carousel.pointer - 1}.jpg")`;
 });
carousel.control.right.addEventListener("click",function(e){
  //  e.preventDefault();
  //  if(document.querySelector(".carousel-content img").style.animationName == "carousel1"){
  //      document.querySelector(".carousel-content img").style.animationName = "carousel2";
  //  }
  //  else if (document.querySelector(".carousel-content img").style.animationName == "carousel2") {
  //    document.querySelector(".carousel-content img").style.animationName = "carousel3";
   //
  //  } else {
  //    document.querySelector(".carousel-content img").style.animationName = "carousel1";
  //  }
 document.querySelector(".carousel-control.right").style.backgroundImage = carousel.pointer === carousel.content.length-1 ? `url("/assets/images/carousel-img-${0}.jpg")` : `url("/assets/images/carousel-img-${carousel.pointer + 1}.jpg")`;
  });

}
