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

// Custom Slider for health care package ... assumed to be standarized
if(document.querySelector(".slider")){
  console.log("slider-enabled");
  var buttons = {
    prev :document.querySelector(".slider-btn.prev"),
    next :document.querySelector(".slider-btn.next")
  };
  buttons.prev.addEventListener("click",slide_left,false);
  buttons.next.addEventListener("click",slide_right,false);
function slide_right(e){
  e.preventDefault();
  document.querySelector(".slider").classList.add("slide-left");
  document.querySelector(".slider").addEventListener("animationend",function(){
    document.querySelector(".slider").classList.remove("slide-left");
  });
  // setTimeout(function(){
  //   document.querySelector(".slider").style.animationPlayState = "paused";
  // },1000);
  // console.log("right clicked");
  var slider_items = document.querySelectorAll(".slider-item");
  var active_slides = [];
 slider_items.forEach(function(item, index){
    if(item.classList.contains("active")){
      active_slides.push(index);
    }
  });
  // console.log(active_slides);
    for(var i = 0; i < active_slides.length; i++){
      if(active_slides[i] === slider_items.length - 1) {
        active_slides[i] = 0;
      }
      else {
        active_slides[i] += 1;
      }
    }
  // console.log(active_slides);
  slider_items[0].classList.toggle("active");
  slider_items[active_slides[2]].classList.toggle("active");
  var left_slide = slider_items[0].cloneNode(true);
  slider_items[0].remove();
  document.querySelector(".slider").append(left_slide);
}
function slide_left(e){
  e.preventDefault();
  document.querySelector(".slider").classList.add("slide-right");
  document.querySelector(".slider").addEventListener("animationend",function(){
    document.querySelector(".slider").classList.remove("slide-right");
  });
  // document.querySelector(".slider").style.animationName = "slide-left";
  // document.querySelector(".slider").style.animaationIterationCount = "1";
  // document.querySelector(".slider").style.animationPlayState = "running";

  var slider_items = document.querySelectorAll(".slider-item");
  var active_slides = [];
 slider_items.forEach(function(item, index){
    if(item.classList.contains("active")){
      active_slides.push(index);
    }
  });
  // console.log(active_slides);
    for(var i = 0; i < active_slides.length; i++){
      if(active_slides[i] === 0) {
        active_slides[i] = slider_items.length -1;
      }
      else {
        active_slides[i] -= 1;
      }
    }
  // console.log(active_slides);
  slider_items[active_slides[2]+1].classList.toggle("active");
  slider_items[active_slides[0]].classList.toggle("active");
  var left_slide = slider_items[active_slides[0]].cloneNode(true);
  slider_items[active_slides[0]].remove();
  document.querySelector(".slider").insertBefore(left_slide,slider_items[0]);
}

}
// end custom slider
// Solutions to the problems
// void document.querySelector(".slider").offsetWidth;
// document.body.className = '';
// setTimeout(function(){
//   document.querySelector(".slider").style.animationPlayState = "paused";
// },1000);
// console.log("left clicked");
